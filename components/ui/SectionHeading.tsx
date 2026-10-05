type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  const titleColor =
    tone === "light" ? "text-white" : "text-[#183B2B]";

  const descriptionColor =
    tone === "light" ? "text-white/65" : "text-[#183B2B]/65";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B58B4A]">
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${titleColor}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${descriptionColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}