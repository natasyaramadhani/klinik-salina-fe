export default function ServiceCard({ service, selected, onSelect }) {
  const Icon = service.icon;
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={() => onSelect(service.id)}
      className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition sm:gap-5 sm:p-5 ${
        selected
          ? "border-[#3f6b50] bg-[#e8f0e9]"
          : "border-neutral-200 bg-white hover:border-[#9db9a5]"
      }`}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f1f5f2] text-[#2f5a40]">
        <Icon size={22} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-semibold text-[#1f3a2b]">{service.name}</span>
        <span className="mt-1.5 block text-[13px] leading-snug text-neutral-500">
          {service.description}
        </span>
        <span className="mt-1.5 block text-[12px] font-semibold text-[#2f5a40]">
          {service.schedule}
        </span>
      </span>
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
          selected ? "border-[#3f6b50] bg-[#3f6b50]" : "border-neutral-300 bg-white"
        }`}
      >
        {selected && <span className="h-2 w-2 rounded-full bg-white" />}
      </span>
    </button>
  );
}