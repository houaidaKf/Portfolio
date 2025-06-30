import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectCard } from "./ProjectCard";
import { Section, SectionTitle } from "./Section";

export const Projects = () => {
  const ProjectList = PROJECTS.map((project) => (
    <CarouselItem
      className="min-w-0 shrink-0 grow-0 md:basis-1/2 basis-11/12 py-1 pl-1 md:pl-2"
      key={project.title}
    >
      <div className="">
        <ProjectCard
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      </div>
    </CarouselItem>
  ));

  return (
    <Section>
      <SectionTitle id="projects">Recent projects</SectionTitle>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1 md:-ml-2">
          {ProjectList}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
};

const PROJECTS = [
  {
    title: "ECOSHARE",
    description:
      "A web and mobile application for school families to share daily commutes",
    image:
      "/ecoshare.png",
    link: "https://myecoshare.com/",
  }, 
  {
    title: "ITCHECK",
    description:
      "A Mobile application linking users to experts in various fields.",
    image:
      "/itcheck.png",
    link: "https://play.google.com/store/apps/details?id=com.itchek&hl=ln",
  },
  {
    title: "AHKILI",
    description:
      "A web and mobile app providing psychological support with certified therapists.",
    image:
      "/ahkili.png",
    link: "https://www.ahkili.com.tn/",
  },
  {
    title: "UNETP",
    description:
      "A web app for managing private educational institutions.",
    image:
      "/unetp.png",
    link: "https://unetp.eu/",
  },
   {
    title: "KIDS PROTECT",
    description:
      "A web and mobile app helping parents monitor children’s visual and mental health.",
    image:
      "/kids_protect.png",
    link: "https://www.kidsprotectapp.com/",
  },
  
];
