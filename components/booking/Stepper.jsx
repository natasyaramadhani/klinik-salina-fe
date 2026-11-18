export default function Stepper({ steps, current = 1 }) {
  return (
    <ol className="flex items-start">
      {steps.map((label, i) => {
        const n = i + 1;
        const reached = n <= current;
        return (
          <li key={label} className="relative flex flex-1 flex-col items-center">
            {i > 0 && (
              <span
                className={`absolute right-1/2 top-4 h-[2px] w-full -translate-y-1/2 ${
                  reached ? "bg-[#3f6b50]" : "bg-[#cfe2d5]"
                }`}
              />
            )}
            <span
              className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                reached ? "bg-[#3f6b50] text-white" : "bg-[#d4e6d9] text-[#1f3a2b]"
              }`}
            >
              {n}
            </span>
            <span
              className={`mt-1.5 text-center text-[10px] leading-tight text-[#1f3a2b] sm:text-xs ${
                n === current ? "font-semibold" : ""
              }`}
            >
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}