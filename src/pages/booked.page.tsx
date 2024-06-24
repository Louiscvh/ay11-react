import { SectionHeading } from "../components/SectionHeading";
import { booksData } from "../data/book.data";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { useEffect } from "react";

export const Confirmed = () => {
    const { id } = useParams();
    const bookData = booksData.books.find(book => book.id.toString() === id);
    const libraryData = "in progress..."
    const navigate = useNavigate();

    if (!bookData) navigate('/');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [searchParams] = useSearchParams();
    const search = searchParams.get("search");

    if (!bookData) return <Heading>Nous rencontrons une erreur, veuillez nous en excuser</Heading>;

    return (
        <main className="container m-auto px-4 mt-16">
            <section className="flex flex-wrap justify-between gap-4 relative">
                <nav aria-label="breadcrumb">
                    <ol className="flex gap-4 relative z-30">
                        <li className="flex items-center gap-4">
                            <Link to="/" tabIndex={1}>
                                <button aria-label="Accueil">ACCUEIL</button>
                            </Link>
                        </li>
                        <li aria-current="page" className="flex items-center gap-4">
                            <Heading>{'>'}</Heading>
                            {search ? (
                                <Link to={`/search?search=${search}`} tabIndex={1}>
                                    <button className="font-semibold" aria-label={`Recherche : ${search.toUpperCase()}`}>RECHERCHE : {search.toUpperCase()}</button>
                                </Link>
                            ) : (
                                <Link to={`/books/${id}`} tabIndex={1}>
                                    <button className="font-semibold text-left" aria-label={bookData?.title.toUpperCase()}>{bookData?.title.toUpperCase()}</button>
                                </Link>
                            )}
                        </li>
                    </ol>
                </nav>
                <img src="/images/background-logo.svg"
                    className="size-72 -z-0 absolute top-[50%] -left-8 translate-y-[-50%]"
                    alt="Background logo pour la section recherche" />
            </section>

            {bookData && <SectionHeading title={bookData.title} desc={bookData.author} className="my-12" />}
            <section>
                <SectionHeading title={`Réservation #A${Math.random().toString(36).toUpperCase()}`} desc="Confirmation de réservation" className="my-12" />
                <Heading>Votre demande de réservation pour ${bookData?.title} a été prise en compte par la ${libraryData}. </Heading>
                <Button className="mt-8" onClick={() => navigate('/')}>Retour à l'accueil</Button>
            </section>
        </main>
    );
};
