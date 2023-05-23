import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import Navigation from "./components/Navigation/Navigation";
import Player from "./components/PlayersPresentation/PlayersPresentation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
