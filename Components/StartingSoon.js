"use client"
"use client"
import React, {useEffect,useContext} from 'react';
import Image from 'next/image'
import * as FaIcons from "react-icons/fa"
import DataContext from '../context/DataProvider';

export default function StartingSoon() {

  const {StartingSoonPage, setStartingSoonPage} = useContext(DataContext);

  useEffect(() => {
    setStartingSoonPage(true);
}, []);

  return (
    <div style={{display: "flex",flexDirection: "column",gap: "57px", alignItems: "center", width: "100%"}}>
      <a href="" className="text-decoration-none animate__animated animate__rubberBand">
        <Image
          style={{objectFit: "contain"}}
          src="/assets/Casa Laptop Logo.png"
          alt="Casa Laptop Logo"
          width={1000} height={90} priority
        />
      </a>
      <div style={{display: "flex",flexDirection: "column", flexWrap: "wrap",alignItems: "center",gap: "4px"}}>
        <h5 className='animate__animated animate__rubberBand animate__delay-1s'>Thank you for visiting <a href="/">Casa Laptop</a></h5>
        <p className='animate__animated animate__bounceIn animate__delay-2s'>We will be celebrating the launch of our new site very soon...</p>
        <ul id='social_links'>
          <li className='animate__animated animate__tada animate__delay-1s' id='icon_fb'><FaIcons.FaFacebook/> <a href="https://web.facebook.com/casalaptop.store/">casalaptop.store</a></li>
          <li className='animate__animated animate__tada animate__delay-2s' id='icon_Wp'><FaIcons.FaWhatsapp/> <a href="https://web.whatsapp.com/send?phone=%2B212695406152&text&app_absent=0">casalaptop</a></li>
          <li className='animate__animated animate__tada animate__delay-3s' id='icon_Ig'><FaIcons.FaInstagram/> <a href="https://www.instagram.com/casalaptop/">casalaptop</a></li>
          <li className='animate__animated animate__tada animate__delay-4s' id='icon_Phone'><FaIcons.FaPhoneAlt/> <a href="/">+212 6 95 40 61 52</a></li>
          <li className='animate__animated animate__tada animate__delay-5s' id='icon_Email'><FaIcons.FaEnvelopeOpenText/> <a href="mailto:contact@laptopcasa.com">contact@laptopcasa.com</a></li>
          <li className='animate__animated animate__tada animate__delay-5s' id='icon_map'><FaIcons.FaLocationArrow/> <a href="https://goo.gl/maps/e1cipMu7hketpupn9">Tit Melil, Casablanca</a></li>
        </ul>
      </div>
    </div>
  )
}