import LoadingDetail from "@/components/Posts/LoadingDetail";
import { Suspense } from "react";
import PostDetail from "@/components/Posts/PostDetail";

async function Posts({ params }: { params: { id: string } }) {
    const { id } = await params;

    return (
        <main className="container mx-auto space-y-8 flex-grow">
            <Suspense fallback={<LoadingDetail />}>
                <PostDetail id={+id} />
            </Suspense>
        </main>
    );
};

export default Posts;