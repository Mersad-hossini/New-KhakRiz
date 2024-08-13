import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getYadmanDetails from "../../Services/Axios/Requests/OneYadmanData";

import "./YadmanDetail.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardBox from "../../components/CardBox/CardBox";
import { FadeLoader } from "react-spinners";

export default function YadmanDetail() {
  let { id } = useParams();
  let navigate = useNavigate();

  const { data, isLoading, error } = getYadmanDetails(id);

  useEffect(() => {
    // Only navigate if there's an error or no data
    if (error || (!isLoading && !data)) {
      navigate("/NotFound");
    }
  }, [error, isLoading, data, navigate]);

  if (error || (!isLoading && !data)) {
    return null; // Return null to avoid rendering anything while navigating
  }

  return (
    <>
      <Header />

      {isLoading ? (
        <div className="spinner-loader">
          <FadeLoader />
        </div>
      ) : (
        <>
          <section style={{ backgroundColor: "rgb(255, 241, 221)" }}>
            <div className="container py-5 container-info">
              <div className="row justify-content-center bg-white">
                <div className="col-12 col-md-6 p-0">
                  <div className="card card-top">
                    <img
                      src={`https://server.khakrizedarya.ir${data.image}`}
                      className="card-img-top img-resize img-fluid"
                      alt="image data"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card-body mt-4">
                    <h4>
                      نام یادمان:
                      <p className="d-inline-block font-detail">{data.name}</p>
                    </h4>
                    <h4>
                      نشانی یادمان:
                      <p className="d-inline-block font-detail">
                        {data.address}
                      </p>
                    </h4>
                    <h4>
                      تاریخ تشییع جنازه:
                      <p className="d-inline-block font-detail">
                        {data.funeral_date}
                      </p>
                    </h4>
                    <h4>
                      تاریخ احداث یادمان:
                      <p className="d-inline-block font-detail">
                        {data.construction_date}
                      </p>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {data.ShohadaLists.length === 0 ? (
            <div className="alert alert-danger text-center mt-3 mx-5">
              تصویری بارگزاری نشده
            </div>
          ) : (
            <section className="bg-white">
              <div className="container">
                <div className="row yadman-info justify-content-center pt-4 g-3">
                  {data.ShohadaLists.map((shohada) => (
                    <div key={shohada.id} className="col-md-6 col-lg-4">
                      <div className="card subset-card">
                        <img
                          src={`https://server.khakrizedarya.ir/media/${shohada.image}`}
                          className="card-img-top img-fluid subset-img"
                          alt="shohada image"
                        />
                        <div className="card-body">
                          <h5 className="card-text">سن: {shohada.age}</h5>
                          <h5 className="card-text">
                            محل شهادت: {shohada.place_of_martyrdom}
                          </h5>
                          <h5 className="card-text">
                            عملیات: {shohada.operation}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      <Footer />
    </>
  );
}
