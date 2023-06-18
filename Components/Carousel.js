import Image from 'next/image'
import * as FaIcons from "react-icons/fa"

export default function Carousel() {
  return (
    <div className="container-fluid mb-3 px-0">
        <div className="row">
            <div className="col px-0">
                <div id="header-carousel" className="carousel slide mb-30 mb-lg-0" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        {[1,2,3].map(i=>
                         <div key={i} className="carousel-item active" style={{height: "560px"}}>
                            <Image
                              style={{objectFit: "cover",position:"absolute"}}
                              src={`/assets/images/carousel_image_${i}.jpg`}
                              alt="Casa Laptop Logo"
                              width={1000} height={1000} priority
                            />
                            <div className="carousel-caption d-flex flex-column align-items-left justify-content-center">
                                <div className="p-3 mx-4 d-flex justiffy-content-left align-items-start flex-column" style={{maxWidth: "90%"}}>
                                    <h1 className="display-3 text-white text-start mb-3 animate__animated animate__fadeInDown">Best IPTV provider in the UK</h1>
                                    <p className="animate__animated animate__bounceIn text-left text-cap" style={{textTransform:'capitalize', fontSize:"22px"}}>Best IPTV provider in the UK Experience the future of television with Premier Tv Pro- where convenience, flexibility, and affordability meet to bring you the ultimate viewing experience.</p>
                                    <div className='row' style={{flexWrap: "nowrap !important", width: "fit-content",gap: "6px"}}>
                                       <a className="btn btn-primary py-2 px-1 mt-3 animate__animated animate__fadeInUp" href="#Plans">Get Started</a>
                                       <a className="btn btn-outline-light py-2 px-1 mt-3 animate__animated animate__fadeInUp" href="#Plans">Show Plan</a>
                                    </div>
                                    
                                </div>
                            </div>
                         </div>
                        )}
                    </div>
                    <button className="carousel-control-prev" style={{background: "none",border: "none"}} type="button" data-bs-target="#header-carousel" data-bs-slide="prev"></button>
                    <button className="carousel-control-next" style={{background: "none",border: "none"}} type="button" data-bs-target="#header-carousel" data-bs-slide="next"></button>
                </div>
            </div>
        </div>
    </div>
  )
}