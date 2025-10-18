import * as React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import BackgroundDoodles from "../PortfolioWithForm/BackgroundDoodles";

interface BlogPost {
  path: string;
  content: string;
}

export default function Blog(): React.ReactElement {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const files = import.meta.glob("/public/posts/*.md", { as: "raw" });
      const loaded = await Promise.all(
        Object.entries(files).map(async ([path, loader]) => {
          const text = await (loader as () => Promise<string>)();
          return { path, content: text };
        })
      );
      setPosts(loaded);
    };
    loadPosts();
  }, []);

  return (
    <div className="bg-bg-gray min-h-screen w-full flex flex-col items-center relative" data-model-id="1:62">
      <BackgroundDoodles />
      <section className="w-full flex flex-col items-center justify-center py-24 bg-transparent" id="blog">
        <div className="flex flex-col items-center gap-1 mb-10">
          <h2 className="font-title-h2 text-font-high-emphasis text-center">Blog</h2>
          <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
        </div>

        <div className="flex justify-center w-full max-w-4xl">
          <Card className="w-full bg-white rounded-3xl shadow-lg animate-fade-in">
            <CardContent className="p-8 w-full h-full">
              {posts.length === 0 ? (
                <p className="text-font-medium-emphasis">No posts found.</p>
              ) : (
                posts.map((post, index) => (
                  <article key={post.path} className="mb-12 last:mb-0 animate-fade-in" style={{ "--animation-delay": `${3600 + index * 200}ms` } as React.CSSProperties}>
                    <h3 className="text-2xl font-semibold mb-2">{post.path.split("/").pop()?.replace(".md", "")}</h3>
                    <pre className="whitespace-pre-wrap text-gray-700">{post.content}</pre>
                  </article>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
