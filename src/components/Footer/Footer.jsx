import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pt-5 mt-4 bg-dark text-white bg-gradient">
      <div className="container text-center">
        <div className="row gy-4 ">
          <div className="col-md-2 mt-0 p-0">
            <h4 className="fw-bold mb-3 text-warning" title="خاکریز دریا">
              {" "}
              خاکریز دریا
            </h4>

            <Link title="خاکریز دریا" to="/">
              <img
                src="/images/khakeize-logo.png"
                alt="website-logo"
                width="120px"
                height="120px"
              />
            </Link>
          </div>

          <div className="col-md-4 mt-3 mt-md-0 mb-md-0 m-0">
            <h4 className="fw-bold mb-3 text-warning">پیوند ها</h4>
            <Link
              title="پیوند ها"
              to="https://defapress.ir/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/images/defaperes.png"
                width="90px"
                height="90px"
                alt="website-logo"
                className="rounded-circle img-fluid mb-3 me-2"
              />
            </Link>
          </div>

          <div className="col-md-3 mt-3 mt-md-0 mb-md-0 m-0">
            <h4 className="fw-bold text-warning">ارتباط با ما</h4>
            <ul className="list-unstyled m-0">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
                to="https://balad.ir/p/%D8%A7%D8%AF%D8%A7%D8%B1%D9%87-%DA%A9%D9%84-%D8%AD%D9%81%D8%B8-%D8%A7%D8%AB%D8%A7%D8%B1-%D9%88-%D9%86%D8%B4%D8%B1-%D8%A7%D8%B1%D8%B2%D8%B4-%D9%87%D8%A7%DB%8C-%D8%AF%D9%81%D8%A7%D8%B9-%D9%85%D9%82%D8%AF%D8%B3-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86-%D8%A8%D9%88%D8%B4%D9%87%D8%B1-bushehr_government-organization-and-agency-3RKUxfIizAmicb#15/28.98951/50.83234"
              >
                <li className="contact-us-map">
                  <img src="/images/map.png" className="me-1" alt="map-Logo" />
                  <span>
                    بوشهر / خیابان سیراف / جنب درمانگاه سابق ابوالفضل (ع) /
                    اداره کل حفظ و اثار و نشر ارزش های دفاع مقدس استان بوشهر
                  </span>
                </li>
              </Link>

              <li className="contact-us-phone mt-3">
                <img src="/images/phone.png" alt="phone-Logo" />
                <span>07733331987</span>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mt-3 mt-md-0">
            <h4 className="fw-bold mb-3 text-warning">فضای مجازی</h4>
            <div className="row">
              <div className="col-12">
                <ul className="list-unstyled">
                  <li className="list-inline-item mt-md-0">
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-gmail"
                    >
                      <img src="/images/gmail.png" alt="gmail" />
                    </Link>
                  </li>
                  <li className="list-inline-item mx-3">
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-insta"
                    >
                      <img src="/images/instagram.png" alt="instagram-Logo" />
                    </Link>
                  </li>
                  <li className="list-inline-item ms-3">
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-iconSize"
                    >
                      <img src="/images/Rubika.png" alt="Rubika-Logo" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-12">
                <ul className="list-unstyled">
                  <li className="list-inline-item">
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-iconSize"
                    >
                      <img src="/images/igap.png" alt="igap-Logo" />
                    </Link>
                  </li>
                  <li className="list-inline-item mx-3">
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-iconSize"
                    >
                      <img src="/images/eitaa.png" alt="eitaa-Logo" />
                    </Link>
                  </li>
                  <li className="list-inline-item ms-3">
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-iconSize"
                    >
                      <img src="/images/Bale.png" alt="Bale-Logo" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row align-items-center mb-3">
              <div className="col-12 text-center">
                <hr />
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-12 col-md-5 text-end">
                  <p>
                    کلیه حقوق مادی و معنوی این سایت برای اداره کل حفظ اثار و نشر
                    ارزش های دفاع مقدس بوشهر محفوظ هست - 1402 ©
                  </p>
                </div>
                <div className="col-12 col-md-5">
                  <p title="اکادمی استاد">
                    <Link className="python-link" to="https://pythonostad.ir/" target="_blank">طراحی و توسعه توسط اکادمی پایتون استاد - 1402 ©</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
