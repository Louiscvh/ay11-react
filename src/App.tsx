import {Header} from "./components/Header.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home.page.tsx";
import { Book } from "./pages/book.page.tsx";
import {Footer} from "./components/Footer.tsx";
import {Search} from "./pages/search.page.tsx";
import {Connexion} from "./pages/connexion.page.tsx";
import {Confirm} from "./pages/confirm.page.tsx";

export const App = () => {
  return (
    <>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/books/:id" element={<Book/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/connexion" element={<Connexion/>}/>
                <Route path="/confirm" element={<Confirm/>}/>
            </Routes>
            <Footer/>
        </Router>
    </>
  )
}
