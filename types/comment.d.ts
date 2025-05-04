interface CommentResponseType {
    comments: CommentType[]
    total: number;
    skip: number;
    limit: number;
}

interface CommentType {
    id: number;
    body: string;
    postId: number; // post id is 1
    likes: number;
    user: {
        id: number;
        username: string;
        fullName: string;
    }
}