/**
 * Shared types for Agent 3 — Business Intelligence
 */

export type LeadStatus =
  | "DISCOVERED"
  | "UNVERIFIED"
  | "REVIEW"
  | "VERIFIED"
  | "QUALIFIED"
  | "CONTACTED"
  | "RFQ"
  | "QUOTATION"
  | "NEGOTIATION"
  | "WON"
  | "LOST"
  | "NURTURE"
  | "IGNORED";

export type ConfidenceLevel =
  | "UNVERIFIED"
  | "PARTIALLY_VERIFIED"
  | "VERIFIED"
  | "HIGH_CONFIDENCE";

export type SourceType =
  | "GOVERNMENT"
  | "HOSPITAL"
  | "CLINIC"
  | "DIAGNOSTIC"
  | "VETERINARY"
  | "MEDICAL_COLLEGE"
  | "PROCUREMENT_PORTAL"
  | "TENDER_PORTAL"
  | "SEARCH"
  | "PUBLIC_DIRECTORY"
  | "OTHER";

export type HealthcareCategory =
  | "MEDICAL_EQUIPMENT"
  | "HOSPITAL_EQUIPMENT"
  | "VETERINARY_EQUIPMENT"
  | "DIAGNOSTIC"
  | "LABORATORY"
  | "ICU"
  | "OT"
  | "CSSD"
  | "HOSPITAL_FURNITURE"
  | "PPE"
  | "CONSUMABLES"
  | "SANITATION"
  | "BIOMEDICAL"
  | "SERVICE"
  | "AMC"
  | "INFRASTRUCTURE"
  | "PROJECT"
  | "PROCUREMENT"
  | "OTHER";

export type EvidenceType =
  | "OFFICIAL_WEBSITE"
  | "TENDER"
  | "RFQ"
  | "RFP"
  | "NEWS"
  | "PROJECT"
  | "PROCUREMENT_NOTICE"
  | "PUBLIC_DIRECTORY"
  | "SEARCH_RESULT"
  | "OTHER";

export type MessageChannel = "EMAIL" | "WHATSAPP";

export type ApprovalStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "CANCELLED"
  | "SENT"
  | "FAILED";

export interface CreateLeadInput {
  companyId: string;
  organizationName: string;
  title: string;
  description?: string;
  category?: HealthcareCategory;
  sourceUrl?: string;
  sourceId?: string;
  tenderNumber?: string;
  deadline?: Date;
  estimatedValueMin?: number;
  estimatedValueMax?: number;
  city?: string;
  state?: string;
  organizationType?: string;
}

export interface ApiSuccess<T> {
  success: true;
  data: T;
  error: null;
}

export interface ApiError {
  success: false;
  data: null;
  error: {
    code: string;
    message: string;
  };
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;
