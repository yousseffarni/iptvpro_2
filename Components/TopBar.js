"use client"
import React, {useState,useEffect,useContext} from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import * as FaIcons from "react-icons/fa"
import DataContext from '../context/DataProvider';
import Image_icon from './Image_icon';


export default function TopBar() {

    const { data: session } = useSession();
    const {
        Currency,setCurrency,
        Lang,setLang,
        DarkMode,setDarkMode,
        ChoppingCart,StartingSoon
    } = useContext(DataContext);

    //if(StartingSoon) return (<div></div>);

    //const router = useRouter();

    const [SelectedLangImage, setSelectedLangImage] = useState("Usa icon.png");
    const [ThemeModeImage, setThemeModeImage] = useState("Sun icon.png");

    const Dropdown_styles = {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    };

    const ChangeCurrency = (e) =>{
        e.preventDefault();
        setCurrency(e.target.value);
    } 

    const ChangeTheme = (e) =>{
        e.preventDefault();
        setDarkMode(!DarkMode);
    } 

    const ChangeLang = (e) => {
        e.preventDefault();
        const Language = e.target.value;
        const Path = document.location.pathname;
        setLang(Language);
        switch(Language){
            case "FR": case "AR": 
             const lang_txt = Language.toLowerCase();
             if(!Path.split('/').includes(lang_txt)){
                //router.push(`/${lang_txt}`); 
             }
            break;
            default: //router.push('/');
        }
    }

    useEffect(() => {
        const Image = Lang=="AR"? "morocco-flag.png":
                      Lang=="FR"? "france-flag.png":"great-britain-flag.png";
        setSelectedLangImage(Image);

        setThemeModeImage(
            DarkMode? "Sun icon.png":"Moon Symbol icon.png"
        );

    }, [Lang,DarkMode]);


    const ThemeBtnStyle = {
        objectFit: "contain",
        filter: DarkMode? "":"brightness(0.5)"
    }

    return (
        StartingSoon? <></>:
        <div className="container-fluid">
            <div className="row bg-secondary py-1 px-xl-5" style={{background: (DarkMode? "#242424 !important":"#ebebeb !important")}}>
                <div className="col-lg-6 d-none d-lg-block">
                    <div className="d-inline-flex align-items-center h-100">
                        <a className="text-body mr-3" style={{color:"gray !important"}} href="/about"><FaIcons.FaInfoCircle/> About</a>
                        <a className="text-body mr-3" style={{color:"gray !important"}} href="/contact"><FaIcons.FaPhoneAlt/> Contact</a>
                        <a className="text-body mr-3" style={{color:"gray !important"}} href="/help"><FaIcons.FaUserTie/> Help</a>
                        <a className="text-body mr-3" style={{color:"gray !important"}} href="/faqs"><FaIcons.FaFileContract/> FAQs</a>
                    </div>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center w-100 justify-content-end">
                        <div className="btn-group mx-2">
                            <button type="button" style={{background:"none !important", border:"none !important"}} className="btn btn-sm btn-light dropdown-toggle" data-bs-toggle="dropdown">{Currency}</button>
                            <div id='Price_dropdown' className="dropdownMenu dropdown-menu position-absolute dropdown-menu-right rounded-0 border-0 m-0" style={Dropdown_styles}>
                                <button className="dropdown-item" value="MAD" onClick={ChangeCurrency} type="button">MAD</button>
                                <button className="dropdown-item" value="EUR" onClick={ChangeCurrency} type="button">EUR</button>
                                <button className="dropdown-item" value="USD" onClick={ChangeCurrency} type="button">USD</button>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button type="button" style={{background:"none !important", border:"none !important"}} className="btn btn-sm btn-light dropdown-toggle" data-bs-toggle="dropdown">
                                <Image_icon Image={`/assets/icons/${SelectedLangImage}`}/>
                                {Lang}
                            </button>
                            <div id='Lang_dropdown' className="dropdown-menu position-absolute dropdown-menu-right rounded-0 border-0 m-0" style={Dropdown_styles}>
                                <button className="dropdown-item" value="EN" onClick={ChangeLang} type="button">
                                <Image_icon Image="/assets/icons/great-britain-flag.png"/>EN
                                </button>
                                <button className="dropdown-item" value="FR" onClick={ChangeLang} type="button">
                                <Image_icon Image="/assets/icons/france-flag.png"/>FR
                                </button>
                                <button className="dropdown-item" value="AR" onClick={ChangeLang} type="button">
                                <Image_icon Image="/assets/icons/morocco-flag.png"/>AR
                                </button>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-light" onClick={ChangeTheme} data-bs-toggle="dropdown" style={{background:"none !important", border:"none !important"}}>
                             <Image_icon styles={ThemeBtnStyle} Image={`/assets/icons/${ThemeModeImage}`}/>
                            </button>
                        </div>
                        <div className="btn-group">
                            {session? "Signed in as"+ session.user.email : ""}
                            <button type="button" className="btn btn-sm btn-light" data-bs-toggle="dropdown" style={{background:"none !important", border:"none !important"}}><FaIcons.FaUserCircle  style={{fontSize:"20px", color:"gray"}}/></button>
                            <div id='Login_dropdown' className="dropdownMenu dropdown-menu position-absolute dropdown-menu-right rounded-0 border-0 m-0" style={Dropdown_styles}>
                                <button className="dropdown-item" type="button"><FaIcons.FaSignInAlt/> Sign in</button>
                                <button className="dropdown-item" type="button"><FaIcons.FaUserPlus /> Sign up</button>
                                <button className="dropdown-item" type="button" onClick={signIn}><FaIcons.FaSignInAlt/> Sign in with google</button>
                                <button className="dropdown-item" type="button" onClick={signOut}><FaIcons.FaTimes/> Sign out</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-inline-flex align-items-center d-block d-lg-none">
                        <a href="" className="btn px-0 ml-2">
                            <FaIcons.FaHeart/>
                            <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                        </a>
                        <a href="" className="btn px-0 ml-2">
                            <FaIcons.FaShoppingCart/>
                            <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: "2px"}}>{ChoppingCart.length}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>  
    )
}