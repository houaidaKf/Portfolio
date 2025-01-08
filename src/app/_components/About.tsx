"use client";
import { useState } from "react";
import { Section, SectionTitle } from "./Section";

export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const moreText = (
    <div
      className={`text-sm overflow-hidden transition-all duration-700 ease-in mb-4
      ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
    >
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
        officiis nobis in consectetur autem veniam esse harum error sit expedita
        commodi, animi deleniti, ipsum quidem minus explicabo corrupti fugiat
        nihil. Quod consequatur iste pariatur tempore fugit facere voluptatem
        non mollitia expedita omnis quae, consequuntur numquam, quam voluptas
        soluta culpa sed animi quibusdam commodi a ipsa hic aliquam atque rerum?
        Ut, sapiente veritatis. Quod, adipisci accusantium dolorum animi
        architecto neque quisquam cupiditate quaerat molestiae praesentium sint
        repellat itaque quia vel pariatur dicta ullam molestias possimus odit
        amet hic voluptate? Id molestiae incidunt eos voluptatem dolore officia
        vel suscipit exercitationem velit dolor.
      </p>
    </div>
  );
  return (
    <Section>
      <SectionTitle>About Me</SectionTitle>
      <div className="text-sm mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse a
          assumenda expedita eaque voluptatibus, in exercitationem, deleniti
          ducimus nihil atque obcaecati, vel fuga quia voluptas?
        </p>
      </div>
      {moreText}

      <button
        className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-down h-4 w-4 transition-transform rotate-90"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-down h-4 w-4 transition-transform"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        )}

        {isExpanded ? "View less" : "View more"}
      </button>
    </Section>
  );
};
