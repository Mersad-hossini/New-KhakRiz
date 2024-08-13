import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import HonariClipData from "../../Services/Axios/Requests/OneHonariClipData";
import TitleTab from "../../components/TitleTab/TitleTab";

export default function HonariClipDetail() {
  let { id } = useParams();
  let navigate = useNavigate();

  const { data, isLoading, error } = HonariClipData(id);

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
      <TitleTab title="پخش کلیپ" />

      {isLoading ? (
        <div className="spinner-loader">
          <FadeLoader />
        </div>
      ) : (
        <>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 mt-4 video-container">
                <h4>{data.title}</h4>
                <hr />
                <video
                  className="video-size"
                  poster={`https://server.khakrizedarya.ir${data.image}`}
                  controls
                  src={`https://server.khakrizedarya.ir${data.clip}`}
                ></video>
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-5">
                <div className="card p-3 align-content-center mt-md-5">
                  <div className="header-img text-center">
                    برای دانلود کلیپ مورد نظر دکمه زیر را فشار دهید
                  </div>
                  <hr />
                  <Link
                    to={`https://server.khakrizedarya.ir${data.clip}`}
                    className="btn btn-danger mb-3 download"
                  >
                    دانلود کلیپ{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col info-container">
                <hr />
                <h5>
                  خواننده:
                  <p className="d-inline-block mt-2 small-size">{data.singer}</p>
                </h5>
                <h5>
                  ترانه سرا:
                  <p className="d-inline-block mt-2 small-size">{data.lyricist}</p>
                </h5>
                <h5>
                  کارگردان:
                  <p className="d-inline-block mt-2 small-size">{data.director}</p>
                </h5>
                <h5>
                  اهنگ ساز:
                  <p className="d-inline-block mt-2 mb-0 small-size">
                    {data.composer}
                  </p>
                </h5>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
