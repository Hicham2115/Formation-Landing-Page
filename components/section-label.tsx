import type { ReactNode } from "react";

export default function SectionLabel({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`mb-5 flex items-center gap-2 text-[12px] font-semibold tracking-[.16em] ${tone === "light" ? "text-white/65" : "text-black"}`}
    >
      <span className="h-px w-5 bg-brand" />
      {children}
    </p>
  );
}
