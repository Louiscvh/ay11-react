
import { SectionHeading } from "../components/SectionHeading";
import { booksData } from "../data/book.data";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { useEffect } from "react";

export const Error404 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <main className="container m-auto px-4 my-16">

            <SectionHeading title={`Contenu non trouvé`} desc="Erreur 404" className="my-12" />
            <Heading>Le contenu recherché n'a pas été trouvé. Excusez nous pour ce désagrément.</Heading>
            <Link to="/" tabIndex={1}>
                <Button className="mt-8">Retour à l'accueil</Button>
            </Link>
        </main>
    );
};
