import { Check, Clock, User } from "lucide-react";

export default function DoctorCard({ doctor, serviceName, selected, onSelect }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={() => onSelect(doctor.id)}
      className={`w-full rounded-xl border p-4 text-left transition sm:p-5 ${
        selected
          ? "border-[#3f6b50] bg-[#eef3ef]"
          : "border-neutral-200 bg-white hover:border-[#9db9a5]"
      }`}
    >
      <div className="flex items-center gap-4">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4e6d9] to-[#f1f5f2] text-[#3f6b50]">
          <User size={30} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[15px] font-bold text-[#1f3a2b]">{doctor.name}</span>
          <span className="mt-1 block text-[13px] text-neutral-500">
            {doctor.role} · {serviceName}
          </span>
          <span className="mt-1 block text-[13px] text-neutral-500">{doctor.experience}</span>
        </span>
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
            selected ? "border-[#3f6b50] bg-[#3f6b50] text-white" : "border-neutral-200 bg-white"
          }`}
        >
          {selected && <Check size={14} strokeWidth={3} />}
        </span>
      </div>

      <hr className="my-4 border-neutral-200" />

      <div className="flex items-center justify-between gap-2 text-[13px]">
        <span className="flex items-center gap-2 text-neutral-500">
          <Clock size={16} />
          {doctor.schedule}
        </span>
        <span className="shrink-0 font-semibold text-[#3f6b50]">{doctor.status}</span>
      </div>
    </button>
  );
}