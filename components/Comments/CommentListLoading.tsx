function CommentListLoading() {
    return (
        <section className="space-y-4 animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-32" />
            <div className="space-y-3">
                {[1, 2].map((_, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="h-4 bg-gray-200 rounded w-20" />
                            <div className="h-4 bg-gray-200 rounded w-16" />
                        </div>
                        <div className="mt-1 h-4 bg-gray-200 rounded w-full" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CommentListLoading;