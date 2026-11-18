export const inputBase =
  "h-[50px] w-full rounded-lg border bg-white px-4 text-[15px] text-[#1f3a2b] outline-none transition placeholder:text-neutral-400 focus:border-[#3f6b50] focus:ring-1 focus:ring-[#3f6b50]";

export const inputState = (error, valid) =>
  error ? "border-[#b3261e]" : valid ? "border-[#3f6b50]" : "border-neutral-200";

export default function Field({ id, label, required, hint, error, valid, className = "", children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-base font-medium text-[#1f3a2b]">
        {label}
        {required && <span className="ml-1 text-[#b3261e]">*</span>}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-[13px] text-[#b3261e]">{error}</p>
      ) : hint ? (
        <p className={`mt-2 text-[13px] ${valid ? "text-[#3f6b50]" : "text-neutral-500"}`}>{hint}</p>
      ) : null}
    </div>
  );
}