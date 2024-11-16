import React, { Component } from "react";

class FeaturedCars extends Component {
  render() {
    const carsData = [
      {
        img: "fc1.png",
        model: "2017",
        mileage: "3100 mi",
        horsepower: "240HP",
        transmission: "automatic",
        title: "BMW 6-series gran coupe",
        price: "$89,395",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      },
      {
        img: "fc2.png",
        model: "2017",
        mileage: "3100 mi",
        horsepower: "240HP",
        transmission: "automatic",
        title: "chevrolet camaro wmv20",
        price: "$66,575",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      },
      {
        img: "fc3.png",
        model: "2017",
        mileage: "3100 mi",
        horsepower: "240HP",
        transmission: "automatic",
        title: "lamborghini v520",
        price: "$125,250",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      },
      {
        img: "fc4.png",
        model: "2017",
        mileage: "3100 mi",
        horsepower: "240HP",
        transmission: "automatic",
        title: "audi a3 sedan",
        price: "$95,500",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      },
      {
        img: "fc4.png",
        model: "2017",
        mileage: "3100 mi",
        horsepower: "240HP",
        transmission: "automatic",
        title: "infiniti z5",
        price: "$36,850",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      },
      {
        img: "fc5.png",
        model: "2017",
        mileage: "3100 mi",
        horsepower: "240HP",
        transmission: "automatic",
        title: "porsche 718 cayman",
        price: "$48,500",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      },
      {
        img: "fc7.png",
        model: "2017",
        mileage: "3100 mi",
        horsepower: "240HP",
        transmission: "automatic",
        title: "bmw 8-series coupe",
        price: "$56,000",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      },
      {
        img: "fc8.png",
        model: "2017",
        mileage: "3100 mi",
        horsepower: "240HP",
        transmission: "automatic",
        title: "BMW xseries-6",
        price: "$75,800",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      },
    ];

    return (
      <section id="featured-cars" className="featured-cars">
        <div className="container">
          <div className="section-header">
            <p>
              checkout <span>the</span> featured cars
            </p>
            <h2>featured cars</h2>
          </div>
          <div className="featured-cars-content">
            <div className="row">
              {carsData.map((car, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <div className="single-featured-cars">
                    <div className="featured-img-box">
                      <div className="featured-cars-img">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/featured-cars/${car.img}`}
                          alt={car.title}
                        />
                      </div>
                      <div className="featured-model-info">
                        <p>
                          model: {car.model}
                          <span className="featured-mi-span"> {car.mileage}</span>
                          <span className="featured-hp-span"> {car.horsepower}</span>{" "}
                          {car.transmission}
                        </p>
                      </div>
                    </div>
                    <div className="featured-cars-txt">
                      <h2>
                        <a href="#">{car.title}</a>
                      </h2>
                      <h3>{car.price}</h3>
                      <p>{car.description}</p>
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

export default FeaturedCars;
