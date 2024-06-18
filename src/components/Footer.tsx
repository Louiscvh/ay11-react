import {Link} from "react-router-dom";
import {Heading} from "./Heading.tsx";
import {footerData} from "../data/footer.data.ts";
import { Button } from "./Button.tsx";
import {ArrowUp} from "lucide-react";

export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <footer>
            <div className="bg-custom-grey relative">
                <Button className="absolute -top-6 right-4 w-fit flex items-center justify-center !p-3 bg-black" onClick={scrollToTop}>
                    <ArrowUp />
                </Button>
                <ul className="container mx-auto px-4 md:px-0 grid gap-8 md:gap-4 grid-cols-1 md:grid-cols-4 py-12 relative overflow-hidden">
                    <img src="/images/background-logo.svg" className="absolute -top-8 -left-8" alt="Background logo pour le footer"/>
                    <li className="col-span-1">
                        <Heading type="h4">{footerData.footerLinks[0].category}</Heading>
                        <ul className='flex flex-col gap-1 mt-6'>
                            {footerData.footerLinks[0].links.map((link, index) => (
                                <Link key={index} to={link.link} className="focus:outline-custom-cartier focus:outline-offset-2">
                                    <Heading className="font-normal">{link.text}</Heading>
                                </Link>
                            ))}
                        </ul>
                    </li>
                    <li className="col-span-1">
                        <Heading type="h4">{footerData.footerLinks[1].category}</Heading>
                        <ul className='flex flex-col gap-1 mt-6'>
                            {footerData.footerLinks[1].links.map((link, index) => (
                                <Link key={index} to={link.link} className="focus:outline-custom-cartier focus:outline-offset-2">
                                    <Heading className="font-normal">{link.text}</Heading>
                                </Link>
                            ))}
                        </ul>
                    </li>
                    <li className="col-span-1">
                        <Heading type="h4">{footerData.footerLinks[2].category}</Heading>
                        <ul className='flex flex-col gap-1 mt-6'>
                            {footerData.footerLinks[2].links.map((link, index) => (
                                <Link key={index} to={link.link} className="focus:outline-custom-cartier focus:outline-offset-2">
                                    <Heading className="font-normal">{link.text}</Heading>
                                </Link>
                            ))}
                        </ul>
                    </li>
                    <li className="col-span-1">
                        <Heading type="h4">{footerData.footerLinks[3].category}</Heading>
                        <ul className='flex flex-col gap-1 mt-6'>
                            {footerData.footerLinks[3].links.map((link, index) => (
                                <Link key={index} to={link.link} className="focus:outline-custom-cartier focus:outline-offset-2">
                                    <Heading className="font-normal">{link.text}</Heading>
                                </Link>
                            ))}
                        </ul>
                    </li>
                </ul>

            </div>
            <nav className="bg-custom-dark-blue">
                <ul className='flex flex-wrap md:flex-row items-center justify-center gap-6 py-6 text-white'>
                <li>
                        <Link to="/mentions">
                            <Heading type="h5">Mentions légales</Heading>
                        </Link>
                    </li>
                    <li>
                        <Link to="/accessibilite">
                            <Heading type="h5">Accessibilité</Heading>
                        </Link>
                    </li>
                    <li>
                        <Link to="/donnee-personnelles">
                            <Heading type="h5">Données personnelles</Heading>
                        </Link>
                    </li>
                    <li>
                        <Link to="/plan">
                            <Heading type="h5">Plan du site</Heading>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}