export default function DateCard({ date, selected, onSelect }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={() => onSelect(date.id)}
      className={`flex h-[104px] w-[88px] shrink-0 flex-col items-center justify-center rounded-xl border text-[#1f3a2b] transition sm:w-auto ${
        selected
          ? "border-[#3f6b50] bg-[#e8f0e9]"
          : "border-neutral-200 bg-white hover:border-[#9db9a5]"
      }`}
    >
      <span className="text-[13px]">{date.day}</span>
      <span className="my-1 text-2xl font-semibold">{date.number}</span>
      <span className="text-xs text-neutral-500">{date.label}</span>
    </button>
  );
}