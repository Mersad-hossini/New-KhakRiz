import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./MajaziClipDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import MajaziClipData from "../../Services/Axios/Requests/OneMajaziClipData";
import { FadeLoader } from "react-spinners";
import TitleTab from "../../components/TitleTab/TitleTab";

export default function MajaziClipDetail() {
  let { id } = useParams();
  let navigate = useNavigate();

  const { data, isLoading, error } = MajaziClipData(id);

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
                <video
                  className="video-size"
                  poster={`https://server.khakrizedarya.ir${data.thumbnail}`}
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
                  تدوین و تنظیم:
                  <p className="d-inline-block m-0 mt-2 small-size">
                    {data.editing ? data.editing : "-"}
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
