import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github } from "./icons/Github";
import Linkedin from "./icons/Linkedin";
export const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-2", className)}>
      <Link
        className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
        href="https://github.com/houaidaKf"
      >
        <Github size={14} />
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
        href="https://www.linkedin.com/in/houaida-krifa/"
      >
        <Linkedin size={14} />
      </Link>

    </div>
  );
};
