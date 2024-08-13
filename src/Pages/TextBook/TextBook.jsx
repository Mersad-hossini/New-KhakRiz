import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useQuery } from "react-query";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";
import CardBox from "../../components/CardBox/CardBox";
import getTextBook from "../../Services/Axios/Requests/TextBook";
import TitleTab from "../../components/TitleTab/TitleTab";
import Pagination from "../../components/Pagination/Pagination"; // Use your custom Pagination component

export default function TextBook() {
  const { data: textBookData, isLoading: textBookIsLoading } = useQuery(
    "textBook",
    () => getTextBook()
  );

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // Get paginated data
  const paginatedData = getPaginatedData(textBookData, currentPage, pageSize);

  // Function to get paginated data
  function getPaginatedData(data, page, size) {
    if (!data) return [];
    const start = (page - 1) * size;
    const end = start + size;
    return data.slice(start, end);
  }

  return (
    <>
      <Header />
      <TitleTab title="کتاب های متنی" />
      <div className="container">
        <div className="row mt-4">
          {textBookIsLoading ? (
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
            paginatedData.map((textBook) => (
              <div key={textBook.id} className="col-12 col-sm-6 col-md-4">
                <CardBox
                  title={textBook.title}
                  img={`https://server.khakrizedarya.ir${textBook.image}`}
                  desc={`${textBook.description.slice(0, 30)}...`}
                  href={`/adabiat/textBook/${textBook.id}`}
                />
              </div>
            ))
          )}
        </div>
        <Pagination
          data={textBookData}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <Footer />
    </>
  );
}
