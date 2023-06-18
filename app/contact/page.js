"use client"
import Image from 'next/image';
import * as FaIcons from "react-icons/fa";
import Breadcrumb from "../../Components/Breadcrumb";
import { useState } from 'react';

export default function Contact() {

  const [Counter, setCounter] = useState(1);

  const Sections_styles = {
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };

  return (
    <>
     <Breadcrumb current_page="Contact Us"/>
     <div className="container-fluid">
         <h2 className="position-relative text-uppercase mx-xl-5 mb-4 d-flex align-items-center gap-2"><span className="pr-3"><FaIcons.FaPhoneAlt/> Contact Us</span></h2>
         <div className="row px-xl-5">
             <div className="col-lg-7 mb-5">
                 <div className="contact-form bg-light p-30" style={Sections_styles}>
                     <div id="success"></div>
                     <form name="sentMessage" id="contactForm" novalidate="novalidate">
                         <div className="control-group">
                              <div className="input-group">
                                <span className="input-group-text rounded-0"><FaIcons.FaUserAlt/></span>
                                <input type="text" className="form-control" id="name" placeholder="Your Name"
                                 required="required" data-validation-required-message="Please enter your name" />
                              </div>
                             <p className="help-block text-danger"></p>
                         </div>
                         <div className="control-group">
                              <div className="input-group">
                                <span className="input-group-text rounded-0"><FaIcons.FaEnvelope/></span>
                                <input type="email" className="form-control" id="email" placeholder="Your Email"
                                 required="required" data-validation-required-message="Please enter your email" />
                              </div>
                             <p className="help-block text-danger"></p>
                         </div>
                         <div className="control-group">
                              <div className="input-group">
                                <span className="input-group-text rounded-0"><FaIcons.FaPhoneAlt/></span>
                                <input type="phone" maxLength={10} className="form-control" id="phone" placeholder="Your Phone Number"
                                 required="required" data-validation-required-message="Please enter your Phone Number" />
                              </div>
                             <p className="help-block text-danger"></p>
                         </div>
                         <div className="control-group">
                          <div className="input-group">
                                <span className="input-group-text rounded-0"><FaIcons.FaFileAlt/></span>
                                <input type="text" className="form-control" id="subject" placeholder="Subject"
                                 required="required" data-validation-required-message="Please enter a subject" />
                              </div>
                             <p className="help-block text-danger"></p>
                         </div>
                         <div className="control-group">
                             <textarea className="form-control" rows="8" id="message" placeholder="Message"
                                 required="required"
                                 data-validation-required-message="Please enter your message"></textarea>
                             <p className="help-block text-danger"></p>
                         </div>
                         <div>
                            <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">
                             Send Message
                            </button>
                         </div>
                     </form>
                 </div>
             </div>
             <div className="col-lg-5 mb-5">
                 <div className="bg-light p-30 mb-30" style={Sections_styles}>
                     <iframe style={{width: "100%;" ,height: "250px",border:"0"}}
                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26600.99336895932!2d-7.4876285!3d33.55015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda634d980500425%3A0x9e5145b4e8c2337d!2sTit%20Mellil!5e0!3m2!1sen!2sma!4v1681605840741!5m2!1sen!2sma"
                     frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                 </div>
                 <div className="bg-light p-30 mb-3" style={Sections_styles}>
                     <p className="mb-2"><a href="/"><FaIcons.FaMapMarkedAlt className='mr-3' style={{color:"#01bcd4 !important;"}}/> Mediouna Tit Melil, Casablanca</a></p>
                     <p className="mb-2"><a href="/"><FaIcons.FaEnvelope className='mr-3' style={{color:"#01bcd4 !important;"}}/> contact@laptopcasa.com</a></p>
                     <p className="mb-2"><a href="/"><FaIcons.FaPhoneAlt className='mr-3' style={{color:"#01bcd4 !important;"}}/> +212 6 95 40 61 52</a></p>
                     <p className="mb-2"><a href="/"><FaIcons.FaWhatsapp className='mr-3' style={{color:"#01bcd4 !important;"}}/> +212 6 95 40 61 52</a></p>
                 </div>
             </div>
         </div>
     </div>
    </>
  )
}