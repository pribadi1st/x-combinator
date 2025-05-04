interface PostType {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
    userId: number;
    user: UserType
}

interface PostTypeResponse {
    posts: PostType[]
    total: number
    skip: number
    limit: number
}