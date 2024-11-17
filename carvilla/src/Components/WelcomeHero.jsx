import React, { Component } from "react";

class WelcomeHero extends Component {
  render() {
    return (
      <section id="home" className="welcome-hero">
        {/* Top Area Start */}
        <div className="top-area">
          <div className="header-area">
            {/* Navigation Start */}
            <nav
              className="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy"
              data-minus-value-desktop="70"
              data-minus-value-mobile="55"
              data-speed="1000"
            >
              <div className="container">
                {/* Header Navigation */}
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i className="fa fa-bars"></i>
                  </button>
                  <a className="navbar-brand" href="index.html">
                    carvilla<span></span>
                  </a>
                </div>
                {/* Navbar Links */}
                <div
                  className="collapse navbar-collapse menu-ui-design"
                  id="navbar-menu"
                >
                  <ul
                    className="nav navbar-nav navbar-right"
                    data-in="fadeInDown"
                    data-out="fadeOutUp"
                  >
                    <li className="scroll active">
                      <a href="#home">home</a>
                    </li>
                    <li className="scroll">
                      <a href="#service">service</a>
                    </li>
                    <li className="scroll">
                      <a href="#featured-cars">featured cars</a>
                    </li>
                    <li className="scroll">
                      <a href="#new-cars">new cars</a>
                    </li>
                    <li className="scroll">
                      <a href="#brand">brands</a>
                    </li>
                    <li className="scroll">
                      <a href="#contact">contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* Navigation End */}
          </div>
        </div>
        {/* Welcome Text Section */}
        <div className="container">
          <div className="welcome-hero-txt">
            <h2>get your desired car in reasonable price</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className="welcome-btn"
              onClick={() => (window.location.href = "#")}
            >
              contact us
            </button>
          </div>
        </div>
        {/* Search Section */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="model-search-content">
                <div className="row">
                  {this.renderSearchColumn("select year", [
                    { value: "default", label: "year" },
                    { value: "2018", label: "2018" },
                    { value: "2017", label: "2017" },
                    { value: "2016", label: "2016" },
                  ])}
                  {this.renderSearchColumn("body style", [
                    { value: "default", label: "style" },
                    { value: "sedan", label: "sedan" },
                    { value: "van", label: "van" },
                    { value: "roadster", label: "roadster" },
                  ])}
                  {this.renderSearchColumn("select make", [
                    { value: "default", label: "make" },
                    { value: "toyota", label: "toyota" },
                    { value: "holden", label: "holden" },
                    { value: "maecedes-benz", label: "mercedes-benz" },
                  ])}
                  {this.renderSearchColumn("car condition", [
                    { value: "default", label: "condition" },
                    { value: "something", label: "something" },
                  ])}
                  {this.renderSearchColumn("select model", [
                    { value: "default", label: "model" },
                    { value: "kia-rio", label: "kia-rio" },
                    { value: "mitsubishi", label: "mitsubishi" },
                    { value: "ford", label: "ford" },
                  ])}
                  {this.renderSearchColumn("select price", [
                    { value: "default", label: "price" },
                    { value: "$0.00", label: "$0.00" },
                  ])}
                  <div className="col-md-2 col-sm-12">
                    <div className="single-model-search text-center">
                      <button
                        className="welcome-btn model-search-btn"
                        onClick={() => (window.location.href = "#")}
                      >
                        search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderSearchColumn(title, options) {
    return (
      <div className="col-md-offset-1 col-md-2 col-sm-12">
        <div className="single-model-search">
          <h2>{title}</h2>
          <div className="model-select-icon">
            <select className="form-control">
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeHero;
