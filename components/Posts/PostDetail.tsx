import Link from "next/link";
import { fetchSinglePost } from "@/utils/fetch";
import CommentList from "@/components/Comments/CommentList";
import CommentListLoading from "@/components/Comments/CommentListLoading";
import { Suspense } from "react";

async function PostDetail({ id }: { id: number }) {
    const post = await fetchSinglePost(id);

    if (!post) {
        return <div>Post not found</div>;
    }

    const { title, views, user, tags, body, reactions: { likes, dislikes } } = post;

    const fullName = !user ? '' : `${user.firstName} ${user.lastName}`;
    return (
        <main className="container mx-auto p-6 space-y-8">
            {/* Post Header */}
            <section className="space-y-2">
                <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                        <img
                            src={user.image}
                            alt="User avatar"
                            className="w-8 h-8 rounded-full"
                        />
                        <span>{fullName}</span>
                    </div>
                    <span>•</span>
                    <span>{views} views</span>
                </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                    <Link
                        key={idx}
                        href={`/?query=${tag}`}
                    >
                        <span
                            className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                        >
                            #{tag}
                        </span>
                    </Link>
                ))}
            </div>

            {/* Body */}
            <article className="prose max-w-none text-gray-800">
                <p>
                    {body}
                </p>
            </article>

            {/* Reactions */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                    <span>👍</span>
                    <span>{likes}</span>
                </div>
                <div className="flex items-center gap-1">
                    <span>👎</span>
                    <span>{dislikes}</span>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-t border-gray-200" />

            {/* Comments Section (optional) */}
            <Suspense fallback={<CommentListLoading />}>
                <CommentList postId={id} />
            </Suspense>
        </main>
    )
}

export default PostDetail;