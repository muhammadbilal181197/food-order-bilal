import "./App.css";
import Header from "./Components/base-structure/Header";
import CardProvider from "./utils/CardProvider";
import Cards from "./Components/Body/Restaurant-List/List";
import { cardsData } from "./Data/CardsData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetailPage from "./Components/Body/CardDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <CardProvider cards={cardsData}>
          <Header />
          {/* <Cards /> */}
          <Routes>
            <Route exact path="/" element={<Cards />} />
            <Route path="/Cards/:id" exact element={<CardDetailPage />} />
          </Routes>
        </CardProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
