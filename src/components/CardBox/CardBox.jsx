import React from "react";
import { Link } from "react-router-dom";

export default function SliderBox({ img, title, href, desc }) {  
  return (
    <div className="item">
      <div className="card h-100 mb-4 text-center shadow">
        <Link className="w-100" to={href}>
          <img className="slider-img w-100" src={img} alt="" />
        </Link>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{desc}</p>
          <Link
            to={href}
            className="btn btn-sm btn-success border-0 w-100 slider-button"
          >
            مشاهده
          </Link>
        </div>
      </div>
    </div>
  );
}
