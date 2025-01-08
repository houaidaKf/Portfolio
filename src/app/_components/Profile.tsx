import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github } from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";
import { Section } from "./Section";

export const Profile = () => {
  return (
    <Section className="">
      {/* about */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Jean de Dieu</h2>
        <h3 className="text-2xl font-semibold text-muted-foreground">
          Full Stack Developer
        </h3>
        <p className="text-gray-500 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <div className="flex gap-4 mt-6">
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href="https://github.com/johnOfGod33"
          >
            <Github size={12} />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href="https://linkedin.com/in/jean-de-dieu-sessou-260897292"
          >
            <Linkedin size={12} />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href="https://twitter.com/JohnKamiCode"
          >
            <Twitter size={12} />
          </Link>
        </div>
      </div>
    </Section>
  );
};
