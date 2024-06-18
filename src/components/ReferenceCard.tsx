import { Button } from "./Button.tsx";
import { Heading } from "./Heading.tsx";
import { clsx } from "clsx";

export const ReferenceCard = ({ title, tag, description, buttonText, className }: { title: string, tag: string, description: string, buttonText: string, className?: string }) => {

    return (
        <div className={clsx(className, "w-full flex flex-col justify-between focus:outline-2 transition hover:-translate-y-2 outline-[rgba(0,0,0,0)] focus:outline-custom-cartier focus:outline-offset-8 p-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]")} tabIndex={1}>
            <div className="flex flex-col">
                <Heading className="uppercase text-sm px-2 py-1 w-fit bg-custom-grey rounded-full">{tag}</Heading>
                <div className="my-4 gap-2 flex flex-col">
                    <Heading type="h4">{title}</Heading>
                    <Heading>{description}</Heading>
                </div>
            </div>
            <Button className="w-fit p-4">{buttonText}</Button>
        </div>
    )
}