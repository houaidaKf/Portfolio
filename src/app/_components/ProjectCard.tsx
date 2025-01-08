import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <img src={props.image} alt={props.title} />
      </CardHeader>
      <CardContent>
        <CardDescription>{props.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button>
          <Link href={props.link}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
