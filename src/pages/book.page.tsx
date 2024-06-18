import { LucideDownload, LucideHeart, LucideShare } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { booksData } from "../data/book.data"
import { useNavigate, useParams } from "react-router-dom"
import { Heading } from "../components/Heading"
import { Button } from "../components/Button"
import { SectionHeading3 } from "../components/SectionHeading3"
import { LibraryCard } from "../components/LibraryCard"
import { ReferenceCard } from "../components/ReferenceCard"


export const Book = () => {

    const { id } = useParams()
    const bookData = booksData.books.find(book => book.id.toString() === id)
    const navigate = useNavigate()
    const errorMissingData = "Cette donnée est manquante, veuillez nous excuser pour le dérangement"

    if (!bookData) navigate('/')

    return (
        <main className="container m-auto px-4 mt-16">
            <section className="flex justify-between">
                <div className="flex gap-4">
                    <button onClick={() => navigate('/')}>Accueil</button>
                    <p>{'>'}</p>
                    <button onClick={() => navigate('/books')}>Voir les résultats de recherche</button>
                </div>
                <div className="flex flex-row gap-4">
                    <LucideDownload size={24.5} />
                    <LucideShare size={24} />
                </div>
            </section>
            {bookData && <SectionHeading title={bookData.title} desc={bookData.author} className="my-12" />}
            <section className="flex flex-col md:flex-row gap-8">
                <div className="min-w-96 self-center">
                    {!bookData?.cover ? (
                        <Heading>Le livre n'a pas de couverture, veuilez nous excusez pour le dérangement</Heading>
                    ) : (
                        <img src={bookData.cover} alt={bookData.title} className="border-4 transition hover:-translate-y-2 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] w-full object-cover mb-2" />
                    )}
                </div>
                <div className="flex flex-col gap-y-4">
                    <div>
                        <Heading type="key" >Résumé</Heading>
                        {!bookData?.resume ? (
                            <Heading>Le livre n'a pas de résumé, veuilez nous excusez pour le dérangement</Heading>
                        ) : (
                            <Heading> {bookData.resume} </Heading>
                        )}
                    </div>
                    <div>
                        <Heading type="key" >Auteur</Heading>
                        {!bookData?.author ? (<Heading>{errorMissingData}</Heading>) : (<Heading>{bookData.author}</Heading>)}
                    </div>
                    <div>
                        <Heading type="key" >Éditeur</Heading>
                        {!bookData?.editor ? (<Heading>{errorMissingData}</Heading>) : (<Heading>{bookData.editor}</Heading>)}
                    </div>
                    <div>
                        <Heading type="key" >Date de publication</Heading>
                        {!bookData?.date ? (<Heading>{errorMissingData}</Heading>) : (<Heading>{bookData.date}</Heading>)}
                    </div>
                    <div>
                        <Heading type="key" >ISBN</Heading>
                        {!bookData?.isbn ? (<Heading>{errorMissingData}</Heading>) : (<Heading>{bookData.isbn}</Heading>)}
                    </div>
                    <div>
                        <Heading type="key" >Avis des lecteurs</Heading>
                        {!bookData?.review.avgNote ? (<Heading>{errorMissingData}</Heading>) : (<Heading>{bookData.review.avgNote}/5</Heading>)}
                    </div>
                    <Button className="w-fit p-4">
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
                    {bookData?.library.map((library) => (
                        <div key={bookData.id}>
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
                        description="Consulter les disponibilités de l’ouvrage dans les différentes bibliothèques de Paris et rendez vous dans l’une des bibliothèques pour faire votre demande."
                        buttonText="Consulter les horaires des bibliothèques"
                    />
                    <ReferenceCard
                        title="Réserver votre exemplaire en ligne"
                        tag="Abonné.e"
                        description="Réservez à l’avance et allez récupérer votre ouvrage dans la bibliothèque sélectionnée par vos soins."
                        buttonText="Me connecter à mon compte"
                    />
                </div>
            </section>
            <section className="my-16">
                <SectionHeading3 title="Suggestions: ces références qui pourraient vous plaire" />
            </section>
        </main>
    )
}