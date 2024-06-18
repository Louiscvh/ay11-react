import {headerData} from "../data/header.data.ts";
import {useState} from "react";
import {clsx} from "clsx";
import {Clock, Heart, Menu, User} from "lucide-react";
import {Button} from "./Button.tsx";
import {Link} from "react-router-dom";
import {Heading} from "./Heading.tsx";

export const Header = () => {

    const [selectedLang, setSelectedLang] = useState<string>("FR")
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <header className="bg-custom-pink m:py-4 relative z-30">
            <div
                className={clsx(isMenuOpen ? "translate-x-[0%]" : 'translate-x-[100%]', "transition h-screen p-4 w-screen bg-white fixed top-0 left-0 z-20")}>
                <Link to="/" tabIndex={1} className="cursor-pointer focus:outline-custom-cartier focus:outline-offset-4 md:hidden absolute right-4 top-5" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    <Menu />
                </Link>
                <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center">
                    <ul className="flex md:flex-row gap-8">
                        {headerData.languages.map((lang, index) => (
                            <li key={index} onClick={() => setSelectedLang(lang)}
                                className={clsx("cursor-pointer", selectedLang === lang && "font-bold relative before:absolute before:-bottom-2 before:w-full before:h-[5px] before:bg-custom-cartier")}>
                                {lang}
                            </li>
                        ))}
                    </ul>
                    <div className="container mx-auto h-[2px] w-full bg-custom-grey my-8"/>
                    <ul className="flex flex-col gap-0">
                        {headerData.links.map((link, index) => (
                            <li key={index}>
                                <Link to="/" onClick={() => setIsMenuOpen(false)}
                                      className="text-center hover:text-white hover:underline cursor-pointer focus:outline-custom-cartier"
                                      tabIndex={1}>
                                    <Heading className="p-3 hover:bg-custom-cartier transition">{link.text}</Heading>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-4 md:px-16 px-4">
                <div className="justify-between items-center flex-row md:flex-row hidden md:flex md:gap-12">
                    <ul className="flex flex-col md:flex-row gap-8">
                        {headerData.languages.map((lang, index) => (
                            <li key={index} onClick={() => setSelectedLang(lang)}
                                className={clsx("cursor-pointer", selectedLang === lang && "font-bold relative before:absolute before:-bottom-2 before:w-full before:h-[5px] before:bg-custom-cartier")}>
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
                <div className='flex justify-between items-start lg:items-center flex-col lg:gap-12 lg:flex-row overflow-hidden'>
                    <div className="flex justify-between items-center w-full md:w-fit">
                        <Link to="/" tabIndex={1}>
                            <img src="/images/logo-biblio.png" alt="Logo de la bibiliothèque de Paris" className="h-16 object-contain"/>
                        </Link>
                        <Link to="/" className="focus:outline-custom-cartier focus:outline-offset-4" tabIndex={1} onClick={() => setIsMenuOpen((prev) => !prev)}>
                            <Menu className="md:hidden " />
                        </Link>
                    </div>
                    <nav className='overflow-auto w-full md:w-fit'>
                        <ul className="flex items-center gap-2">
                            {headerData.links.map((link, index) => (
                                <li key={index} className="p-3 hover:bg-custom-cartier hover:text-white text-center transition hover:underline cursor-pointer focus:outline-custom-cartier" tabIndex={1}>{link.text}</li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}