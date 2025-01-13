import { Mdx } from "@/app/_components/Mdx";
import { Section } from "@/app/_components/Section";
import { getArticle } from "@/lib/articles";
import { notFound } from "next/navigation";
export default async function page({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);

  if (!article) {
    return notFound();
  }

  return (
    <Section className="prose prose-invert prose-sm lg:prose-base">
      <div>
        <p className="text-primary">{article.publishedAt}</p>
        <h1>{article.title}</h1>
      </div>
      <Mdx content={article.content} />
    </Section>
  );
}
