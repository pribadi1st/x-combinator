import Link from "next/link";

async function Page({ params }: { params: { id: string } }) {
    const { id } = await params;
    return (
        <div>
            <h1>User Detail page with user id: {id}</h1>
        </div>
    )
}

export default Page;