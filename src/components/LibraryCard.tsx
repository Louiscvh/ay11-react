import { Button } from "./Button.tsx";
import { Heading } from "./Heading.tsx";
import { clsx } from "clsx";

export const LibraryCard = ({ name, address, numberAvailable, location, className }: { name: string, address: string, numberAvailable: number, location: string, className?: string }) => {
    const available = () => {
        if (numberAvailable === 0) {
            return <Heading className="text-custom-cartier">Indisponible</Heading>
        } else if (numberAvailable === 1) {
            return < Heading className="text-custom-green" >1 exemplaire disponible</Heading >
        } else {
            return <Heading className="text-custom-green">{numberAvailable} exemplaires disponibles</Heading>
        }
    }

    return (
        <div className={clsx(className, "w-full focus:outline-2 transition hover:-translate-y-2 outline-[rgba(0,0,0,0)] focus:outline-custom-cartier focus:outline-offset-8 p-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]")} tabIndex={1}>
            <div className="flex gap-1 flex-col justify-between h-52">
                <Heading type="h4" className='mt-2'>{name}</Heading>
                <Heading>{address}</Heading>
                <div className="mt-2 gap-1 flex flex-col">
                    <Heading className="text-green-500">{available()}</Heading>
                    <Heading>{location}</Heading>
                    <Button className="w-fit p-4">Réserver</Button>
                </div>
            </div>
        </div>
    )
}