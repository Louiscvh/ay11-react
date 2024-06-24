import {SectionHeading} from "../components/SectionHeading.tsx";
import {Link, useSearchParams} from "react-router-dom";
import {Heading} from "../components/Heading.tsx";
import {booksData} from "../data/book.data.ts";
import {Button} from "../components/Button.tsx";

export const Confirm = () => {

    const [searchParams] = useSearchParams();
    const libraryId = searchParams.get("library");
    const bookId = searchParams.get("book");

    const bookData = booksData.books.filter(book => book.id.toString() === bookId)[0];
    const libraryData = booksData?.books.filter(book => book.id.toString() === bookId)[0]?.library.filter(library => library.id === libraryId)[0];

    return (
        <main className="container m-auto px-4 mt-16">
            <section>
                <nav aria-label="breadcrumb">
                    <ol className="flex gap-4 relative z-30">
                        <li className="flex items-center gap-4">
                            <Link to="/" tabIndex={1}>
                                <button aria-label="Accueil">ACCUEIL</button>
                            </Link>
                        </li>
                        <li aria-current="page" className="flex items-center gap-4">
                            <Heading>{'>'}</Heading>
                            <Link to={`/books/${bookData?.id}`} tabIndex={1}>
                                <button className="font-semibold text-left"
                                        aria-label={bookData?.title.toUpperCase()}>{bookData?.title.toUpperCase()}</button>
                            </Link>

                        </li>
                    </ol>
                </nav>
            </section>
            <SectionHeading title="CONFIRMER MA RÉSERVATION" desc="Merci pour votre achat" className="my-12"/>
            <section className="mb-12">
                <SectionHeading title="RÉCAPITULATIF DE MA RÉSERVATION" isLittle={true} className="my-12"/>
                <ConfirmCard
                    bookId={bookData.id}
                    libraryId={libraryData.id}
                    libraryName={libraryData.name}
                    libraryAdress={libraryData?.address}
                    title={bookData.title}
                    author={bookData.author} cover={bookData.cover} editor={bookData.editor} date={bookData.date}/>
            </section>

        </main>
    )
}

const ConfirmCard = ({ bookId, libraryId, libraryName, libraryAdress, title, author, cover, editor, date }: {
    bookId: number,
    libraryId: string,
    libraryName: string,
    libraryAdress: string,
    title: string,
    author: string, cover: string, editor: string, date: string
}) => {
    return (
        <Link to={`/confirmed?bookId=${bookId}&libraryId=${libraryId}`} tabIndex={1} className="focus:outline-custom-cartier focus:outline-offset-4 flex gap-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] p-6" aria-label={`Voir les détails du livre ${title}`}>
            <img src={cover} alt={`Couverture de ${title}`} className="w-24 h-24 object-cover" />
            <div>
                <Heading className="text-custom-cartier font-medium">#LIVRE</Heading>
                <Heading type="h4" className="mt-2">{title}</Heading>
                <Heading>{author}</Heading>
                <Heading>{editor}</Heading>
                <Heading>{date}</Heading>
                <div className='my-4'>
                    <Heading>Retrait de l'ouvrage: {libraryName}</Heading>
                    <Heading>{libraryAdress}</Heading>
                </div>
                <ul className="mt-4 flex flex-col gap-2 items-left md:flex-row md:items-center">
                    <li>
                        <Link to={`/books/${bookId}`} tabIndex={1}>
                            <button className="hover:brightness-75 transition px-6 py-3 border-custom-dark-cartier border-2 text-custom-dark-cartier font-semibold">
                                Annuler ma réservation
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/confirmed?bookId=${bookId}&libraryId=${libraryId}`} tabIndex={1}>
                            <Button>
                                Confirmer ma réservation
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </Link>
    );
}