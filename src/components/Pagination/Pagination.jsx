import React, { useState, useMemo } from "react";

function Pagination({ data, onPageChange, pageSize }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages and page numbers
  const pageNumbers = useMemo(() => {
    if (data && data.length) {
      const pagesCount = Math.ceil(data.length / pageSize);
      return Array.from(Array(pagesCount).keys());
    }
    return [];
  }, [data, pageSize]);

  // Change page and notify parent component
  const changePaginate = (newPage) => {
    setCurrentPage(newPage);
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <>
      <nav className="d-flex justify-content-center" dir="ltr">
        <ul className="pagination pagination-lg">
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber + 1}
              className={`${
                pageNumber + 1 === currentPage ? "active" : ""
              } page-item`}
              aria-current="page"
              onClick={() => changePaginate(pageNumber + 1)}
              style={{ cursor: "pointer" }}
            >
              <span className="page-link">{pageNumber + 1}</span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
