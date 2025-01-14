import { Mdx } from "@/app/_components/MdxLayout/Mdx";
import { Section } from "@/app/_components/Section";
import { getArticle } from "@/lib/articles";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ViewCount } from "./ViewCount";

export const dynamic = "force-static";

export const generateMetadata = async (props: {
  params: { slug: string };
}): Promise<Metadata> => {
  const article = await getArticle(props.params.slug);

  if (!article) {
    return {
      title: "404 - Page Not Found",
      description: "Page not found",
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
};

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const article = await getArticle(slug);

  if (!article) {
    return notFound();
  }

  return (
    <Section className="prose prose-invert prose-sm lg:prose-base">
      <div className="flex items-center gap-2">
        <p className="text-primary">
          {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}{" "}
          •
        </p>
        <ViewCount slug={slug} />
      </div>
      <div>
        <h1>{article.title}</h1>
      </div>
      <Mdx content={article.content} />
    </Section>
  );
}
