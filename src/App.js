import Navbar from "./elements/Navbar";
import Searchpage from './elements/Searchpage';
import Footer from "./elements/Footer";

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
        <Navbar />
        <div className="content">
            <Searchpage />
        </div>
        <Footer />
    </div>
  );
}

export default App;
