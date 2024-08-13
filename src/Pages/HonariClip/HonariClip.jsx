import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "react-query";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";
import CardBox from "../../components/CardBox/CardBox";
import getHonariClip from "../../Services/Axios/Requests/HonariClip";
import TitleTab from "../../components/TitleTab/TitleTab";
import Pagination from "../../components/Pagination/Pagination";

export default function HonariClip() {
  const { data: honariClip, isLoading: honariClipIsLoading } =
    useQuery(["honariClip"], () => getHonariClip());
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
  
    // Function to get paginated data
    function getPaginatedData(data, page, size) {
      if (!data) return [];
      const start = (page - 1) * size;
      const end = start + size;
      return data.slice(start, end);
    }
  
    const paginatedData = getPaginatedData(honariClip, currentPage, pageSize);

  return (
    <>
      <Header />
      <TitleTab title="کلیپ" />

      <div className="container">
        <div className="row mt-4">
          {honariClipIsLoading ? (
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
            paginatedData.map((clip) => (
              <div key={clip.id} className="col-12 col-sm-6 col-md-4">
                <CardBox
                  title={clip.title}
                  img={`https://server.khakrizedarya.ir${clip.image}`}
                  href={`/honari/honariClip/${clip.id}`}
                />
              </div>
            ))
          )}
        </div>
        <Pagination
          data={honariClip}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
          currentPage={currentPage} // Pass currentPage if required
        />
      </div>
      <Footer />
    </>
  );
}
