import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardBox from "../../components/CardBox/CardBox";

import "./Adabiat.css";
// Api
import getTextBook from "../../Services/Axios/Requests/TextBook";
import getSotiBook from "../../Services/Axios/Requests/SotiBook";
import { useQuery } from "react-query";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";
import { Link } from "react-router-dom";
import TitleTab from "../../components/TitleTab/TitleTab";
export default function Adabiat() {
  const { data: sotiBookiData, isLoading: sotiBookiIsLoading } = useQuery(
    "soti",
    () => getSotiBook()
  );
  const { data: textBookData, isLoading: textBookIsLoading } = useQuery(
    "textBook",
    () => getTextBook()
  );

  return (
    <>
      <Header />
      <TitleTab title="ادبیات و تاریخ" />

      {/* Spiner and More Book Soti */}
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="d-flex">
              <div className="spinner-grow spinner-grow-sm mt-4 "></div>
              <h5 className="mt-3 px-2 fw-bolder ">داغ ترین کتاب های صوتی</h5>
            </div>
          </div>
          <div className="col-6">
            <div className="buttonCard text-start ">
              <Link
                to="/adabiat/soti"
                className="btn mt-2 btn-outline-dark btn-sm fw-bold "
              >
                بیشتر
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Start Book Soti */}
      <div className="container">
        <div className="row mt-4">
          {sotiBookiIsLoading ? (
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
            sotiBookiData.slice(0, 3).map((soti) => (
              <div key={soti.id} className="col-12 col-sm-6 col-md-4">
                <CardBox
                  title={soti.title}
                  img={`https://server.khakrizedarya.ir${soti.image}`}
                  desc={`${soti.description.slice(0, 30)}...`}
                  href={`/adabiat/soti/${soti.id}`}
                />
              </div>
            ))
          )}
        </div>
      </div>
      {/* End Book Soti */}

      {/* Spiner and More Text Book */}
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="d-flex">
              <div className="spinner-grow spinner-grow-sm mt-4 "></div>
              <h5 className="mt-3 px-2 fw-bolder ">داغ ترین کتاب های متنی</h5>
            </div>
          </div>
          <div className="col-6">
            <div className="buttonCard text-start ">
              <Link
                to="/adabiat/textBook"
                className="btn mt-2 btn-outline-dark btn-sm fw-bold "
              >
                بیشتر
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Start Text Book */}
      <div className="container">
        <div className="row mt-4">
          {textBookIsLoading ? (
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
            textBookData.slice(0, 3).map((textBook) => (
              <div key={textBook.id} className="col-12 col-sm-6 col-md-4">
                <CardBox
                  title={textBook.title}
                  img={`https://server.khakrizedarya.ir${textBook.image}`}
                  desc={`${textBook.description.slice(0, 30)}...`}
                  href={`/adabiat/textBook/${textBook.id}`}
                />
              </div>
            ))
          )}
        </div>
      </div>
      {/* End Text Book */}
      <Footer />
    </>
  );
}
