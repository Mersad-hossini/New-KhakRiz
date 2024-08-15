import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import Silder from "../../components/Slider/Slider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./Home.css"

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BushehrMap from "../../components/BushehrMap/BushehrMap";
import TitleSection from "../../components/TitleSection/TitleSection";
import BoxSection from "../../components/BoxSection/BoxSection";
import CardBox from "../../components/CardBox/CardBox";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

// All Sliders Api
import { useQuery } from "react-query";
import getSliders from "../../Services/Axios/Requests/Sliders";
import getRaido from "../../Services/Axios/Requests/Radio";
import getVideo from "../../Services/Axios/Requests/Video";
import GraphicDesign from "../../Services/Axios/Requests/GraphicDesign";
import TitleTab from "../../components/TitleTab/TitleTab";

export default function Home() {
  const { data: sliderData, isLoading: sliderIsLoading } = useQuery(
    "Sliders",
    () => getSliders()
  );
  const { data: raidoData, isLoading: raidoIsLoading } = useQuery("Raido", () =>
    getRaido()
  );
  const { data: videoData, isLoading: videoIsLoading } = useQuery("Video", () =>
    getVideo()
  );
  const { data: getDesign, isLoading: getDesignIsLoading } = useQuery(
    "GraphicDesign",
    () => GraphicDesign()
  );

  return (
    <>
      <Header />
      <TitleTab title="خاک ریز دریا" />
      <div className="container mt-3 mb-3">
        {sliderIsLoading ? (
          <Card>
            <Card.Img
              variant="top"
              src="/images/placeholder.png"
              style={{ height: "21rem" }}
            />
          </Card>
        ) : (
          <Swiper
            navigation={true}
            effect={"fade"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade, Navigation]}
            loop={true}
            dir="rtl"
            className="mySwiper"
          >
            {sliderData?.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img
                  src={`https://server.khakrizedarya.ir${slide.image}`}
                  className="w-100 h-100"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <TitleSection title="معاونت ها" />
        <div className="row gy-4">
          <BoxSection
            img="adabiat.jpg"
            title="ادبیات و تاریخ"
            href="/adabiat"
          />
          <BoxSection
            img="honari.jpg"
            title="هنری و امور سینمایی"
            href="/honari"
          />
          <BoxSection img="yadman.jpg" href="/yadman" />
          <BoxSection img="majazi.jpg" href="/majazi" />
          <BoxSection img="library.jpg" href="/library" />
          <BoxSection
            img="games.jpg"  
            href=""
          />
        </div>

        <TitleSection title="رادیویی" />
        <Silder>
          {raidoIsLoading ? (
            <div className="container">
              <div className="row gy-3 justify-content-center">
                <div className="col-md-4">
                  <PlaceHolder />
                </div>
                <div className="col-md-4 d-none d-md-block">
                  <PlaceHolder />
                </div>
                <div className="col-md-4 d-none d-lg-block">
                  <PlaceHolder />
                </div>
              </div>
            </div>
          ) : (
            <>
              {raidoData.slice(0, 6).map((raido) => (
                <SwiperSlide key={raido.id}>
                  <CardBox
                    img={`https://server.khakrizedarya.ir${raido.audio_image}`}
                    title={raido.title}
                    href={`/honari/honariRadio/${raido.id}`}
                  />
                </SwiperSlide>
              ))}
            </>
          )}
        </Silder>

        <TitleSection title="کلیپ" />
        <Silder>
          {videoIsLoading ? (
            <div className="container">
              <div className="row gy-3 justify-content-center">
                <div className="col-md-4">
                  <PlaceHolder />
                </div>
                <div className="col-md-4 d-none d-md-block">
                  <PlaceHolder />
                </div>
                <div className="col-md-4 d-none d-lg-block">
                  <PlaceHolder />
                </div>
              </div>
            </div>
          ) : (
            <>
              {videoData.slice(0, 6).map((video) => (
                <SwiperSlide key={video.id}>
                  <CardBox
                    img={`https://server.khakrizedarya.ir${video.thumbnail}`}
                    title={video.title}
                    href={`/majazi/majaziClip/${video.id}`}
                  />
                </SwiperSlide>
              ))}
            </>
          )}
        </Silder>

        <TitleSection title="گالری" />
        <Silder>
          {getDesignIsLoading ? (
            <div className="container">
              <div className="row gy-3 justify-content-center">
                <div className="col-md-4">
                  <PlaceHolder />
                </div>
                <div className="col-md-4 d-none d-md-block">
                  <PlaceHolder />
                </div>
                <div className="col-md-4 d-none d-lg-block">
                  <PlaceHolder />
                </div>
              </div>
            </div>
          ) : (
            <>
              {getDesign.slice(0, 6).map((design) => (
                <SwiperSlide key={design.id}>
                  <CardBox
                    img={`https://server.khakrizedarya.ir${design.image}`}
                    title={design.title}
                    href={`/majazi/majaziGallery/${design.id}`}
                  />
                </SwiperSlide>
              ))}
            </>
          )}
        </Silder>

        {/* Bushehr Map */}
        <TitleSection title="یادمان شهدا" />
        <section className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="mapdiv">
                  <BushehrMap />
                </div>
              </div>
            </div>
          </div>
        </section> 
      </div>
      <Footer />
    </>
  );
}