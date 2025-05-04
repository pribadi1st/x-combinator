import SearchFrom from "../../components/Form/SearchForm";
import PostList from "@/components/Posts/PostList";

async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
    const { query } = await searchParams;
    return (
        <>
            <section className="heading-container">
                <h1 className="heading">Execute your idea, <br />reach your dream</h1>
                <p className="sub-heading !max-w-3xl">
                    Submit it, Vote on pitches, and get feedback from the community. <br />
                </p>

                <SearchFrom query={query} />
            </section>
            <section className="section-container" >
                <p className="text-30-semibold">
                    {query ? `Search results for ${query}` : 'All Posts'}
                </p>
                <PostList query={query ?? ''} />
            </section>
        </>
    );

}
export default Home