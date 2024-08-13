import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "react-query";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";
import CardBox from "../../components/CardBox/CardBox";
import getMajaziClip from "../../Services/Axios/Requests/MajaziClip";
import TitleTab from "../../components/TitleTab/TitleTab";
import Pagination from "../../components/Pagination/Pagination"; // Use your custom Pagination component

export default function MajaziClip() {
  const { data: majaziClip = [], isLoading: majaziClipIsLoading } = useQuery(
    ["majaziClip"],
    () => getMajaziClip()
  );

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // Get paginated data
  const paginatedData = getPaginatedData(majaziClip, currentPage, pageSize);

  // Function to get paginated data
  function getPaginatedData(data, page, size) {
    const start = (page - 1) * size;
    const end = start + size;
    return data.slice(start, end);
  }

  return (
    <>
      <Header />
      <TitleTab title="کلیپ" />

      <div className="container">
        <div className="row mt-4">
          {majaziClipIsLoading ? (
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
            paginatedData.map((gallery) => (
              <div key={gallery.id} className="col-12 col-sm-6 col-md-4">
                <CardBox
                  title={gallery.title}
                  img={`https://server.khakrizedarya.ir${gallery.thumbnail}`}
                  href={`/majazi/majaziClip/${gallery.id}`}
                />
              </div>
            ))
          )}
        </div>
        <Pagination
          data={majaziClip}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <Footer />
    </>
  );
}
