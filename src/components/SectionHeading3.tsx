import {Heading} from "./Heading.tsx";
import {clsx} from "clsx";

export const SectionHeading3 = ({title, className}: {title: string, className?: string}) => {
    return (
        <div className={clsx("flex gap-4 items-center", className)}>
            <div className="h-8 w-[5px] bg-custom-cartier"></div>
            <div>
                <Heading type="h3">{title}</Heading>
            </div>
        </div>
    )
}