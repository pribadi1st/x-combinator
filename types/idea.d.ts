interface IdeaTypeCard {
    _createdAt: string;
    views: number;
    author: {
        _id: number,
        name: string
        avatarUrl: string
    };
    _id: number;
    description: string;
    image: string;
    category: string;
    title: string;
}