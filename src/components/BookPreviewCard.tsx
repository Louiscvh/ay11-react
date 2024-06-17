import {Heading} from "./Heading.tsx";
import {clsx} from "clsx";

export const BookPreviewCard = ({title, author, cover, resume, className}: {title: string, author: string, cover: string, resume: string, className?: string}) => {
    return (
        <div className={clsx(className, "focus:outline-2 outline-[rgba(0,0,0,0)] focus:outline-custom-cartier p-2")} tabIndex={1}>
            <img src={cover} alt={`Cover of ${title}`} className="border-4 transition hover:-translate-y-2 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] w-full object-cover mb-2"/>
            <div>
                <Heading type="h6" className="text-custom-cartier uppercase">#Livre</Heading>
                <Heading type="h4" className='mt-2'>{title}</Heading>
                <Heading type="h6">{author}</Heading>
                <Heading title={resume} className="line-clamp-3 mt-4">{resume}</Heading>
            </div>
        </div>
    )
}