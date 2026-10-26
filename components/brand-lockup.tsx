type BrandLockupProps = {
  inverse?: boolean;
  className?: string;
};

export default function BrandLockup({
  inverse = false,
  className = "",
}: BrandLockupProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className={`relative grid size-11 shrink-0 place-items-center rounded-[14px] shadow-sm ring-1 ring-black/5 ${
          inverse ? "bg-white text-ink" : "bg-ink text-white"
        }`}
      >
        <span className="-mt-0.5 text-[25px] font-black leading-none tracking-[-.09em]">
          A
        </span>
        <span className="absolute bottom-[9px] right-[8px] size-1.5 rounded-[2px] bg-brand" />
      </span>
      <span className="flex flex-col gap-1">
        <span
          className={`text-[12px] font-bold leading-none tracking-[.09em] ${
            inverse ? "text-white" : "text-ink"
          }`}
        >
          ADDIC’S LASER
        </span>
        <span
          className={`text-[9px] font-medium leading-none tracking-[.16em] ${
            inverse ? "text-white/55" : "text-neutral-700"
          }`}
        >
          FORMATION PROFESSIONNELLE
        </span>
      </span>
    </span>
  );
}
