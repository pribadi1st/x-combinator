import { formatDate } from "@/utils/date"
import Link from "next/link"
import Image from "next/image"
import { EyeIcon } from "lucide-react"
import { Button } from "../ui/button"

function IdeasCard({ idea }: { idea: IdeaTypeCard }) {
    const { _id: ideaId, title, author: { avatarUrl }, description, image, category } = idea
    const date = formatDate(idea._createdAt)
    return (
        <li className="idea-card group">
            <div className="flex justify-between flex-row">
                <p className="idea-card-date">
                    {date}
                </p>
                <div className="flex flex-row gap-1.5">
                    <EyeIcon className="size-6 text-primary"></EyeIcon>
                    <span className="text-16-medium">{idea.views}</span>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${idea.author?._id}`}>
                        <p className="text-16-medium line-clamp-1">
                            {idea.author.name}
                        </p>
                    </Link>
                    <Link href={`/ideas/${ideaId}`}>
                        <h3 className="font-medium text-[18px] line-clamp-1">
                            {title}
                        </h3>
                    </Link>
                </div>
                <Link href={`/user/${idea.author?._id}`}>
                    <Image src={`${avatarUrl}`} className="rounded-full" alt="placeholder" width={48} height={48} />
                </Link>
            </div>
            <Link href={`/ideas/${ideaId}`} className="flex flex-col gap-2">
                <p className="idea-card-desc">
                    {description}
                </p>
                <img src={image} alt="placeholder" className="idea-card-img" height={30}></img>
            </Link>
            <div className="flex flex-row justify-between gap-3">
                <Link href={`/?query=${category.toLocaleLowerCase()}`}>
                    <p className="font-medium text-16">
                        {category}
                    </p>
                </Link>
                <Button className="idea-card-btn" asChild>
                    <Link href={`/ideas=${ideaId}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export default IdeasCard