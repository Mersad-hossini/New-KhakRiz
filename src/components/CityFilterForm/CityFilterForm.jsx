import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

export default function CityFilterForm({ categories, filterData }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cityFromUrl = searchParams.get("city");

  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    if (cityFromUrl) {
      setSelectedCategories([cityFromUrl]);
    }
  }, [cityFromUrl]);

  // Using useCallback to memoize the callback function to prevent unnecessary re-renders
  const handleCheckboxChange = useCallback((event) => {
    const selectedCategory = event.target.value;
    const isChecked = event.target.checked;

    setSelectedCategories((prevCategories) => {
      if (isChecked) {
        return [...prevCategories, selectedCategory];
      } else {
        return prevCategories.filter(
          (category) => category !== selectedCategory
        );
      }
    });
  }, []);

  // Ensure filterData is only called when selectedCategories actually change
  useEffect(() => {
    filterData(selectedCategories);
  }, [selectedCategories, filterData]);

  return (
    <>
      <form action="#">
        <div className="form-check">
          <h5>فیلتر شهرستان ها</h5>
          <hr />
          {categories.map((category, index) => (
            <div key={index} className="form-check">
              <input
                type="checkbox"
                className="ms-3 form-check-input float-end"
                name="mainCategory"
                value={category}
                id={`checkbox-${index}`}
                onChange={handleCheckboxChange}
                checked={selectedCategories.includes(category)}
              />
              <label htmlFor={`checkbox-${index}`} className="form-check-label">
                {category}
              </label>
            </div>
          ))}
        </div>
      </form>
    </>
  );
}
