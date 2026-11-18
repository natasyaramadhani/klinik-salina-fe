export default function RadioRow({ label, selected, onSelect }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className="flex h-[50px] w-full items-center gap-3 rounded-lg border border-neutral-200 bg-white px-4 text-left transition hover:border-[#9db9a5]"
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
          selected ? "border-[#3f6b50]" : "border-neutral-300"
        }`}
      >
        {selected && <span className="h-2.5 w-2.5 rounded-full bg-[#3f6b50]" />}
      </span>
      <span className={`text-sm text-[#1f3a2b] ${selected ? "font-semibold" : ""}`}>{label}</span>
    </button>
  );
}