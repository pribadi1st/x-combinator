import { fetchPostsComment } from "@/utils/fetch";

async function CommentList({ postId }: { postId: number }) {
    const { comments, total } = await fetchPostsComment(postId);
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Comments</h2>
            <div className="space-y-3">
                {comments.map((comment) => (
                    <div key={comment.id} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{comment.user.fullName}</span>
                            <span>👍 {comment.likes}</span>
                        </div>
                        <p className="mt-1 text-gray-700">{comment.body}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CommentList;