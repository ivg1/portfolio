import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Button from "../components/buttons";
import posts from "../data/blogPosts.json";

export default function BlogPage() {
    return (
        <div className="spacing-for-header min-h-screen">
            <Header />
            <main className="sm:px-[5%] lg:px-[10%] px-6 py-10">
                <p className="text-md text-gray2">welcome to my</p>
                <h1 className="text-6xl font-black tracking-tight">Blog</h1>
                <p className="text-gray2 mt-3">{posts.length} posts</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                    {posts.map((post) => (
                        <article key={post.slug} className="rounded-2xl border border-gray1 bg-black/20 backdrop-blur-3xl p-6">
                            <h2 className="text-3xl font-bold tracking-wide">{post.title}</h2>
                            <p className="text-gray2 mt-3">{post.summary}</p>
                            <div className="mt-5">
                                <Button option="solidbgRed" link={`/blog/${post.slug}`}>Read post</Button>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
