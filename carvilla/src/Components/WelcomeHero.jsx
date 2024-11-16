import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css'; // Include your custom styles

class WelcomeHero extends Component {
  render() {
    return (
      <section id="home" className="welcome-hero">
        {/* Top Area */}
        <div className="top-area">
          <div className="header-area">
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

                {/* Navbar Menu */}
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
          </div>
        </div>

        {/* Welcome Hero Text */}
        <div className="container">
          <div className="welcome-hero-txt">
            <h2>Get your desired car at a reasonable price</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className="welcome-btn"
              onClick={() => window.location.href = '#'}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Search Filters */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="model-search-content">
                <div className="row">
                  {/* Filter Options */}
                  {this.renderFilterOption("Select Year", ["Year", "2018", "2017", "2016"])}
                  {this.renderFilterOption("Body Style", ["Style", "Sedan", "Van", "Roadster"])}
                  {this.renderFilterOption("Select Make", ["Make", "Toyota", "Holden", "Mercedes-Benz"])}
                  {this.renderFilterOption("Car Condition", ["Condition", "New", "Used", "Certified"])}
                  {this.renderFilterOption("Select Model", ["Model", "Kia Rio", "Mitsubishi", "Ford"])}
                  {this.renderFilterOption("Select Price", ["Price", "$0.00", "$10,000", "$20,000"])}

                  {/* Search Button */}
                  <div className="col-md-2 col-sm-12">
                    <div className="single-model-search text-center">
                      <button
                        className="welcome-btn model-search-btn"
                        onClick={() => window.location.href = '#'}
                      >
                        Search
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

  // Helper function to render filter options
  renderFilterOption(label, options) {
    return (
      <div className="col-md-offset-1 col-md-2 col-sm-12">
        <div className="single-model-search">
          <h2>{label}</h2>
          <div className="model-select-icon">
            <select className="form-control">
              {options.map((option, index) => (
                <option
                  value={option.toLowerCase().replace(" ", "-")}
                  key={index}
                >
                  {option}
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
