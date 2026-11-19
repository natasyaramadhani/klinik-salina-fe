import Link from "next/link";

export default function ActionBar({
  cancelHref = "/",
  nextHref,
  onNext,
  nextForm,
  nextDisabled = false,
  cancelLabel = "Batal",
  nextLabel = "Lanjut",
}) {
  const base =
    "flex h-12 items-center justify-center rounded-lg text-sm font-semibold transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3f6b50] focus-visible:ring-offset-2 sm:w-40 sm:flex-none";
  const nextClass = `${base} flex-[1.4] cursor-pointer bg-[#3f6b50] text-white hover:bg-[#2f5a40] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[#3f6b50] disabled:active:scale-100`;

  return (
    <div className="sticky bottom-0 z-10 border-t border-neutral-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl gap-3 px-4 py-4 sm:justify-end sm:px-6">
        <Link
          href={cancelHref}
          className={`${base} flex-1 cursor-pointer border border-neutral-200 bg-white text-[#1f3a2b] hover:border-[#9db9a5] hover:bg-[#f1f5f2]`}
        >
          {cancelLabel}
        </Link>

        {nextHref && !nextDisabled ? (
          <Link href={nextHref} className={nextClass}>
            {nextLabel}
          </Link>
        ) : (
          <button
            type={nextForm ? "submit" : "button"}
            form={nextForm}
            onClick={onNext}
            disabled={nextDisabled || (!nextHref && !onNext && !nextForm)}
            className={nextClass}
          >
            {nextLabel}
          </button>
        )}
      </div>
    </div>
  );
}