import logoAsset from "@/assets/sanjeevani-logo.webp";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset}
      alt="Sanjeevani ICU & Hospital"
      className={className}
      width={120}
      height={120}
    />
  );
}
