import {Header} from "./components/Header.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home.page.tsx";

export const App = () => {
  return (
    <>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    </>
  )
}
