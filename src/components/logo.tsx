import React from "react";

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Triangle Icon */}
      <div className="relative flex items-center justify-center">
        <svg
          className="h-8 w-8 text-[#2563EB]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Rounded triangle outline */}
          <path
            d="M12 4.5L4.5 18.5H19.5Z"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Dot on bottom right */}
          <circle cx="19.5" cy="18.5" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Vertical Divider */}
      <div className={`h-8 w-[1px] ${light ? "bg-slate-700" : "bg-slate-200"}`} />

      {/* Logo Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading text-lg font-black tracking-wide ${
            light ? "text-white" : "text-[#0A1628]"
          }`}
        >
          AMLESH
        </span>
        <span className="font-sans text-[8.5px] font-bold tracking-[0.24em] text-[#2563EB] mt-0.5">
          INFOTECH
        </span>
      </div>
    </div>
  );
}
