"use client"
import React, {useContext} from 'react';
import Link from "next/link"
import Image from 'next/image'
import * as FaIcons from "react-icons/fa"
import DataContext from '../context/DataProvider';

export default function Footer() {

  const {StartingSoon} = useContext(DataContext);
  //if(StartingSoon) return (<div></div>);

  return (
    StartingSoon? <></>:
    <div className="footer container-fluid bg-dark text-white mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <h5 className="text-white text-uppercase mb-3">Get In Touch</h5>
                <div className='pb-2'>
                 <Link href="/" className="text-decoration-none">
                   <Image
                     style={{objectFit: "contain"}}
                     src="/assets/iptvpro_logo_dark.png"
                     alt="Casa Laptop Logo"
                     width={200} height={90} priority/>
                 </Link>
                </div>
                <p className="mb-4">We provide more than 54,000 channels, 50,000+ movies, and TV series without freezes in 4K/FHD/HD/SD quality.</p>
                <p className="mb-2"><a className='d-flex align-items-center gap-2' href="/"><FaIcons.FaMapMarkerAlt/>  Tit Melil, Casablanca</a></p>
                <p className="mb-2"><a className='d-flex align-items-center gap-2' href="/"><FaIcons.FaEnvelope/>  contact@iptvpro.uk</a></p>
                <p className="mb-0"><a className='d-flex align-items-center gap-2' href="/"><FaIcons.FaPhoneAlt/>  +212 6 95 40 61 52</a></p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="text-white text-uppercase mb-4">Services</h5>
                        <ul className="d-flex flex-column justify-content-start">
                            <li><a className="text-white mb-2" href="#"><FaIcons.FaAngleRight/>Home</a></li>
                            <li><a className="text-white mb-2" href="#"><FaIcons.FaAngleRight/>Our Shop</a></li>
                            <li><a className="text-white mb-2" href="#"><FaIcons.FaAngleRight/>Shop Detail</a></li>
                            <li><a className="text-white mb-2" href="#"><FaIcons.FaAngleRight/>Shopping Cart</a></li>
                            <li><a className="text-white mb-2" href="#"><FaIcons.FaAngleRight/>Checkout</a></li>
                            <li><a className="text-white" href="#"><FaIcons.FaAngleRight/>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-white text-uppercase mb-4">Navigation</h5>
                        <ul className="d-flex flex-column justify-content-start">
                            <li><Link className="text-white mb-2" href="/Home"><FaIcons.FaHome/> Home</Link></li>
                            <li><Link className="text-white mb-2" href="/services"><FaIcons.FaShoppingBag/> Our Shop</Link></li>
                            <li><Link className="text-white mb-2" href="/cart"><FaIcons.FaShoppingCart/> Shopping Cart</Link></li>
                            <li><Link className="text-white mb-2" href="/Checkout"><FaIcons.FaMoneyCheck/> Checkout</Link></li>
                            <li><Link className="text-white" href="/contact"><FaIcons.FaPhoneAlt/> Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-white text-uppercase mb-4">Newsletter</h5>
                        <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email Address"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" style={{color:"white"}}>Sign Up</button>
                                </div>
                            </div>
                        </form>
                        <h6 className="text-white text-uppercase mt-4 mb-3">Follow Us</h6>
                        <div className="d-flex">
                            <a className="btn btn-primary btn-square mr-2" href="https://web.whatsapp.com/send?phone=%2B212695406152&text&app_absent=0"><FaIcons.FaWhatsapp style={{color:"white"}}/></a>
                            <a className="btn btn-primary btn-square mr-2" href="https://www.facebook.com/casalaptop.store"><FaIcons.FaFacebook style={{color:"white"}}/></a>
                            <a className="btn btn-primary btn-square mr-2" href="https://goo.gl/maps/e1cipMu7hketpupn9"><FaIcons.FaLocationArrow style={{color:"white"}}/></a>
                            <a className="btn btn-primary btn-square mr-2" href="https://www.instagram.com/casalaptop/"><FaIcons.FaInstagram style={{color:"white"}}/></a>
                            <a className="btn btn-primary btn-square" href="mailto:contact@laptopcasa.com"><FaIcons.FaEnvelope style={{color:"white"}}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row border-top mx-xl-5 py-4" style={{borderColor: "rgba(256, 256, 256, .1) !important"}}>
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left text-white">
                    &copy; <a href="/">IPTV PRO</a>. All Rights Reserved. Developed by
                    <a href="https://youssef-farni.com"> Youssef Farni</a>
                </p>
            </div>
            <div className="col-md-6 px-xl-0 text-center text-md-right">
                <Image className="img-fluid" width={300} height={70} src="/assets/images/payments.png" alt=""/>
            </div>
        </div>
    </div>
  )
}