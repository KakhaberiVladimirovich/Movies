import React from "react";
import { Header } from "./Loyout/Header";
import { Footer } from "./Loyout/Footer";
import { Main } from "./Loyout/Main";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
