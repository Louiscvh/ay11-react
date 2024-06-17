import {Heading} from "./Heading.tsx";

export const BookPreviewCard = ({title, author, cover, resume, className}: {title: string, author: string, cover: string, resume: string, className?: string}) => {
    return (
        <div>
            <img src={cover} alt={`Cover of ${title}`} className="border-4"/>
            <div>
                <span className="text-custom-dark-cartier capitalize">#Livre</span>
                <Heading type="h4">{title}</Heading>
                <Heading>{author}</Heading>
            </div>
        </div>
    )
}