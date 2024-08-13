import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import HonariRadioData from "../../Services/Axios/Requests/OneHonariRadioData";
import TitleTab from "../../components/TitleTab/TitleTab";

export default function HonariRaidoDetail() {
  let { id } = useParams();
  let navigate = useNavigate();

  const { data, isLoading, error } = HonariRadioData(id);

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
      <TitleTab title="کتاب صوتی" />

      {isLoading ? (
        <div className="spinner-loader">
          <FadeLoader />
        </div>
      ) : (
        <>
          <div className="container mt-3">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 p-3 sound-container">
                <h3>{data.title}</h3>
                <hr />
                <img
                  src={`https://server.khakrizedarya.ir${data.audio_image}`}
                  className="img-fluid d-block right-img mt-3 float-start rounded-1  w-100"
                  alt="image-detail"
                />
              </div>
              <div className="col-12 col-md-6 mt-4 ">
                <div className="card p-3 align-content-center mt-4">
                  <div className="header-img text-center">
                    برای دریافت موسیقی مورد نظر دکمه زیر را فشار دهید
                  </div>

                  <div className="col-12 col-lg-6 float-start w-100">
                    <h3 className="text-center modal-title"></h3>

                    <div className="col-12 text-center">
                      <div className="row align-items-center ">
                        <div className="col-12 ms-auto my-3 p-0">
                          <audio
                            src={`https://server.khakrizedarya.ir${data.audio}`}
                            id="music"
                            controls
                            preload="auto"
                          ></audio>
                        </div>
                        <div className="col-12">
                          <Link
                            to={`https://server.khakrizedarya.ir${data.audio}`}
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

          <div className="container ">
            <div className="row">
              <div className="col info-container">
                <hr />
                <h5>
                  بازیگران:
                  <p className="d-inline-block small-size">{data.actors}</p>
                </h5>
                <h5>
                  تدوین :<p className="d-inline-block small-size">{data.editor}</p>
                </h5>
                <h5>
                  نویسنده :<p className="d-inline-block small-size">{data.writer}</p>
                </h5>
                <h5>
                  کارگردان :<p className="d-inline-block small-size">{data.director}</p>
                </h5>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col info-description"></div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
