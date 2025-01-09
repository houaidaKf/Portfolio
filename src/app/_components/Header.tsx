import Link from "next/link";
import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <Section className="flex items-center justify-between py-2 mb-10">
        <div className="text-primary text-2xl font-bold font-caption ">
          <Link href="/">Jean de Dieu</Link>
        </div>
        <div>
          <nav className="flex justify-between text-sm">
            <ul className="flex items-center">
              <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out">
                <a href="#projects">Projects</a>
              </li>
              <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out">
                <a href="#about">About</a>
              </li>
              <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out ">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </Section>
    </header>
  );
};
