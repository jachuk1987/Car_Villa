import React, { Component } from "react";

class ServiceSection extends Component {
  render() {
    return (
      <section id="service" className="service">
        <div className="container">
          <div className="service-content">
            <div className="row">
              {/* Service Item 1 */}
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    <i className="flaticon-car"></i>
                  </div>
                  <h2>
                    <a href="#">largest dealership <span>of</span> car</a>
                  </h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.
                  </p>
                </div>
              </div>

              {/* Service Item 2 */}
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    <i className="flaticon-car-repair"></i>
                  </div>
                  <h2>
                    <a href="#">unlimited repair warrenty</a>
                  </h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.
                  </p>
                </div>
              </div>

              {/* Service Item 3 */}
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    <i className="flaticon-car-1"></i>
                  </div>
                  <h2>
                    <a href="#">insurance support</a>
                  </h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServiceSection;
