import React, { Component } from "react";


class NewCars extends Component {
  render() {
    // Array of car details to dynamically render items
    const carItems = [
      {
        id: 1,
        title: "Chevrolet Camaro ZA100",
        description1:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description2:
          "Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        image: "/assets/images/new-cars-model/ncm1.png",
      },
      {
        id: 2,
        title: "BMW Series-3 Wagon",
        description1:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description2:
          "Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        image: "/assets/images/new-cars-model/ncm2.png",
      },
      {
        id: 3,
        title: "Ferrari 488 Superfast",
        description1:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        description2:
          "Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        image: "/assets/images/new-cars-model/ncm3.png",
      },
    ];

    return (
      <section id="new-cars" className="new-cars">
        <div className="container">
          <div className="section-header">
            <p>
              checkout <span>the</span> latest cars
            </p>
            <h2>newest cars</h2>
          </div>
          <div className="new-cars-content">
            <div className="owl-carousel owl-theme" id="new-cars-carousel">
              {carItems.map((car) => (
                <div key={car.id} className="new-cars-item">
                  <div className="single-new-cars-item">
                    <div className="row">
                      <div className="col-md-7 col-sm-12">
                        <div className="new-cars-img">
                          <img src={car.image} alt={car.title} />
                        </div>
                      </div>
                      <div className="col-md-5 col-sm-12">
                        <div className="new-cars-txt">
                          <h2>
                            <a href="#">{car.title}</a>
                          </h2>
                          <p>{car.description1}</p>
                          <p className="new-cars-para2">{car.description2}</p>
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
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NewCars;
