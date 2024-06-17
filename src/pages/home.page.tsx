import {Heading} from "../components/Heading.tsx";
import {SectionHeading} from "../components/SectionHeading.tsx";
import {Carousel} from "../components/Carousel.tsx";
import {homeData} from "../data/home.data.ts";
import {booksData} from "../data/book.data.ts";
import {BookPreviewCard} from "../components/BookPreviewCard.tsx";
import {Button} from "../components/Button.tsx";
import {EventsCard} from "../components/EventsCard.tsx";
import {eventData} from "../data/event.data.ts";
import {Search} from "lucide-react";

export const Home = () => {
    return (
        <main className="mt-16">
            <section className="container mx-auto relative flex flex-col gap-4">
                <Heading type="h2">Recherche</Heading>
                <form className="flex gap-4 relative z-10">
                    <div className="relative w-full">
                        <Search className="absolute left-4 top-[calc(50%-0px)] -translate-y-[50%]" />
                        <input
                            className="bg-[#F2F2F2] w-full  pl-12 p-3 border-[1px] border-[#0F172A] focus:outline-custom-cartier focus:outline-offset-4"
                            type="text"
                            placeholder="Rechercher un livre, un article, une revue, un film ..." tabIndex={1}/>
                    </div>
                    <Button>
                        Rechercher
                    </Button>
                </form>
                <img src="/images/background-logo.svg"
                     className="size-72 z-0 absolute top-[50%] -left-8 translate-y-[-50%]"
                     alt="Background logo pour la section recherche"/>
            </section>
            <section className="container mx-auto">
                <SectionHeading title="A la une" desc="Les actualités" className="my-12"/>
                <Carousel slides={homeData.slides}/>
            </section>
            <div className="container mx-auto h-[2px] w-full bg-custom-grey"/>
            <section className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <SectionHeading title="Les nouveautés" desc="À découvrir" className="my-12"/>
                    <Button type="submit" role="button">
                        Voir toutes les nouveautés
                    </Button>
                </div>
                <ul className='grid grid-cols-4 flex-wrap gap-12'>
                    {booksData.books.map(({title, author, cover, resume}, index) => (
                        <li key={index} className="flex gap-4 col-span-1">
                            <BookPreviewCard title={title} author={author} cover={cover} resume={resume}/>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="bg-custom-pink mt-16 pb-16">
                <div className="container mx-auto">
                    <div className='flex justify-between items-center'>
                        <SectionHeading title="Coups de coeur" desc="Nos bibliothécaires partagent leurs"
                                        className="my-12"/>
                        <Button type="submit" role="link">
                            Voir toutes les nouveautés
                        </Button>
                    </div>
                    <ul className='grid grid-cols-4 flex-wrap gap-12'>
                        {booksData.books.map(({title, author, cover, resume}, index) => (
                            <li key={index} className="flex gap-4 col-span-1">
                                <BookPreviewCard title={title} author={author} cover={cover} resume={resume}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="container mx-auto mb-16">
                <div className='flex justify-between items-center'>
                    <SectionHeading title="Prochainement" desc="Conférence, sorties, débats, livres" className="my-12"/>
                    <Button type="submit" role="link">
                        Voir l'agenda culturel
                    </Button>
                </div>
                <ul className='grid grid-cols-3 flex-wrap gap-12'>
                    {eventData.events.map(({title, type, place, date}, index) => (
                        <li key={index} className="flex gap-4 col-span-1">
                            <EventsCard title={title} date={date} place={place} type={type}/>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="bg-custom-pink py-12">
                <div className="container mx-auto flex justify-between items-center gap-24">
                    <div className="w-2/3 flex flex-col gap-16">
                        <SectionHeading title="Horaires d’ouverture" desc="Ma bibliothèque est-elle ouverte ?"/>
                        <div className='flex flex-col gap-2'>
                            <Heading type="h5">Rechercher une bibliothèque dans la liste</Heading>
                            <form className="flex gap-4 relative z-10">
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
                    <div className="w-1/3">
                        <img src={"/images/background-logo.svg"} alt="Background logo pour la section horaires"
                             className="size-72"/>
                    </div>
                </div>
            </section>
        </main>
    )
}