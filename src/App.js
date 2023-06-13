import "./App.css";
import Contact from "./components/Contact/Contact";
import { Details } from "./components/Details/Details";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import Navigation from "./components/Navigation/Navigation";
import Player from "./components/PlayersPresentation/PlayersPresentation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Details />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
