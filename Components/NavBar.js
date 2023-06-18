"use client"
import React, {useContext} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import * as FaIcons from "react-icons/fa"
import Image_icon from './Image_icon'
import DataContext from '../context/DataProvider';

export default function NavBar() {

  const {StartingSoon, DarkMode} = useContext(DataContext);

  return (
    StartingSoon? <></>:
    <div className="container-fluid bg-dark sticky-top shadow" style={{background: "#000000a1 !important",    backdropFilter: "blur(4px)"}}>
        <div className="row px-xl-5">
            <div className="col-lg-2 d-none d-lg-block">
              <a href="/" className="text-decoration-none">
                <Image
                  style={{objectFit: "contain"}}
                  src={`/assets/iptvpro_logo_dark.png`}
                  alt="IPTV PRO Logo"
                  width={180} height={70} prioity
                />
              </a>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg navbar-dark py-3 py-lg-0 px-0">
                    <Link href="" className="text-decoration-none d-block d-lg-none">
                      <Image
                        style={{objectFit: "contain"}}
                        src="/assets/iptvpro_logo_dark.png"
                        alt="IPTV PRO Logo"
                        width={180} height={70} priority
                      />
                    </Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link href="/" className="nav-item nav-link d-flex align-items-center gap-2 active"><FaIcons.FaHome/> Home</Link>
                            <Link href="/shop" className="nav-item d-flex align-items-center gap-2 nav-link"><FaIcons.FaTv/> Channels List</Link>
                            <Link href="/about" className="nav-item d-flex align-items-center gap-2 nav-link"><FaIcons.FaFileAlt/> FAQS </Link>
                            <Link href="/about" className="nav-item d-flex align-items-center gap-2 nav-link"><FaIcons.FaInfoCircle/> About </Link>
                            <Link href="/contact" className="nav-item nav-link d-flex align-items-center gap-2"><FaIcons.FaPhoneAlt/> Contact</Link>
                        </div>
                        <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                            <Link href="/cart" className="btn px-0 ml-3" style={{color: "#01bcd4 !important"}}>
                                <FaIcons.FaShoppingCart/>
                                <span className="badge text-secondary border border-secondary rounded-circle" style={{marginLeft: "5px !important"}}>0</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}