"use client";
import { useState } from "react";
import { Section, SectionTitle } from "./Section";

export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const moreText = (
    <div
      className={`space-y-4 text-sm overflow-hidden transition-all duration-700 ease-in mb-2
      ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
    >
      <div>
        <p>
          I hold an Engineering degree in Computer Science from the Polytechnic School of Sousse. 
          Over the past three years, I have been actively working in the field while pursuing my studies, driven by a strong passion for 
          technology and problem-solving. This hands-on experience, combined with my academic background, has allowed me to build 
          solid expertise in modern computer science and emerging technologies.
        </p>
      </div>
     
    </div>
  );
  return (
    <Section>
      <SectionTitle id="about">About Me</SectionTitle>
      <div className="text-sm mb-4">
        <p>
          I&apos;m a passionate developer with a strong interest in various
          technology fields, including web development (with a primary focus on
          backend systems) ,data and AI.
          I&apos;m also deeply intrigued by the intersection of technology and innovation. 
          With over 3 years of experience, I&apos;ve honed my skills through personal projects and
          enjoy continuously learning and exploring new technologies to expand
          my expertise.
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
            className="h-4 w-4 transition-transform rotate-90"
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
            className="h-4 w-4 transition-transform"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        )}

        {isExpanded ? "View less" : "View more"}
      </button>
    </Section>
  );
};
