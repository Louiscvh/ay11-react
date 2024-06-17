import {Heading} from "./Heading.tsx";
import {clsx} from "clsx";
import {Calendar} from 'lucide-react'
import {EventTypeEnum} from "../types/event.type.ts";
import {format} from "date-fns";

export const EventsCard = ({title, date, place, type, className}: {title: string, date: string, place: string, type: EventTypeEnum[], className?: string}) => {
    return (
        <div className={clsx(className, "focus:outline-2 transition hover:-translate-y-2 outline-[rgba(0,0,0,0)] focus:outline-custom-cartier focus:outline-offset-8 p-4 w-full shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]")} tabIndex={1}>
            <div className="flex gap-12 flex-col justify-between h-full">
                <div>
                    <ul className="flex gap-2">
                        {type.map((type, index) => (
                            <li key={index} className="text-custom-cartier uppercase">#{type}</li>
                        ))}
                    </ul>
                    <Heading type="h4" className='mt-2'>{title}</Heading>
                </div>
                <div>
                    <Heading type="h4">{place}</Heading>
                    <div className='flex items-center gap-2 mt-2 opacity-50'>
                        <Calendar/>
                        <Heading type="h6">{format(date, 'dd MMMM yyyy')}</Heading>
                    </div>
                </div>
            </div>
        </div>
    )
}