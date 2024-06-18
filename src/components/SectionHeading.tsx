import {Heading} from "./Heading.tsx";
import {clsx} from "clsx";

export const SectionHeading = ({title, desc, className, isWhite}: {title: string, desc?: string, className?: string, isWhite?: boolean}) => {
    return (
        <div className={clsx("flex gap-4 items-center", className)}>
            <div className={clsx(isWhite && "bg-white", "h-16 w-[5px] bg-custom-cartier")}></div>
            <div>
                <Heading type="p" className="uppercase">{desc}</Heading>
                <Heading type="h2">{title}</Heading>
            </div>
        </div>
    )
}