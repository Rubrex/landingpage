import React from "react";
import Header from "./Components/Header/header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import CardHolder from "./Components/Card/CardHolder";
import SkeletonCard from "./Components/Card/SkeletonCard";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <div className="catsCard">
        <CardHolder />
      </div>
      <Footer />
    </div>
  );
}

export default App;
