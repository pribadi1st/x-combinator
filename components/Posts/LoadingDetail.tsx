const LoadingDetail = () => {
    return (
        <main className="w-full mx-auto p-6 space-y-8">
            {/* Post Header */}
            <section className="space-y-2">
                <div className="h-12 bg-gray-200 rounded w-3/4" />
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full" />
                        <div className="h-4 bg-gray-200 rounded w-24" />
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-16" />
                </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-6 w-20 bg-gray-200 rounded-full" />
                ))}
            </div>

            {/* Body */}
            <article className="prose max-w-none">
                <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-4 bg-gray-200 rounded w-full" />
                    ))}
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
            </article>

            {/* Reactions */}
            <div className="flex items-center gap-6">
                <div className="h-4 w-12 bg-gray-200 rounded" />
                <div className="h-4 w-12 bg-gray-200 rounded" />
            </div>

            {/* Divider */}
            <hr className="border-t border-gray-200" />

            {/* Comments */}
            <section className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-32" />
                <div className="space-y-3">
                    {[1, 2].map((i) => (
                        <div key={i} className="p-4 bg-gray-100 rounded-lg space-y-2">
                            <div className="flex justify-between">
                                <div className="h-4 bg-gray-200 rounded w-20" />
                                <div className="h-4 bg-gray-200 rounded w-16" />
                            </div>
                            <div className="h-4 bg-gray-200 rounded w-full" />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default LoadingDetail;
