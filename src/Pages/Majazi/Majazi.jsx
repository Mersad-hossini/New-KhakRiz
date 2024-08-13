import React from "react";
import "./Majazi.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TitleSection from "../../components/TitleSection/TitleSection";
import BoxSection from "../../components/BoxSection/BoxSection";

export default function Majazi() {

  return (
    <>
      <Header />
      <TitleSection title="فضای مجازی" />
      <div className="container">
        <div className="row">
          <BoxSection img="/motonGraphics.jpg" />
          <BoxSection img="/tarahiGraphics.jpg" href="/majazi/majaziGallery" />
          <BoxSection img="/vidioClip.jpg" href="/majazi/majaziClip" />
        </div>
      </div>
      
      <Footer />
    </>
  );
}
