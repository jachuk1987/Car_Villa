import React, { Component } from "react";

class NewCars extends Component {
  render() {
    return (
      <section id="new-cars" className="new-cars">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <p>
              checkout <span>the</span> latest cars
            </p>
            <h2>newest cars</h2>
          </div>
          {/* New Cars Content */}
          <div className="new-cars-content">
            {/* Carousel */}
            <div className="owl-carousel owl-theme" id="new-cars-carousel">
              {/* Car 1 */}
              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/new-cars-model/ncm1.png`}
                          alt="Chevrolet Camaro"
                        />
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2>
                          <a href="#">chevrolet camaro <span>za100</span></a>
                        </h2>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                        <p className="new-cars-para2">
                          Sed ut pers unde omnis iste natus error sit voluptatem
                          accusantium doloremque laudantium.
                        </p>
                        <button
                          className="welcome-btn new-cars-btn"
                          onClick={() => (window.location.href = "#")}
                        >
                          view details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Car 2 */}
              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/new-cars-model/ncm2.png`}
                          alt="BMW Series 3"
                        />
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2>
                          <a href="#">BMW series-3 wagon</a>
                        </h2>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                        <p className="new-cars-para2">
                          Sed ut pers unde omnis iste natus error sit voluptatem
                          accusantium doloremque laudantium.
                        </p>
                        <button
                          className="welcome-btn new-cars-btn"
                          onClick={() => (window.location.href = "#")}
                        >
                          view details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Car 3 */}
              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/new-cars-model/ncm3.png`}
                          alt="Ferrari 488"
                        />
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2>
                          <a href="#">ferrari 488 superfast</a>
                        </h2>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                        <p className="new-cars-para2">
                          Sed ut pers unde omnis iste natus error sit voluptatem
                          accusantium doloremque laudantium.
                        </p>
                        <button
                          className="welcome-btn new-cars-btn"
                          onClick={() => (window.location.href = "#")}
                        >
                          view details
                        </button>
                      </div>
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
}

export default NewCars;