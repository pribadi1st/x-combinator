
import { fetchPosts } from "@/utils/fetch";
import PostCard from "./Card";

async function PostList({ query }: { query: string }) {
    const posts = await fetchPosts(query);

    return (
        <ul className="mt-7 card-grid">
            {posts.length > 0 ?
                posts.map((post: PostType, index: number) =>
                    <PostCard post={post} key={index} />
                ) : <p>No Posts found</p>}
        </ul>
    );
}

export default PostList;