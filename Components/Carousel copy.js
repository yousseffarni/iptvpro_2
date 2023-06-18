import Image from 'next/image'
import * as FaIcons from "react-icons/fa"

export default function Carousel() {
  return (
    <div id="Main_carousel" className="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#Main_carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#Main_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#Main_carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{height:"490px"}}>
          <Image
            className="d-block w-100"
            src="/assets/images/carousel-1.webp"
            alt=""
            width={1500} height={500} priority
            style={{width: "100%", objectFit: "cover"}}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(0, 0, 0, .4)"}}>
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                        <h5 className="text-white text-uppercase mb-3 animate__animated animate__slideInDown">Plumbing & Repairing Services</h5>
                        <h1 className="display-3 text-white animate__animated animate__slideInDown mb-4">Efficient Commercial Plumbing Services</h1>
                        <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                        <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animate__animated animate__slideInLeft" style={{background:"#3b4e78 !important",borderRadius:"0px",borderColor:"#3b4e78 !important"}}>Read More</a>
                        <a href="" className="btn btn-secondary py-md-3 px-md-5 animate__animated animate__slideInRight" style={{background:"#bf2637 !important",borderRadius:"0px",borderColor:"#bf2637 !important"}}>Free Quote</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{height:"490px"}}>
          <Image
              className="d-block w-100"
              src="/assets/images/carousel-2.webp"
              alt=""
              width={1500} height={500} priority
              style={{width: "100%", objectFit: "cover"}}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(0, 0, 0, .4)"}}>
              <div className="container">
                  <div className="row justify-content-start">
                      <div className="col-10 col-lg-8">
                          <h5 className="text-white text-uppercase mb-3 animate__animated animate__slideInDown">Plumbing & Repairing Services</h5>
                          <h1 className="display-3 text-white animate__animated animate__slideInDown mb-4">Efficient Commercial Plumbing Services</h1>
                          <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                          <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animate__animated animate__slideInLeft" style={{background:"#3b4e78 !important",borderRadius:"0px",borderColor:"#3b4e78 !important"}}>Read More</a>
                          <a href="" className="btn btn-secondary py-md-3 px-md-5 animate__animated animate__slideInRight" style={{background:"#bf2637 !important",borderRadius:"0px",borderColor:"#bf2637 !important"}}>Free Quote</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="carousel-item" style={{height:"490px"}}>
          <Image
              className="d-block w-100"
              src="/assets/images/carousel-3.webp"
              alt=""
              width={1500} height={500} priority
              style={{width: "100%", objectFit: "cover"}}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(0, 0, 0, .4)"}}>
              <div className="container">
                  <div className="row justify-content-start">
                      <div className="col-10 col-lg-8">
                          <h5 className="text-white text-uppercase mb-3 animate__animated animate__slideInDown">Plumbing & Repairing Services</h5>
                          <h1 className="display-3 text-white animate__animated animate__slideInDown mb-4">Efficient Commercial Plumbing Services</h1>
                          <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                          <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animate__animated animate__slideInLeft" style={{background:"#3b4e78 !important",borderRadius:"0px",borderColor:"#3b4e78 !important"}}>Read More</a>
                          <a href="" className="btn btn-secondary py-md-3 px-md-5 animate__animated animate__slideInRight" style={{background:"#bf2637 !important",borderRadius:"0px",borderColor:"#bf2637 !important"}}>Free Quote</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#Main_carousel" data-bs-slide="prev">
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#Main_carousel" data-bs-slide="next">
      </button>
    </div>
  )
}