export default function InfoRow({ label, value, strong = false, className = "" }) {
  return (
    <div className={className}>
      <p className="text-[13px] text-neutral-500">{label}</p>
      <p className={`mt-1 break-words text-[15px] text-[#1f3a2b] ${strong ? "font-semibold" : ""}`}>
        {value || "-"}
      </p>
    </div>
  );
}