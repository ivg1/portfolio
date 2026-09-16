import { useMemo } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Button from "../components/buttons";
import posts from "../data/blogPosts.json";

const markdownFiles = import.meta.glob("../content/blog/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});

export default function BlogPostPage() {
    const { slug } = useParams();

    const post = useMemo(
        () => posts.find((entry) => entry.slug === slug),
        [slug]
    );

    const markdown = post
        ? markdownFiles[`../content/blog/${post.file}`]
        : undefined;

    if (!post || !markdown) {
        return (
            <div className="spacing-for-header min-h-screen">
                <Header />
                <main className="sm:px-[5%] lg:px-[10%] px-6 py-10 max-w-4xl">
                    <p className="text-md text-gray2">blog post</p>
                    <h1 className="text-5xl font-black tracking-tight mt-1">Post not found</h1>
                    <p className="text-gray2 mt-4">The requested blog post does not exist.</p>
                    <div className="mt-6 flex gap-3">
                        <Button option="solidbgRed" link="/blog">To blog</Button>
                        <Button option="blurredbg" color="grayBorder" link="/#projects">To projects</Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="spacing-for-header min-h-screen">
            <Header />
            <main className="sm:px-[5%] lg:px-[10%] px-6 py-10 max-w-4xl">
                <p className="text-md text-gray2">blog post</p>
                <h1 className="text-5xl font-black tracking-tight mt-1">{post.title}</h1>

                <article className="p-2 mt-8 prose prose-invert max-w-none">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
                </article>

                <div className="mt-6 flex gap-3">
                    <Button option="solidbgRed" link="/blog">To blog</Button>
                    <Button option="blurredbg" color="grayBorder" link="/#projects">To projects</Button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
