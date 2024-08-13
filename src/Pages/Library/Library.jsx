import React, { useState } from "react";
import getLibraryData from "../../Services/Axios/Requests/Library";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "react-query";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";
import CardBox from "../../components/CardBox/CardBox";
import TitleTab from "../../components/TitleTab/TitleTab";
import Pagination from "../../components/Pagination/Pagination";

export default function Library() {
  const { data: libraryData, isLoading: libraryDataIsLoading } = useQuery(
    "libraryData",
    () => getLibraryData()
  );

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // Function to get paginated data
  function getPaginatedData(data, page, size) {
    if (!data) return [];
    const start = (page - 1) * size;
    const end = start + size;
    return data.slice(start, end);
  }

  const paginatedData = getPaginatedData(libraryData, currentPage, pageSize);

  return (
    <>
      <Header />
      <TitleTab title="کتابخانه" />
      <div className="container">
        <div className="row mt-4">
          {libraryDataIsLoading ? (
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
            paginatedData.map((library) => (
              <div key={library.id} className="col-12 col-sm-6 col-md-4">
                <CardBox
                  title={library.title}
                  img={`https://server.khakrizedarya.ir${library.image}`}
                  desc={`${library.description.slice(0, 30)}...`}
                  href={`/library/${library.id}`}
                />
              </div>
            ))
          )}
        </div>
        <Pagination
          data={libraryData}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
          currentPage={currentPage} // Pass currentPage if required
        />
      </div>
      <Footer />
    </>
  );
}
