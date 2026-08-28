import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <div>
        <p className="text-sm font-medium text-emerald-700">LIFEBridge MedTech</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Business OS + Intelligence
        </h1>
        <p className="mt-3 text-slate-600">
          Multi-company GST Business Operating System with Agent 3 lead
          acquisition. Human approval required for all external messages.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/login"
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Login
        </Link>
        <Link
          href="/intelligence"
          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
        >
          Intelligence
        </Link>
        <Link
          href="/approvals"
          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
        >
          Approvals
        </Link>
      </div>
      <p className="text-xs text-slate-500">
        Configure DATABASE_URL (Supabase pooler) and AUTH_SECRET in Vercel env
        vars. See docs/FIX_AND_SETUP.md.
      </p>
    </main>
  );
}
