import Navbar from "./elements/Navbar";
import Searchpage from './elements/Searchpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weatherpage from "./elements/Weatherpage";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Searchpage />}/>
                        <Route path="/results/:location" element={<Weatherpage />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
