const PostListFallback = () => (
    <ul className="mt-7 card-grid">
        {Array.from({ length: 6 }).map((_, i) => (
            <div
                key={i}
                className="max-w-md w-full bg-white rounded-2xl animate-pulse p-6 space-y-4"
            >
                <div className="h-6 bg-gray-300 rounded w-3/4" />
                <div className="h-4 bg-gray-300 rounded w-full" />
                <div className="h-4 bg-gray-300 rounded w-1/2" />
                <div className="h-3 bg-gray-200 rounded w-1/3" />
            </div>
        ))}
    </ul>
);

export default PostListFallback;