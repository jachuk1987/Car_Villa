import React, { Component } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

class ClientsSay extends Component {
  render() {
    const testimonials = [
      {
        imgSrc: "/assets/images/clients/c1.png",
        comment:
          "Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
        name: "Tomas Lili",
        location: "New York",
      },
      {
        imgSrc: "/assets/images/clients/c2.png",
        comment:
          "Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
        name: "Romi Rain",
        location: "London",
      },
      {
        imgSrc: "/assets/images/clients/c3.png",
        comment:
          "Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
        name: "John Doe",
        location: "Washington",
      },
    ];

    const carouselOptions = {
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplay: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
      },
    };

    return (
      <section id="clients-say" className="clients-say">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
          </div>
          <div className="row">
            <OwlCarousel
              className="owl-carousel testimonial-carousel"
              {...carouselOptions}
            >
              {testimonials.map((testimonial, index) => (
                <div className="col-sm-3 col-xs-12" key={index}>
                  <div className="single-testimonial-box">
                    <div className="testimonial-description">
                      <div className="testimonial-info">
                        <div className="testimonial-img">
                          <img
                            src={testimonial.imgSrc}
                            alt={`Image of ${testimonial.name}`}
                          />
                        </div>
                      </div>
                      <div className="testimonial-comment">
                        <p>{testimonial.comment}</p>
                      </div>
                      <div className="testimonial-person">
                        <h2>
                          <a href="#">{testimonial.name}</a>
                        </h2>
                        <h4>{testimonial.location}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}

export default ClientsSay;
