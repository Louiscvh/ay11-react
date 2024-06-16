import {Heading} from "../components/Heading.tsx";
import {SectionHeading} from "../components/SectionHeading.tsx";
import {Carousel} from "../components/Carousel.tsx";
import {homeData} from "../data/home.data.ts";

export const Home = () => {
    return (
        <main className="container mx-auto mt-16">
            <section className="relative flex flex-col gap-4">
                <Heading type="h2">Recherche</Heading>
                <form className="flex gap-4 relative z-10">
                    <input className="bg-[#F2F2F2] w-full p-3 border-[1px] border-[#0F172A]" type="text"
                           placeholder="Rechercher un livre, un article, une revue, un film ..."/>
                    <button type="submit" role="button"
                            className="bg-custom-dark-cartier font-bold text-white py-3 px-6">
                        Rechercher
                    </button>
                </form>
                <img src="/images/background-logo.svg"
                     className="size-72 z-0 absolute top-[50%] -left-8 translate-y-[-50%]"
                     alt="Background logo pour la section recherche"/>
            </section>
            <section>
                <SectionHeading title="A la une" desc="Les actualités" className="my-12"/>
                <Carousel slides={homeData.slides}/>
            </section>
            <div className="h-[2px] w-full bg-custom-grey"/>
            <section>
                <SectionHeading title="A la une" desc="Les actualités" className="my-12"/>
            </section>
        </main>
    )
}