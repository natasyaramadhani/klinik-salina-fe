import { ArrowLeft, User } from "lucide-react";

export default function BookingHeader({ title, onBack, userName }) {
  const displayName = userName?.trim() || "John Doe";

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-100 bg-white shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center gap-3 px-4 sm:px-6">
        <button
          type="button"
          onClick={onBack}
          aria-label="Kembali"
          className="flex h-9 w-9 items-center justify-center rounded-full text-[#1f3a2b] transition hover:bg-neutral-100"
        >
          <ArrowLeft size={20} />
        </button>

        <h1 className="flex-1 truncate text-[17px] font-medium text-[#1f3a2b]">{title}</h1>

        <div className="flex min-w-0 items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e3ece5] text-[#3f6b50]">
            <User size={18} />
          </div>
          <span className="max-w-[110px] truncate text-sm font-medium text-[#1f3a2b] sm:max-w-[200px]">
            {displayName}
          </span>
        </div>
      </div>
    </header>
  );
}