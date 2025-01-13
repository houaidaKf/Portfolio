import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";

export const Mdx = ({ content }: { content: string }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXRemote source={content} />
    </Suspense>
  );
};
