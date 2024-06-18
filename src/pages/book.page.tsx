import { LucideDownload, LucideHeart, LucideShare } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { booksData } from "../data/book.data"
import { useNavigate, useParams } from "react-router-dom"
import { Heading } from "../components/Heading"
import { Button } from "../components/Button"


export const Book = () => {
    const { id } = useParams()
    const bookData = booksData.books.find(book => book.id.toString() === id)
    const navigate = useNavigate()
    const errorMissingData = "Cette donnée est manquante, veuillez nous excuser pour le dérangement"

    console.log(bookData)


    if (!bookData) navigate('/')
    return (
        <main className="container m-auto px-4 mt-16">
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <button onClick={() => navigate('/')}>Accueil</button>
                    <p>{'>'}</p>
                    <button onClick={() => navigate('/books')}>Voir les résultats de recherche</button>
                </div>
                <div className="flex gap-4">
                    <LucideDownload size={24.5} />
                    <LucideShare size={24} />
                </div>
            </div>
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
                        <Heading className="font-extrabold" >Résumé</Heading>
                        {!bookData?.resume ? (
                            <Heading>Le livre n'a pas de résumé, veuilez nous excusez pour le dérangement</Heading>
                        ) : (
                            <Heading> {bookData.resume} </Heading>
                        )}
                    </div>
                    <div>
                        <Heading className="font-extrabold" >Auteur</Heading>
                        {!bookData?.author ? (<Heading>{errorMissingData}</Heading>) : (<Heading>{bookData.author}</Heading>)}
                    </div>
                    <div>
                        <Heading className="font-extrabold" >Éditeur</Heading>
                        {!bookData?.editor ? (<Heading>{errorMissingData}</Heading>) : (<Heading>{bookData.editor}</Heading>)}
                    </div>
                    <div>
                        <Heading className="font-extrabold" >Date de publication</Heading>
                        {!bookData?.date ? (<Heading>{errorMissingData}</Heading>) : (<Heading>{bookData.date}</Heading>)}
                    </div>
                    <div>
                        <Heading className="font-extrabold" >ISBN</Heading>
                        {!bookData?.isbn ? (<Heading>{errorMissingData}</Heading>) : (<Heading>{bookData.isbn}</Heading>)}
                    </div>
                    <div>
                        <Heading className="font-extrabold" >Avis des lecteurs</Heading>
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
        </main>
    )
}