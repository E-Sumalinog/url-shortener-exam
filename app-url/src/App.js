import React, { useState } from "react";
import ShortenForm from "./components/UrlShortener";
import NavigationBar from "./components/Navigation";
import FeaturedContent from "./components/Feature";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="main-content">
        <ShortenForm />
        <FeaturedContent />
      </div>
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;