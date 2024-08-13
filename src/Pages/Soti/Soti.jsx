import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import getSotiBook from "../../Services/Axios/Requests/SotiBook";
import { useQuery } from "react-query";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";
import CardBox from "../../components/CardBox/CardBox";
import TitleTab from "../../components/TitleTab/TitleTab";
import Pagination from "../../components/Pagination/Pagination";

export default function Soti() {
  const { data: sotiData, isLoading: sotiIsLoading } = useQuery(
    ["SotiBook"],
    () => getSotiBook()
  );

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; 

  const getPaginatedData = (data, page, size) => {
    if (!data) return [];
    const start = (page - 1) * size;
    const end = start + size;
    return data.slice(start, end);
  };

  return (
    <>
      <Header />
      <TitleTab title="کتابخانه صوتی" />
      <div className="container">
        <div className="row mt-4">
          {sotiIsLoading ? (
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
            getPaginatedData(sotiData, currentPage, pageSize).map((soti) => (
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
        <Pagination
          data={sotiData}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <Footer />
    </>
  );
}
