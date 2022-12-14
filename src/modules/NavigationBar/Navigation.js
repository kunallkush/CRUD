import React from "react";

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="d-flex justify-content-between align-items-center ">
          <img src="logo512.png" style={{ width: "30px", height: "30px" }} />
          <div className="navbar-brand" style={{ color: "wheat" }}>
            React Keep
          </div>
        </div>

        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className=" nav-link" id="a" href="/">
                Add Notes
              </a>
            </li>
            <li className="nav-item">
              <a className=" nav-link" id="a" href="/">
                CRUD
              </a>
            </li>
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0 d-flex justify-content-end">
          <input
            className="form-control mr-sm-2 me-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </>
  );
}

export default Navigation;
<nav className="navbar bg-dark">
  <div className="container-fluid ">
    <div className="d-flex justify-content-between align-items-center ">
      <img src="logo512.png" style={{ width: "30px", height: "30px" }} />
      <div className="navbar-brand" style={{ color: "wheat" }}>
        React Keep
      </div>
    </div>
    <div style={{ color: "white" }}>
      <ul className="d-flex">
        <li>ADD NOTES</li>
        <li>CRUD</li>
      </ul>
    </div>
    <form className="d-flex" role="search">
      <input
        className="form-control me-2 "
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>;
