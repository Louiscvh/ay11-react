import { LucideDownload, LucideShare } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { booksData } from "../data/book.data"
import { useNavigate, useParams } from "react-router-dom"
import { Heading } from "../components/Heading"


export const Book = () => {
    const { id } = useParams()
    const bookData = booksData.books.find(book => book.id.toString() === id)
    const navigate = useNavigate()

    console.log(bookData)


    if (!bookData) navigate('/')
    return (
        <main className="container mx-auto mt-16">
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
            <section className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    {!bookData?.cover ? (
                        <Heading>Le livre n'a pas de couverture, veuilez nous excusez pour le dérangement</Heading>
                    ) : (
                        <img src={bookData.cover} alt={bookData.title} className="w-64 h-96" />
                    )}
                </div>
                <div className="col-span-2">
                    <Heading type="h3" className="my-4" >Résumé</Heading>
                    <Heading type="h4" className="my-2">Description</Heading>
                    {!bookData?.resume ? (
                        <Heading>Le livre n'a pas de résumé, veuilez nous excusez pour le dérangement</Heading>
                    ) : (
                        <Heading> {bookData.resume} </Heading>
                    )}
                    </div>
            </section>
        </main>
    )
}