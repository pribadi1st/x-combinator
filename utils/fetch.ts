const API_BASE_URL = process.env.API_BASE_URL
export const fetchPosts = async (tag: string, limit: number = 9, skip: number = 0): Promise<PostType[]> => {
    let url = `${API_BASE_URL}/posts`
    console.log(tag, "tagnya")
    if (tag) {
        url += `/tag/${tag}`
    }
    url += `?limit=${limit}&skip=${skip}`
    const response = await fetch(url)
    if (response.ok) {
        const { posts }: { posts: PostType[] } = await response.json()

        try {
            const enrichedPosts = await Promise.all(
                posts.map(async (post) => {
                    const responseUser = await fetch(`${API_BASE_URL}/users/${post.userId}`);
                    if (!responseUser.ok) throw new Error('Cannot fetch user');
                    const user = await responseUser.json();
                    return { ...post, user }; // return a new enriched object
                })
            );
            return enrichedPosts;
        } catch (e) {
            console.log("something went wrong fetching user")
            return []
        }
    }
    return []
}

export const fetchSinglePost = async (id: number): Promise<PostType | null> => {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`)
    if (response.ok) {
        const post = await response.json()
        const responseUser = await fetch(`${API_BASE_URL}/users/${post.userId}`);
        if (!responseUser.ok) throw new Error('Cannot fetch user');
        const user = await responseUser.json();
        return { ...post, user }; // return a new enriched object
    }
    return null
}

export const fetchPostsComment = async (postId: number, skip: number = 0, limit: number = 10): Promise<CommentResponseType> => {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments?skip=${skip}&limit=${limit}`)
    if (response.ok) {
        const responseData = await response.json()
        return responseData
    }
    return {
        comments: [],
        total: 0,
        skip: 0,
        limit: 0
    }
}