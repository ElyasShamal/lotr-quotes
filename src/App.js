import "./index.css";
import { characters } from "./db";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
