import { SectionHeading } from "../components/SectionHeading";
import { booksData } from "../data/book.data";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { useEffect } from "react";

export const Booked = () => {
    const [searchParams] = useSearchParams();
    const libraryId = searchParams.get("libraryId");
    const bookId = searchParams.get("bookId");

    const bookData = booksData.books.find(book => book.id.toString() === bookId);
    const libraryData = bookData?.library.find(lib => lib.id === libraryId);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!bookData) return <Heading>Nous rencontrons une erreur, veuillez nous en excuser</Heading>;

    return (
        <main className="container m-auto px-4 my-16">
            <section className="flex flex-wrap justify-between gap-4 relative">
                <nav aria-label="breadcrumb">
                    <ol className="flex gap-4 relative z-30">
                        <li className="flex items-center gap-4">
                            <Link to="/" tabIndex={1}>
                                <button aria-label="Accueil">ACCUEIL</button>
                            </Link>
                        </li>
                    </ol>
                </nav>
                <img src="/images/background-logo.svg"
                    className="size-72 -z-0 absolute top-[50%] -left-8 translate-y-[-50%]"
                    alt="Background logo pour la section recherche" />
            </section>

            <section>
                <SectionHeading title={`Réservation #${Math.round(Math.random()*1_000_000).toString(32).toUpperCase()}`} desc="Confirmation de réservation" className="my-12" />
                <Heading>Votre demande de réservation pour {bookData?.title} a été prise en compte par la {libraryData?.name}. </Heading>
                <Button className="mt-8" onClick={() => navigate('/')}>Retour à l'accueil</Button>
            </section>
        </main>
    );
};
