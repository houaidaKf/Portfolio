import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github } from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";
import { Section } from "./Section";

export const Profile = () => {
  return (
    <Section>
      {/* about */}
      <div className="space-y-2">
        <div className="mb-4 flex items-center justify-center gap-6">
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/141136058?v=4"
              alt="profile"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <div>
            <h1 className="text-md md:text-2xl font-bold">
              Hi, I'm Jean de Dieu
            </h1>
            <p className="text-xs md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-6 mb-8">
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
