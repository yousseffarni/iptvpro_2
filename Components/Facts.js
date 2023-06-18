import Image from 'next/image'
import * as FaIcons from "react-icons/fa"

export default function Facts() {
  return (
    <div className="container-fluid pt-5">
        <div className="container-xxl bg-light py-5 my-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-4 text-center wow fadeIn" data-wow-delay="0.1s">
                        <img className="img-fluid mb-4" src="img/icon-9.png" alt=""/>
                        <h1 className="display-4" data-toggle="counter-up">99%</h1>
                        <p className="fs-5 text-primary mb-0">UPTIME GUARANTEE</p>
                    </div>
                    <div className="col-lg-4 col-md-4 text-center wow fadeIn" data-wow-delay="0.3s">
                        <img className="img-fluid mb-4" src="img/icon-10.png" alt=""/>
                        <h1 className="display-4" data-toggle="counter-up">25GB</h1>
                        <p className="fs-5 text-primary mb-0">BANDWIDTH CAPACITY</p>
                    </div>
                    <div className="col-lg-4 col-md-4 text-center wow fadeIn" data-wow-delay="0.5s">
                        <img className="img-fluid mb-4" src="img/icon-2.png" alt=""/>
                        <h1 className="display-4" data-toggle="counter-up">9</h1>
                        <p className="fs-5 text-primary mb-0">YEARS OF EXPERIENCE</p>
                    </div>
                    <div className="col-lg-4 col-md-4 text-center wow fadeIn" data-wow-delay="0.5s">
                        <img className="img-fluid mb-4" src="img/icon-2.png" alt=""/>
                        <h1 className="display-4" data-toggle="counter-up">56+</h1>
                        <p className="fs-5 text-primary mb-0">POINT OF PRESENCE</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}