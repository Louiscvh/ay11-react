import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading.tsx";
import { Button } from "../components/Button.tsx";
import { Check, ChevronDown, Search as SearchIcon } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { booksData } from "../data/book.data.ts";

export const Search = () => {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";
    const [searchValue, setSearchValue] = useState<string>(search);
    const [results, setResults] = useState<BookData[]>(booksData.books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase())));
    const navigate = useNavigate();

    useEffect(() => {
        setSearchValue(search);
        setResults(booksData.books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase())));
    }, [search]);

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/search?search=${searchValue}`);
    };

    const staticValue = useRef<string>(search).current;

    return (
        <main className="container mx-auto my-16 px-4">
            <nav aria-label="Breadcrumb">
                <ol className="flex gap-4 mb-8 z-30 relative">
                    <li>
                        <Link to="/" tabIndex={1}>
                            <button>ACCUEIL</button>
                        </Link>
                    </li>
                    <li aria-current="page" className="flex items-center gap-4">
                        <Heading>{'>'}</Heading>
                        <Link to={`/search?search=${searchValue}`} tabIndex={1}>
                            <button className="font-semibold">RECHERCHE : {search.toUpperCase()}</button>
                        </Link>
                    </li>
                </ol>
            </nav>
            <Heading type="h1">Résultats de la recherche</Heading>
            <form className="flex flex-col z-10 md:flex-row gap-4 relative z-10 mt-8" onSubmit={handleSearchSubmit} aria-label="Formulaire de recherche">
                <div className="relative w-full">
                    <label htmlFor="search-input" className="sr-only">Rechercher un livre, un article, une revue, un film</label>
                    <SearchIcon className="absolute left-4 top-[calc(50%-0px)] -translate-y-[50%]" aria-hidden="true" />
                    <input
                        id="search-input"
                        className="bg-[#F2F2F2] w-full pl-12 p-3 border-[1px] border-[#0F172A] focus:outline-custom-cartier focus:outline-offset-4"
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Rechercher un livre, un article, une revue, un film ..." tabIndex={1}
                        aria-label="Champ de recherche"
                    />
                </div>
                <Button onClick={handleSearchSubmit}>
                    Rechercher
                </Button>
            </form>
            <img src="/images/background-logo.svg"
                 className="size-72 -z-0 absolute top-[50%] -left-8 translate-y-[-50%]"
                 alt="Background logo pour la section recherche" />
            <section className="w-full flex flex-col md:flex-row gap-2 md:gap-8 items-start">
                <aside className="w-full md:w-1/3 p-6 mt-6 md:mt-24 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]">
                    <Heading type="h3">Filtrer les résultats</Heading>
                    <ul className="mt-4 flex flex-col gap-2" role="list">
                        <li>
                            <details className="group">
                                <summary className="flex items-center justify-between cursor-pointer" aria-controls="filter-doc-type" aria-expanded="false" role="button" tabIndex={1}>
                                    <Heading type="h5">Type de document</Heading>
                                    <ChevronDown
                                        className="transform transition-transform duration-300 group-open:rotate-180"
                                        aria-hidden="true"
                                    />
                                </summary>
                                <ul className="flex flex-col gap-1 mt-2" id="filter-doc-type" role="list">
                                    <li>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2 accent-custom-cartier" />
                                            <Heading>Livre</Heading>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2 accent-custom-cartier" />
                                            <Heading>Article</Heading>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2 accent-custom-cartier" />
                                            <Heading>Revue</Heading>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2 accent-custom-cartier" />
                                            <Heading>Film</Heading>
                                        </label>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details className="group">
                                <summary className="flex items-center justify-between cursor-pointer" aria-controls="filter-availability" aria-expanded="false" role="button">
                                    <Heading type="h5">Disponibilité</Heading>
                                    <ChevronDown
                                        className="transform transition-transform duration-300 group-open:rotate-180"
                                        aria-hidden="true"
                                    />
                                </summary>
                                <ul className="flex flex-col gap-1 mt-2" id="filter-availability" role="list">
                                    <li>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2 accent-custom-cartier" />
                                            <Heading>Disponible</Heading>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2 accent-custom-cartier" />
                                            <Heading>Indisponible</Heading>
                                        </label>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </aside>
                <ul className="w-full md:w-2/3 mt-6 md:mt-24 flex flex-col gap-8" role="list">
                    {results.length ? results.map((book, index) => (
                        <li key={index}>
                            <ResultCard
                                searchValue={searchValue}
                                id={book.id}
                                title={book.title}
                                author={book.author}
                                cover={book.cover}
                                date={book.date}
                                editor={book.editor}
                                numberAvailable={book.library.filter(library => library.numberAvailable > 0).length || 0}
                            />
                        </li>
                    )) : (
                        <Heading type="h3">Aucun résultat trouvé pour "{search}"</Heading>
                    )}
                </ul>
            </section>
        </main>
    );
};

const ResultCard = ({ searchValue, id, title, author, cover, editor, date, numberAvailable }: {
    searchValue: string,
    id: number,
    title: string,
    author: string, cover: string, editor: string, date: string, numberAvailable: number
}) => {
    const available = () => {
        if (numberAvailable === 0) {
            return <Heading className="text-custom-cartier font-medium">Indisponible</Heading>
        } else {
            return (
                <div className="flex items-center gap-2">
                    <Check className="text-custom-green" aria-hidden="true" />
                    <Heading className="text-custom-green font-medium">Disponible dans {numberAvailable} librairies</Heading>
                </div>
            )
        }
    }
    return (
        <Link to={`/books/${id}?search=${searchValue}`} tabIndex={1} className="focus:outline-custom-cartier focus:outline-offset-4 flex gap-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] p-6" aria-label={`Voir les détails du livre ${title}`}>
            <img src={cover} alt={`Couverture de ${title}`} className="w-24 h-24 object-cover" />
            <div>
                <Heading className="text-custom-cartier font-medium">#LIVRE</Heading>
                <Heading type="h4" className="mt-2">{title}</Heading>
                <Heading>{author}</Heading>
                <Heading>{editor}</Heading>
                <Heading>{date}</Heading>
                {available()}
            </div>
        </Link>
    );
}
