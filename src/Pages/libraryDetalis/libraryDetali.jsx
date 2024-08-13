import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LibraryBookData from "../../Services/Axios/Requests/OneLibraryBook";
import { FadeLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";

export default function libraryDetali() {
  let { id } = useParams();

  const { data, isLoading, error } = LibraryBookData(id);

  let navigate = useNavigate();

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

              <div className="col-12 col-md-6 mt-md-5">
                <div className="card p-3 align-content-center mb-3 mt-md-5">
                  <div className="header-img text-center">
                    <a
                      className="btn btn-danger book-address"
                      onClick={() =>
                        window.scrollTo({ top: 1000, behavior: "smooth" })
                      }
                    >
                      برای اطلاع از موجودی کتاب به ادرس پایین صفحه مراجعه کنید
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col details-container">
                <hr />
                <h5>
                  نویسنده:
                  <p className="d-inline-block small-size">{data.author}</p>
                </h5>
                <h5>
                  ناشر:
                  <p className="d-inline-block small-size">{data.publisher}</p>
                </h5>
                <h5>
                  تاریخ نشر:
                  <p className="d-inline-block small-size">
                    {data.publication_date}
                  </p>
                </h5>
                <h5>
                  محل نشر:
                  <p className="d-inline-block small-size">
                    {data.publication_place}
                  </p>
                </h5>
              </div>
            </div>

            <div className="row">
              <div className="col book-description">
                <hr className="mt-2" />
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
