import { Check, Lock } from "lucide-react";

export default function TimeSlotCard({ slot, selected, onSelect }) {
  const full = slot.quota === 0;
  const caption = selected ? "Jadwal terpilih" : full ? "Kuota penuh" : `${slot.quota} kuota tersedia`;

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      aria-disabled={full}
      disabled={full}
      onClick={() => onSelect(slot.id)}
      className={`flex h-20 w-full items-center justify-between rounded-xl border px-5 text-left transition ${
        full
          ? "cursor-not-allowed border-neutral-200 bg-[#f1f3f1] text-neutral-400"
          : selected
            ? "border-[#3f6b50] bg-[#e8f0e9] text-[#1f3a2b]"
            : "border-neutral-200 bg-white text-[#1f3a2b] hover:border-[#9db9a5]"
      }`}
    >
      <span>
        <span className="block text-[15px] font-bold">{slot.time}</span>
        <span className={`mt-1 block text-[13px] ${full ? "" : "text-neutral-500"}`}>{caption}</span>
      </span>
      {full ? (
        <Lock size={16} />
      ) : (
        selected && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#3f6b50] text-[#3f6b50]">
            <Check size={12} strokeWidth={3} />
          </span>
        )
      )}
    </button>
  );
}