import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./sotiDetali.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import getOneSotiBook from "../../Services/Axios/Requests/OneSotiBook";
import { FadeLoader } from "react-spinners";
import TitleTab from "../../components/TitleTab/TitleTab";

export default function sotiDetali() {
  let { id } = useParams();
  let navigate = useNavigate();

  const { data, isLoading, error } = getOneSotiBook(id);

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
          <div className="container mt-3">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 p-3 img-container">
                <h3>{data.title}</h3>
                <hr />
                <img
                  className="soti-img"
                  src={`https://server.khakrizedarya.ir${data.image}`}
                  alt=""
                />
              </div>

              <div className="col-12 col-md-6 mt-4 mt-md-5">
                <div className="card p-3 align-content-center mt-md-5">
                  <div className="header-img text-center">
                    برای دانلود کتاب صوتی مورد نظر دکمه زیر را فشار دهید
                  </div>
                  <hr />
                  <div className="col-12 col-lg-6  float-start w-100">
                    <h3 className="text-center modal-title"></h3>
                    <h5 className="modal-author bg-dark"></h5>
                    <p className="modal-description fw-bold bg-info"></p>
                    <div className="col-12 text-center">
                      <div className="row align-items-center ">
                        <div className="col-12 ms-auto p-0">
                          <audio
                            src={`https://server.khakrizedarya.ir${data.audio_file}`}
                            id="music"
                            controls
                          ></audio>
                        </div>

                        <div className="col-12">
                          <Link
                            to={`https://server.khakrizedarya.ir${data.audio_file}`}
                            download
                            className="btn btn-danger text-center download-podcast mt-1 "
                          >
                            دانلود فایل صوتی
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-4">
              <div className="col details"></div>
              <hr />
              <h5>
                نویسنده:
                <p className="d-inline-block small-size">
                  {data.author ? data.author : "-"}
                </p>
              </h5>
              <h5>
                تدوین و تنظیم:
                <p className="d-inline-block small-size">
                  {data.editor ? data.editor : "-"}
                </p>
              </h5>
              <h5>
                خوانش:
                <p className="d-inline-block small-size">
                  {data.narrator ? data.narrator : "-"}
                </p>
              </h5>
            </div>
            <div className="row mt-2">
              <div className="col description">
                <hr className="mt-4" />
                <h4>توضیحات:</h4>
                <p>{data.description ? data.description : "-"}</p>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
