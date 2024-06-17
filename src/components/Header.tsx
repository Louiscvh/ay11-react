import {headerData} from "../data/header.data.ts";
import {useState} from "react";
import {clsx} from "clsx";
import {Clock, Heart, User} from "lucide-react";
import {Button} from "./Button.tsx";
import {Link} from "react-router-dom";

export const Header = () => {
    const [selectedLang, setSelectedLang] = useState<string>("FR")
    return (
        <header className="bg-custom-pink py-4 px-16 relative z-10">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <ul className="flex gap-8">
                        {headerData.languages.map((lang, index) => (
                            <li key={index} onClick={() => setSelectedLang(lang)} className={clsx("cursor-pointer", selectedLang === lang && "font-bold relative before:absolute before:-bottom-2 before:w-full before:h-[5px] before:bg-custom-cartier")}>
                                {lang}
                            </li>
                        ))}
                    </ul>
                    <nav>
                        <ul className="flex items-center gap-8">
                            <li className="flex items-center gap-2 focus:outline-custom-dark-blue focus:outline-offset-4" tabIndex={1}>
                                <Heart />
                                Ma sélection
                            </li>
                            <li className="flex items-center gap-2 focus:outline-custom-dark-blue focus:outline-offset-4"
                                tabIndex={1}>
                                <Clock/>
                                Mon historique
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
                <div className='flex justify-between items-center'>
                    <Link to="/">
                        <img src="/images/logo-biblio.png" alt="Logo de la bibiliothèque de Paris" className="h-16"/>
                    </Link>
                    <nav>
                        <ul className="flex items-center">
                        {headerData.links.map((link, index) => (
                                <li key={index} className="p-3 cursor-pointer">{link.text}</li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}