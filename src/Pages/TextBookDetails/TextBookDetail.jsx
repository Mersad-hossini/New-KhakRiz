import React, { useEffect } from "react";
import "./TextBookDetail.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import getOneTextBook from "../../Services/Axios/Requests/OneTextBook";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";

export default function TextBookDetail() {
  let { id } = useParams();
  let navigate = useNavigate()

  const { data, isLoading, error } = getOneTextBook(id);

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

              <div className="col-12 col-md-6 mt-2 mt-md-5">
                <div className="card p-3 align-content-center mt-md-5">
                  <div className="header-img text-center">
                    برای دریافت کتاب مورد نظر دکمه زیر را فشار دهید
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <Link
                        to={`https://server.khakrizedarya.ir${data.pdf_file}`}
                        download
                        className="btn btn-danger mb-3 mb-md-0  download-pdf"
                      >
                        {" "}
                        دانلود فایل PDF{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row mt-4">
              <div className="col textBook-info"></div>
                <hr />
                <h5>
                  نویسنده:
                  <p className="d-inline-block small-size">{data.author}</p>
                </h5>
                <h5>
                پژوهشگر:
                  <p className="d-inline-block small-size">{data.researcher}</p>
                </h5>
                <h5>
                ناشر:
                  <p className="d-inline-block small-size">{data.publisher}</p>
                </h5>
              <div className="row mt-2">
                <div className="col description">
                  <hr />
                  <h3>{data.subject}</h3>
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
