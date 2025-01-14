import { Mdx } from "@/app/_components/Mdx";
import { Section } from "@/app/_components/Section";
import { getArticle } from "@/lib/articles";
import { notFound } from "next/navigation";
import { ViewCount } from "./ViewCount";

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
          {new Date(article.publishedAt).toLocaleDateString()} •
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
