import { LucideDownload, LucideHeart, LucideShare, Play } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { booksData } from "../data/book.data";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { SectionHeading3 } from "../components/SectionHeading3";
import { LibraryCard } from "../components/LibraryCard";
import { ReferenceCard } from "../components/ReferenceCard";
import { useEffect } from "react";

export const Book = () => {
    const { id } = useParams();
    const bookData = booksData.books.find(book => book.id.toString() === id);
    const navigate = useNavigate();
    const errorMissingData = "Cette donnée est manquante, veuillez nous excuser pour le dérangement";

    if (!bookData) navigate('/');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [searchParams] = useSearchParams();
    const search = searchParams.get("search");

    return (
        <main className="container m-auto px-4 mt-16">
            <section className="flex justify-between relative">
                <nav aria-label="breadcrumb">
                    <ol className="flex gap-4 relative z-30">
                        <li>
                            <Link to="/">
                                <button aria-label="Accueil">ACCUEIL</button>
                            </Link>
                        </li>
                        <li aria-current="page" className="flex items-center gap-4">
                            <Heading>{'>'}</Heading>
                            {search ? (
                                <Link to={`/search?search=${search}`}>
                                    <button className="font-semibold" aria-label={`Recherche : ${search.toUpperCase()}`}>RECHERCHE : {search.toUpperCase()}</button>
                                </Link>
                            ) : (
                                <Link to={`/books/${id}`}>
                                    <button className="font-semibold" aria-label={bookData?.title.toUpperCase()}>{bookData?.title.toUpperCase()}</button>
                                </Link>
                            )}
                        </li>
                    </ol>
                </nav>
                <div className="flex flex-row gap-4">
                    <LucideDownload size={24.5} aria-label="Download" />
                    <LucideShare size={24} aria-label="Share" />
                </div>
                <img src="/images/background-logo.svg"
                     className="size-72 -z-0 absolute top-[50%] -left-8 translate-y-[-50%]"
                     alt="Background logo pour la section recherche" />
            </section>
            {bookData && <SectionHeading title={bookData.title} desc={bookData.author} className="my-12" />}
            <section className="flex flex-col md:flex-row gap-8">
                <div className="min-w-96 self-center">
                    {!bookData?.cover ? (
                        <Heading>Le livre n'a pas de couverture, veuillez nous excuser pour le dérangement</Heading>
                    ) : (
                        <img src={bookData.cover} alt={`Couverture de ${bookData.title}`} className="border-8 border-white transition hover:-translate-y-2 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] w-full object-cover mb-2" />
                    )}
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className='flex justify-between items-center gap-8'>
                        <Heading className="text-custom-cartier font-semibold">#BD</Heading>
                        <div className="flex items-center gap-4">
                            <Heading>Lecture de la description</Heading>
                            <Button className="w-fit !p-2" aria-label="Play description">
                                <div className="flex gap-4">
                                    <Play />
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Heading type="key">Résumé</Heading>
                        {!bookData?.resume ? (
                            <Heading>Le livre n'a pas de résumé, veuillez nous excuser pour le dérangement</Heading>
                        ) : (
                            <Heading>{bookData.resume}</Heading>
                        )}
                    </div>
                    <div>
                        <Heading type="key">Auteur</Heading>
                        {!bookData?.author ? (<Heading>{errorMissingData}</Heading>) : (<Heading>{bookData.author}</Heading>)}
                    </div>
                    <div>
                        <Heading type="key">Éditeur</Heading>
                        {!bookData?.editor ? (<Heading>{errorMissingData}</Heading>) : (<Heading>{bookData.editor}</Heading>)}
                    </div>
                    <div>
                        <Heading type="key">Date de publication</Heading>
                        {!bookData?.date ? (<Heading>{errorMissingData}</Heading>) : (<Heading>{bookData.date}</Heading>)}
                    </div>
                    <div>
                        <Heading type="key">ISBN</Heading>
                        {!bookData?.isbn ? (<Heading>{errorMissingData}</Heading>) : (<Heading>{bookData.isbn}</Heading>)}
                    </div>
                    <div>
                        <Heading type="key">Avis des lecteurs</Heading>
                        {!bookData?.review.avgNote ? (<Heading>{errorMissingData}</Heading>) : (<Heading>{bookData.review.avgNote}/5</Heading>)}
                    </div>
                    <Button className="w-fit p-4" aria-label="Add to selection">
                        <div className="flex gap-4">
                            <LucideHeart />
                            Ajouter à ma sélection
                        </div>
                    </Button>
                </div>
            </section>
            <section className="my-16">
                <SectionHeading3 title="Dans quelle bibliothèque retrouver le livre ?" />
                <div className="my-4 mx-auto gap-12 flex flex-col lg:grid grid-cols-3 ">
                    {bookData?.library.sort((a, b) => b.numberAvailable - a.numberAvailable).map((library, index) => (
                        <div key={index}>
                            <LibraryCard
                                name={library.name}
                                address={library.address}
                                numberAvailable={library.numberAvailable}
                                location={library.location}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section className="my-16">
                <SectionHeading3 title="Comment se procurer cette référence ?" />
                <div className="my-4 mx-auto flex flex-col md:grid grid-cols-2 gap-12 ">
                    <ReferenceCard
                        title="Directement en bibliothèque"
                        tag="Non Abonné.e"
                        description="Consultez les disponibilités de l’ouvrage dans les différentes bibliothèques de Paris et rendez vous dans l’une des bibliothèques pour faire votre demande."
                        buttonText="Consulter les horaires des bibliothèques"
                    />
                    <ReferenceCard
                        title="Réservez votre exemplaire en ligne"
                        tag="Abonné.e"
                        description="Réservez à l’avance et allez récupérer votre ouvrage dans la bibliothèque sélectionnée par vos soins."
                        buttonText="Me connecter à mon compte"
                    />
                </div>
            </section>
            <section className="my-16">
                <SectionHeading3 title="Suggestions : ces références qui pourraient vous plaire" />
            </section>
        </main>
    );
};
