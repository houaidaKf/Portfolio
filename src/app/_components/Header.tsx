import Link from "next/link";
import { Section } from "./Section";

export const Header = () => {
  return (
    <header>
      <Section className="flex justify-between py-4">
        <div className="text-2xl font-bold font-caption ">Jean de Dieu</div>
        <div>
          <nav className="flex justify-between">
            <ul className="flex items-center">
              <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out">
                <Link href="/">Projects</Link>
              </li>
              <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out">
                <Link href="/">About</Link>
              </li>
              <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out ">
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Section>
    </header>
  );
};
