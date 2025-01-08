import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github } from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";
import { Section } from "./Section";

export const Profile = () => {
  return (
    <Section className="py-8">
      <div className="flex items-start gap-6 ">
        <div className="flex items-center justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/141136058?v=4"
            alt=""
            className="w-24 h-24 rounded-full"
          />
        </div>
        {/* about */}
        <div className="space-y-2">
          <h1 className="text-md md:text-2xl font-bold">
            Hi, I'm Jean de Dieu
          </h1>
          <p className="text-gray-500 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
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
    </Section>
  );
};
