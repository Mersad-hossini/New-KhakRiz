import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TitleSection from "../../components/TitleSection/TitleSection";
import BoxSection from "../../components/BoxSection/BoxSection";

export default function Honari() {

  return (
    <>
      <Header />
      <TitleSection title="هنری و امور سینمایی" />
      <div className="container">
        <div className="row gy-3">
          <BoxSection img="/musichonaricover.png" href="/honari/honariClip" />
          <BoxSection img="/radiohonaricover.png" href="/honari/honariRaido" />
          <BoxSection img="/videohonariimage.png" />
          <BoxSection img="/motionhonaricover.png" />
        </div>
      </div>
      
      <Footer />
    </>
  );
}
