import React, { useEffect, useState, useCallback } from "react";
import "./Yadman.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import getYadmanData from "../../Services/Axios/Requests/Yadman";
import { useQuery } from "react-query";
import CardBox from "../../components/CardBox/CardBox";
import CityFilterForm from "../../components/CityFilterForm/CityFilterForm";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";
import TitleTab from "../../components/TitleTab/TitleTab";
import Pagination from "../../components/Pagination/Pagination"; // Import your Pagination component
import { useLocation } from "react-router-dom";

export default function Yadman() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get("city");

  const { data: yadmanData, isLoading: yadmanDataIsLoading } = useQuery(
    "yadman",
    getYadmanData
  );

  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    if (yadmanData) {
      const allCategory = [...new Set(yadmanData.map((item) => item.city))];
      setCategories(allCategory);

      if (city) {
        // Filter by city if the query parameter exists
        const filteredData = yadmanData.filter((item) => item.city === city);
        setFilteredCategories(filteredData);
      } else {
        // Show all data if no city is specified
        setFilteredCategories(yadmanData);
      }
    }
  }, [yadmanData, city]);

  const filterData = useCallback(
    (selectedCategories) => {
      if (!yadmanData) return;

      if (selectedCategories.length === 0) {
        setFilteredCategories(yadmanData);
        return;
      }

      const filteredData = yadmanData.filter((item) =>
        selectedCategories.includes(item.city)
      );
      setFilteredCategories(filteredData);
    },
    [yadmanData]
  );

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Paginate the filtered data
  const paginatedData = filteredCategories.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <TitleTab title="یادمان شهدا" />

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3 filter-box sticky-md-top z-0">
              <div
                className={`collapse d-md-block ${
                  !isFilterVisible ? "show" : ""
                }`}
                id="filterCollapse"
              >
                <div className="border-box">
                  <CityFilterForm
                    categories={categories}
                    filterData={filterData}
                  />
                </div>
              </div>
            </div>

            {yadmanDataIsLoading ? (
              <div className="col-12 col-md-9">
                <div className="row yadman-data">
                  {[...Array(3)].map((_, idx) => (
                    <div
                      key={idx}
                      className="col-12 col-sm-9 col-md-6 col-lg-4 my-3 mx-auto"
                    >
                      <PlaceHolder />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="col-12 col-md-9">
                <div className="row yadman-data">
                  {paginatedData.length > 0 ? (
                    paginatedData.map((data) => (
                      <div
                        key={data.id}
                        className="col-12 col-sm-9 col-md-6 col-lg-4 my-3 mx-auto"
                      >
                        <CardBox
                          img={`https://server.khakrizedarya.ir${data.image}`}
                          title={`یادمان ${data.name.slice(19, 40)}`}
                          href={`/yadman/${data.id}`}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="col-12 my-3 mx-auto">
                      <div className="alert alert-danger mt-3">
                        دیتایی برای این شهرستان وجود ندارد
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Render Pagination Component */}
          {filteredCategories.length > pageSize && (
            <div className="row">
              <div className="col-12">
                <Pagination
                  data={filteredCategories}
                  pageSize={pageSize}
                  onPageChange={handlePageChange}
                  currentPage={currentPage}
                />
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}