import React, { useState } from "react";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputSearch.trim()) {
      navigate(`/search/${inputSearch.trim()}`);
    }
  };

  return (
    <header>
      <div className="top-bar"></div>
      <Navbar
        expand="lg"
        sticky="top"
        className="navbar-dark seconde-bar bg-gradient"
      >
        <Container fluid>
          {/* Logo for Small Screens */}
          <Navbar.Brand className="ms-auto d-lg-none" href="/">
            <img
              id="nav-logo-smallScreen"
              src="/images/khakeize-logo.png"
              alt="logo"
              width="55"
              height="55"
            />
          </Navbar.Brand>

          {/* Navbar Toggler for Small Screens */}
          <button
            className="custom-toggle d-block d-lg-none"
            onClick={handleToggle}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Navbar Collapsible Content */}
          <Navbar.Collapse
            id="navbarSupportedContent"
            className={`navbar-collapse ${
              isNavCollapsed ? "collapse" : "show"
            }`}
          >
            <Nav className="navbar-nav nav-item mb-2 mb-lg-0">
              {/* Home */}
              <Link className="nav-link" to="/" aria-current="page">
                خانه
              </Link>

              {/* Dropdown for Departments */}
              <NavDropdown
                title="معاونت ها"
                className="nav-dropdown"
                id="nav-dropdown"
              >
                <Link className="dropdown-item text-end" to="/adabiat">
                  ادبیات و تاریخ
                </Link>
                <NavDropdown.Divider className="d-none d-lg-flex" />

                <Link className="dropdown-item text-end" to="/honari">
                  هنری و امور سینمایی
                </Link>
                <NavDropdown.Divider className="d-none d-lg-flex" />

                <Link className="dropdown-item text-end" to="/yadman">
                  یادمان شهدای گمنام
                </Link>
                <NavDropdown.Divider className="d-none d-lg-flex" />

                <Link className="dropdown-item text-end" to="/majazi">
                  فضای مجازی
                </Link>
                <NavDropdown.Divider className="d-none d-lg-flex" />

                <Link className="dropdown-item text-end" to="/library">
                  کتابخانه
                </Link>
              </NavDropdown>

              {/* About Us */}
              <Link
                to="/about-us"
                className="nav-link mx-lg-2"
                aria-current="page"
              >
                درباره ما
              </Link>
            </Nav>

            {/* Logo for Large Screens */}
            <Link className="m-auto d-none d-lg-flex" to="/">
              <img
                id="nav-logo-bigScreen"
                src="/images/khakeize-logo.png"
                alt="logo"
                width="55"
                height="55"
              />
            </Link>

            {/* Search Form */}
            <form
              className="d-flex justify-content-center ms-0"
              id="form-search"
              role="search"
              autoComplete="off"
              onSubmit={submitHandler}
            >
              <div className="group">
                <button
                  type="submit"
                  className="btn"
                  id="search-btn"
                  aria-label="Search"
                >
                  <img
                    src="/images/Magnifierpng.png"
                    className="icon"
                    alt="Magnifierpng-logo"
                  />
                </button>
                <input
                  type="text"
                  className="input"
                  name="search"
                  id="input-search"
                  placeholder="جوینده یابنده است..."
                  value={inputSearch}
                  onChange={(event) => setInputSearch(event.target.value)}
                />
              </div>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
