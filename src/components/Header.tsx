import {headerData} from "../data/header.data.ts";
import {useState} from "react";
import {clsx} from "clsx";
import {Clock, Heart, User} from "lucide-react";
import {Button} from "./Button.tsx";
import {Link} from "react-router-dom";

export const Header = () => {
    const [selectedLang, setSelectedLang] = useState<string>("FR")

    return (
        <header className="bg-custom-pink py-4 md:px-16 px-4 relative z-10">
            <div className="flex flex-col gap-4">
                <div className="justify-between items-center flex-row md:flex-row hidden md:flex">
                    <ul className="flex flex-col md:flex-row gap-8">
                        {headerData.languages.map((lang, index) => (
                            <li key={index} onClick={() => setSelectedLang(lang)} className={clsx("cursor-pointer", selectedLang === lang && "font-bold relative before:absolute before:-bottom-2 before:w-full before:h-[5px] before:bg-custom-cartier")}>
                                {lang}
                            </li>
                        ))}
                    </ul>
                    <nav className="mt-6">
                        <ul className="flex items-center gap-6 flex-col md:flex-row">
                            <li className="cursor-pointer hover:bg-custom-cartier hover:text-white transition hover:underline p-3 focus:outline-custom-dark-blue focus:outline-offset-4" tabIndex={1}>
                                <Link to="/selection" className="flex items-center gap-2 ">
                                    <Heart />
                                    Ma sélection
                                </Link>
                            </li>
                            <li className="cursor-pointer hover:bg-custom-cartier hover:text-white transition hover:underline p-3 focus:outline-custom-dark-blue focus:outline-offset-4" tabIndex={1}>
                                <Link to="/historique" className="flex items-center gap-2 ">
                                    <Clock/>
                                    Mon historique
                                </Link>
                            </li>
                            <li>
                                <Button type="button" role="button" className="flex items-center gap-2 !bg-custom-dark-blue focus:outline-custom-dark-blue">
                                    <User />
                                    Mon Compte
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex justify-between items-start flex-col md:flex-row overflow-hidden'>
                    <Link to="/">
                        <img src="/images/logo-biblio.png" alt="Logo de la bibiliothèque de Paris" className="h-16"/>
                    </Link>
                    <nav className='overflow-auto w-full md:w-fit'>
                        <ul className="flex items-center gap-2">
                            {headerData.links.map((link, index) => (
                                <li key={index} className="p-3 hover:bg-custom-cartier hover:text-white transition hover:underline cursor-pointer focus:outline-custom-cartier" tabIndex={1}>{link.text}</li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}