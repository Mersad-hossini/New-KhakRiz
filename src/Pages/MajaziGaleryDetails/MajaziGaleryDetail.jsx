import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MagaziGallerykData from "../../Services/Axios/Requests/OneMajaziGalleryData";
import { FadeLoader } from "react-spinners";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function MajaziGaleryDetail() {
  let { id } = useParams();
  let navigate = useNavigate();

  const { data, isLoading, error } = MagaziGallerykData(id);

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
              <div className="col-12 col-md-6 mb-3 image-container ps-5">
                <h4>{data.title}</h4>
                <hr />
                <div className="bgImgBook">
                  <img
                    className="img-fluid d-block float-start right-img rounded-1"
                    src={`https://server.khakrizedarya.ir${data.image}`}
                    alt="image-detail"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-5">
                <div className="card p-3 align-content-center mt-md-5">
                  <div className="header-img text-center">
                    برای دانلود عکس مورد نظر دکمه زیر را فشار دهید
                  </div>
                  <hr />
                  <Link
                    to={`https://server.khakrizedarya.ir${data.image}`}
                    download
                    className="btn btn-danger mb-3 mb-md-0  download-pdf"
                  >
                    دانلود عکس
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="container ">
            <div className="row">
              <div className="col info-container">
                <hr />
                <h5>
                  نام اثر:
                  <p className="d-inline-block small-size">{data.title}</p>
                </h5>
                <h5>
                  طراح:
                  <p className="d-inline-block mt-2 m-0 small-size">
                    {data.designer}
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
