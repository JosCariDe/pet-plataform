import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

const Home = () => <div className="p-4">Home Page</div>
const CatsPage = () => <div className="p-4">Cats Page</div>
const DogsPage = () => <div className="p-4">Dogs Page</div>
const FavoritesPage = () => <div className="p-4">Favorites Page</div>
const MatcherPage = () => <div className="p-4">Matcher Page</div>

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main className="container mx-auto mt-4">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/gatos" element={<CatsPage/>}/>
                        <Route path="/perros" element={<DogsPage/>}/>
                        <Route path="favoritos" element={<FavoritesPage/>} />
                        <Route path="/matcher" element={<MatcherPage/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;