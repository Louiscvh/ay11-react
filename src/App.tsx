import {Header} from "./components/Header.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home.page.tsx";
import { Book } from "./pages/book.page.tsx";
import { Books } from "./pages/books.page.tsx";

export const App = () => {
  return (
    <>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/books" element={<Books/>}/>
                <Route path="/books/:id" element={<Book/>}/>
            </Routes>
        </Router>
    </>
  )
}
