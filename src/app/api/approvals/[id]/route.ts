/**
 * PATCH /api/approvals/[id]
 * Approve or reject. NEVER auto-sends external messages.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db/prisma";

function apiSuccess<T>(data: T) {
  return NextResponse.json({ success: true, data, error: null });
}
function apiError(code: string, message: string, status = 400) {
  return NextResponse.json(
    { success: false, data: null, error: { code, message } },
    { status }
  );
}

const schema = z.object({
  status: z.enum(["APPROVED", "REJECTED"]),
  rejectionReason: z.string().max(1000).optional(),
});

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session?.userId) return apiError("UNAUTHORIZED", "Authentication required", 401);

    const companyId = session.companyId;
    if (!companyId) return apiError("COMPANY_REQUIRED", "No active company", 400);

    const { id } = await params;
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return apiError("VALIDATION_ERROR", parsed.error.errors.map((e) => e.message).join("; "));
    }

    const existing = await prisma.approvalRequest.findFirst({
      where: { id, companyId },
    });
    if (!existing) return apiError("NOT_FOUND", "Approval request not found", 404);
    if (existing.status !== "PENDING") {
      return apiError("INVALID_STATE", `Cannot change status from ${existing.status}`);
    }

    const { status, rejectionReason } = parsed.data;

    const updated = await prisma.approvalRequest.update({
      where: { id },
      data: {
        status,
        approvedBy: status === "APPROVED" ? session.userId : null,
        approvedAt: status === "APPROVED" ? new Date() : null,
        rejectedBy: status === "REJECTED" ? session.userId : null,
        rejectedAt: status === "REJECTED" ? new Date() : null,
        rejectionReason: status === "REJECTED" ? rejectionReason ?? null : null,
      },
    });

    await prisma.messageDraft.updateMany({
      where: { approvalRequestId: id, companyId },
      data: {
        status: status === "APPROVED" ? "APPROVED" : "REJECTED",
      },
    });

    await prisma.auditLog.create({
      data: {
        companyId,
        userId: session.userId,
        action: status === "APPROVED" ? "APPROVAL_APPROVED" : "APPROVAL_REJECTED",
        entityType: "ApprovalRequest",
        entityId: id,
        newValues: { status },
      },
    });

    // IMPORTANT: We do NOT call any email/WhatsApp provider here.
    return apiSuccess({
      approval: updated,
      note:
        status === "APPROVED"
          ? "Approved. External send requires separate send action + configured provider."
          : "Rejected. No external message was sent.",
    });
  } catch (err) {
    console.error("[approvals PATCH]", err);
    return apiError("INTERNAL_ERROR", "Failed to update approval", 500);
  }
}
