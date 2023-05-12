import "./App.css";
import Header from "./Components/base-structure/Header";
import CardProvider from "./utils/CardProvider";
import Cards from "./Components/Body/Restaurant-List/List";
import { cardsData } from "./Data/CardsData";

function App() {
  return (
    <>
      <CardProvider cards={cardsData}>
        <Header />
        <Cards />
      </CardProvider>
    </>
  );
}

export default App;
