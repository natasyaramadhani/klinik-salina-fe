import Link from "next/link";

export default function SummaryCard({ title, editHref, children, className = "" }) {
  return (
    <section className={`rounded-xl border border-neutral-200 bg-white p-5 sm:p-6 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-bold text-[#1f3a2b]">{title}</h2>
        <Link
          href={editHref}
          className="shrink-0 pt-1 text-sm font-medium text-[#3f6b50] underline underline-offset-2 hover:text-[#2f5a40]"
        >
          Ubah Data
        </Link>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}