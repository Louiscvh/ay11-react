import {Heading} from "../components/Heading.tsx";
import {SectionHeading} from "../components/SectionHeading.tsx";
import {Carousel} from "../components/Carousel.tsx";
import {homeData} from "../data/home.data.ts";
import {booksData} from "../data/book.data.ts";
import {BookPreviewCard} from "../components/BookPreviewCard.tsx";
import {Button} from "../components/Button.tsx";
import {EventsCard} from "../components/EventsCard.tsx";
import {eventData} from "../data/event.data.ts";
import {CalendarClock, Search, SquareArrowOutUpRight} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const Home = () => {

    const [search, setSearch] = useState<string>("")
    const urlSearch: string = `/search?search=${search}`
    const navigate = useNavigate()

    return (
        <main className="mt-16">
            <section className="container px-4 md:px-0 mx-auto relative flex flex-col gap-4">
                <Heading type="h2">Recherche</Heading>
                <form className="flex flex-col md:flex-row gap-4 relative z-10" onSubmit={() => search && navigate(urlSearch)}>
                    <div className="relative w-full">
                        <Search className="absolute left-4 top-[calc(50%-0px)] -translate-y-[50%]" />
                        <input
                            required
                            className="bg-[#F2F2F2] w-full  pl-12 p-3 border-[1px] border-[#0F172A] focus:outline-custom-cartier focus:outline-offset-4"
                            type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Rechercher un livre, un article, une revue, un film ..." tabIndex={1}/>
                    </div>
                    <Button type="submit">
                        Rechercher
                    </Button>
                </form>
                <img src="/images/background-logo.svg"
                     className="size-72 z-0 absolute top-[50%] -left-8 translate-y-[-50%]"
                     alt="Background logo pour la section recherche"/>
            </section>
            <section className="container mx-auto px-4 md:px-0">
                <SectionHeading title="A la une" desc="Les actualités" className="my-12"/>
                <Carousel slides={homeData.slides}/>
            </section>
            <div className="container mx-auto h-[2px] w-full bg-custom-grey"/>
            <section className="container mx-auto px-4 md:px-0">
                <div className='flex flex-col md:flex-row justify-between md:items-center'>
                    <SectionHeading title="Les nouveautés" desc="À découvrir" className="my-8 md:my-12"/>
                    <Button type="submit" role="button">
                        Voir toutes les nouveautés
                    </Button>
                </div>
                <ul className='grid grid-cols-1 md:grid-cols-4 flex-wrap gap-12 mt-8 md:mt-0'>
                    {booksData.books.map(({id, title, author, cover, resume}, index) => (
                        <li key={index} className="flex gap-4 col-span-1">
                            <BookPreviewCard id={id} title={title} author={author} cover={cover} resume={resume}/>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="bg-custom-pink mt-16 pb-16 px-4 md:px-0">
                <div className="container mx-auto">
                    <div className='flex justify-between md:items-center flex-col md:flex-row'>
                        <SectionHeading title="Coups de coeur" desc="Nos bibliothécaires partagent leurs"
                                        className="my-12"/>
                        <Button type="submit" role="link">
                            Voir toutes les nouveautés
                        </Button>
                    </div>
                    <ul className='grid grid-cols-1 md:grid-cols-4 flex-wrap gap-12 mt-8 md:mt-0'>
                        {booksData.books.map(({id, title, author, cover, resume}, index) => (
                            <li key={index} className="flex gap-4 col-span-1">
                                <BookPreviewCard id={id} title={title} author={author} cover={cover} resume={resume}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="container mx-auto mb-16 px-4 md:px-0">
                <div className='flex justify-between md:items-center flex-col md:flex-row'>
                    <SectionHeading title="Prochainement" desc="Conférence, sorties, débats, livres" className="my-12"/>
                    <Button type="submit" role="link">
                        Voir l'agenda culturel
                    </Button>
                </div>
                <ul className='grid grid-cols-1 md:grid-cols-3 flex-wrap gap-12 mt-8 md:mt-0'>
                    {eventData.events.map(({title, type, place, date}, index) => (
                        <li key={index} className="flex gap-4 col-span-1">
                            <EventsCard title={title} date={date} place={place} type={type}/>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="bg-custom-pink py-12 px-4 md:px-0">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24">
                    <div className="md:w-2/3 flex flex-col gap-16">
                        <SectionHeading title="Horaires d’ouverture" desc="Ma bibliothèque est-elle ouverte ?"/>
                        <div className='flex flex-col gap-2'>
                            <Heading type="h5">Rechercher une bibliothèque dans la liste</Heading>
                            <form className="flex flex-col md:flex-row gap-4 relative z-10">
                                <div className="relative w-full">
                                    <Search className="absolute left-4 top-[calc(50%-0px)] -translate-y-[50%]"/>
                                    <input
                                        className="bg-[#F2F2F2] w-full  pl-12 p-3 border-[1px] border-[#0F172A] focus:outline-custom-cartier focus:outline-offset-4"
                                        type="text"
                                        placeholder="Exemple : Bibliothèque Georges Pompidou"
                                        tabIndex={1}/>
                                </div>
                                <Button>
                                    Rechercher
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <CalendarClock  className="size-72 text-custom-cartier"/>
                    </div>
                </div>
            </section>
            <section className="bg-custom-cartier py-16 px-4 md:px-0">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-24">
                    <SectionHeading title="Abonnez-vous" desc="Newsletters, alertes..." className="w-full text-white" isWhite={true}/>
                    <div className='w-full text-white'>
                        <Heading type="h6">Envie d’être d’être au courant de toutes les infos et nouveautés ?</Heading>
                        <Heading>Renseignez votre prénom et votre e-mail</Heading>
                        <form className="flex gap-4 flex-col relative z-10 w-full mt-4">
                           <div className="flex flex-col w-full">
                               <label htmlFor="firstname">Prénom*</label>
                               <input tabIndex={1} type="text" id="firstname" placeholder="Exemple : Jean" className="bg-[#F2F2F2] text-black w-full p-3 border-[1px] border-[#0F172A] focus:outline-custom-cartier focus:outline-offset-4"/>
                           </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="email">Adresse mail*</label>
                                <input tabIndex={1} type="email" id="email" placeholder="Exemple : jean2@gmail.com" className="bg-[#F2F2F2] text-black w-full p-3 border-[1px] border-[#0F172A] focus:outline-custom-cartier focus:outline-offset-4"/>
                            </div>
                            <Button type="submit" role="button" className="!bg-custom-dark-blue focus:outline-custom-dark-blue w-full md:w-fit">
                                S’abonner à la newsletter
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="container mx-auto my-16 flex items-center px-4 md:px-0 flex-col md:flex-row gap-8 md:gap-0">
                <div className="w-full">
                    <SectionHeading title="L’original de la semaine" desc="les bibliothèques patrimoniales et spécialisées"/>
                    <div className="mt-24 flex flex-col gap-4 items-start">
                        <Heading>Depuis 2004, les bibliothèques patrimoniales ont numérisé et mis en ligne environ 40 000 documents remarquables. Retrouvez-les en accès libre dans notre catalogue des collections patrimoniales et découvrez les originaux de la semaine.</Heading>
                        <Button role="link" type="button" className="flex items-center justify-center gap-4 w-full md:w-fit">
                            Accéder aux collections patrimoniales
                            <SquareArrowOutUpRight />
                        </Button>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-2">
                    <img src="/images/original.png" alt="Original de la semaine" className="w-96"/>
                    <Heading className="opacity-55 text-center">"Je suis le vase de l’Heure Joyeuse…"
                        Fonds patrimonial Heure Joyeuse</Heading>
                </div>
            </section>
        </main>
    )
};