import Navbar from "./elements/Navbar";
import Searchpage from './elements/Searchpage';
import Page404 from "./elements/Page404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weatherpage from "./elements/Weatherpage";
import Articlepage from "./elements/Articlepage";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div id="background"/>
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Searchpage />}/>
                        <Route path="/results/:location/:days" element={<Weatherpage />}/>
                        <Route path="*" element={<Page404 />}/>
                        <Route path="/article/:title" element={<Articlepage />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
