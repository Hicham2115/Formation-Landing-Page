import Image from "next/image";

type BrandLockupProps = {
  inverse?: boolean;
  className?: string;
};

export default function BrandLockup({
  inverse = false,
  className = "",
}: BrandLockupProps) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={inverse ? "/logo-fia-white.png" : "/logo-fia.jpg"}
        alt="Full International Academy"
        width={1268}
        height={1018}
        priority
        sizes="80px"
        className={inverse ? "h-20 w-auto" : "h-14 w-auto sm:h-16"}
      />
    </span>
  );
}
