import React from 'react'
import './aboutstyle.css'
import img1 from '../assets/download (2).jpg'
import img2 from '../assets/16354070066.jpg'
import img3 from '../assets/download (1).jpg'
import img4 from '../assets/download (3).jpg'

const About = () => {
  return (
    <div>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn images"
                  data-wow-delay="0.1s"
                  src={img3} width="300px"
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn images"
                  data-wow-delay="0.3s"
                  src={img2} width="300px"
                  style={{ marginTop: "25%" }}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn images"
                  data-wow-delay="0.5s"
                  src={img2} width="300px"
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-100 wow zoomIn images"
                  data-wow-delay="0.7s" width="300px"
                  src={img3}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 new">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">
            </h5>
            <h1 className="mb-4">
              Welcome to <i className="fa fa-utensils text-primary me-2" />
              Le Festin Exquis
            </h1>
            <p className="mb-4">
            Embark on a gastronomic journey that redefines convenience with a touch of sophistication. Immerse yourself in a realm where epicurean delights are not just sustenance, but an expression of refined taste. 
            </p>
            <p className="mb-4">
            From the comfort of your abode, indulge in a symphony of flavors meticulously prepared by masterful artisans of the culinary craft.
        
            </p>
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1
                    className="flex-shrink-0 display-5 text-primary mb-0"
                    data-toggle="counter-up"
                  >
                    5
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0">Experience</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1
                    className="flex-shrink-0 display-5 text-primary mb-0"
                    data-toggle="counter-up">
                  
                    100+
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Popular</p>
                    <h6 className="text-uppercase mb-0">Restaurant</h6>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
  
    </div>
  )
}

export default About
