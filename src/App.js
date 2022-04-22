import React from "react";
import { Header, ShowCase, Work, Contact, About, Footer } from "./containers";

const App = () => {
  return (
    <div className="font-tajawal-regular uppercase">
      <Header />
      <ShowCase />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
