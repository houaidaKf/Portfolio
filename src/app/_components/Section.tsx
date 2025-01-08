import { cn } from "@/lib/utils";

export type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Section = (props: SectionProps) => {
  return (
    <section className={cn("max-w-2xl mx-auto px-4 mb-8", props.className)}>
      {props.children}
    </section>
  );
};

export const SectionTitle = (props: SectionProps) => {
  return (
    <div className="mb-8">
      <h2 className="mb-3 text-xs font-light uppercase tracking-wider">
        {props.children}
      </h2>
    </div>
  );
};
