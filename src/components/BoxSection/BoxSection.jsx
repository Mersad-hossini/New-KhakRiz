import React from "react";
import "./BoxSection.css";
import { Link } from "react-router-dom";

export default function BoxSection({ img, href }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card card-assistance text-center">
        <Link to={href}>
          <img src={`/images/${img}`} className="img-fluid" alt="card" />
        </Link>
      </div>
    </div>
  );
}
