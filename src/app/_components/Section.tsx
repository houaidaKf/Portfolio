import { cn } from "@/lib/utils";

export type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Section = (props: SectionProps) => {
  return (
    <section
      className={cn(
        "w-full h-auto px-12 sm:px-24 md:px-32 lg:px-48 xl:px-64 2xl:px-96 mb-10",
        props.className
      )}
    >
      {props.children}
    </section>
  );
};
