import type { ReactNode } from "react";

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-2 text-[12px] font-semibold tracking-[.16em] text-black">
      <span className="h-px w-5 bg-brand" />
      {children}
    </p>
  );
}
