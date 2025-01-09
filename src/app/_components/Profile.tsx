import { Section } from "./Section";
import { Socials } from "./Socials";

export const Profile = () => {
  return (
    <Section className="py-8">
      <div className="flex items-start gap-6  ">
        <div className="flex items-center justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/141136058?v=4"
            alt="Profile"
            className=" rounded-full max-w-24 max-h-24"
          />
        </div>
        {/* about */}
        <div className="space-y-1">
          <h1 className="text-md md:text-2xl font-bold">
            Hi, I&apos;m Jean de Dieu
          </h1>
          <p className="text-muted-foreground max-w-md font-light text-xs md:text-sm">
            a self-taught fullstack developer, specializing in building scalable
            and efficient backend systems.
          </p>
          <span className="relative mt-2 text-xs md:text-sm font-medium inline-flex items-center text-black-400 dark:text-zinc-200">
            Lome, Togo
          </span>
        </div>
      </div>
      <Socials className="mt-4" />
    </Section>
  );
};
