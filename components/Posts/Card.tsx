"use client"
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PostCard = ({ post }: { post: PostType }) => {
    const { user } = post
    const router = useRouter()
    const fullName = !user ? '' : `${user.firstName} ${user.lastName}`
    const handleTagClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation()
    }
    return (
        <div
            className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-xl transition-shadow duration-300"
            onClick={() => router.push(`/posts/${post.id}`)}
        >
            <div className="flex justify-between items-center gap-2">
                <h2 className="text-xl font-semibold text-gray-800 truncate">{post.title}</h2>
                <Image src={user.image} alt={fullName} width={32} height={32} />
            </div>
            <p className="text-gray-600 text-sm line-clamp-3">{post.body}</p>

            <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                    <Link href={`/?query=${tag}`} key={idx} onClick={handleTagClick}>
                        <span
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                        >
                            #{tag}
                        </span>
                    </Link>
                ))}
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex gap-3">
                    <span>👍 {post.reactions.likes}</span>
                    <span>👎 {post.reactions.dislikes}</span>
                </div>
                <span>👁️ {post.views} views</span>
            </div>
        </div >

    );
};

export default PostCard;