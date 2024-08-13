import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import TitleTab from "../../components/TitleTab/TitleTab";

export default function NotFound() {
  return (
    <>
    <TitleTab title="یافت نشد" />
      <div
        className="container flex-column align-items-center justify-content-center"
        style={{ margin: "0 auto", maxWidth: "1200px" }}
      >
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="pageError">
          <img src="/images/404.png" alt="image errora" />
          <div className="boxText m-0">
            <p>صفحه مورد نظر یافت نشد </p>
          </div>
          <div className="btn">
            <Link to="/" className="text-white get-back">
              برگشت به خانه
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
