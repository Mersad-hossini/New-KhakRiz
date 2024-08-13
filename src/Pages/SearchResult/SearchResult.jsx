import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import TitleTab from "../../components/TitleTab/TitleTab";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";
import CardBox from "../../components/CardBox/CardBox";
import axios from "axios";

export default function SearchResult() {
  const { title } = useParams();
  const [searchResult, setSearchResult] = useState([]);

//   axios
//     .get(
//       `https://server.khakrizedarya.ir/home-object/SerachData/?format=json/${title}`
//     )
//     .then((res) => setSearchResult(res));

  return (
    <>
      <Header />
      <TitleTab title="نتیجه سرچ" />
      <div className="container my-4">
        <h3>نتیجه سرچ: {title}</h3>
        <hr />
      </div>
      {/* <div className="container">
        <div className="row mt-4">
          {searchIsLoading ? (
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
            searchResult.map((search) => (
              <div key={search.id} className="col-12 col-sm-6 col-md-4">
                <CardBox
                  title={search.title}
                  img={`https://server.khakrizedarya.ir${search.image}`}
                  desc={`${search.description.slice(0, 30)}...`}
                  href={`/adabiat/${search.id}`} // The Api Should Say its for Wich page
                />
              </div>
            ))
          )}
        </div>
      </div> */}
      <Footer />
    </>
  );
}
