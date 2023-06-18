"use client"
import React, {useContext, useEffect, useState} from 'react';
import Image from 'next/image'
import * as FaIcons from "react-icons/fa"
import DataContext from '../context/DataProvider';

export default function ChatBoxMenu() {

  const {StartingSoon, ChatBox, setChatBox} = useContext(DataContext);
  const [chatBoxDisplay, setchatBoxDisplay] = useState("d-none");


  const OpenChatBox = (e) =>{
    if(ChatBox==null) 
      setChatBox(true);
    else setChatBox(!ChatBox);
  }

  const Shared_Styles = {
    position: "fixed",
    display: "flex !important",
    width: "45px",
    height: "45px",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "23px !important",
    right:"30px",
    zIndex: "100",
    opacity: ".9"
  }

  const Styles = {
    chatBoxMenu: {
        width: "406px",
        height: "fit-content",
        position: "fixed !important",
        zIndex: "10000",
        bottom: "80px",
        right: "82px",
    },
    Whatsapp_btn:{
      ...Shared_Styles,
      background: "#06cb3ecc !important",
      borderColor: "#06cb3ecc !important",
      bottom: "130px",
    },
    btnChatBox:{
      ...Shared_Styles,
      background: "var(--primary) !important",
      borderColor: "var(--primary) !important",
      bottom: "80px",
    }
  }

  useEffect(() => {
     setchatBoxDisplay(
        ChatBox==null? "d-none": ChatBox==true? "animate__bounceIn":"animate__bounceOut"
     );
  }, [ChatBox]);

  return (
    StartingSoon? <></>:
    <>
    <a href="#" id="back-to-top" className="btn btn-primary back-to-top" style={Styles.btnChatBox}><FaIcons.FaAngleDoubleUp/></a>
    <a className="btn btn-primary btnChatBox" style={Styles.btnChatBox} onClick={OpenChatBox}>
      {ChatBox? <FaIcons.FaTimes/>:<FaIcons.FaEnvelopeOpen/>}
    </a>
    <a className="btn btn-primary" style={Styles.Whatsapp_btn} href="https://web.whatsapp.com/send?phone=%2B212695406152&text&app_absent=0">
      <FaIcons.FaWhatsapp/>
    </a> 
    <div className={`card animate__animated ${chatBoxDisplay}`} id="chat2" style={Styles.chatBoxMenu}>
        <div className="card-header d-flex justify-content-between align-items-center p-3">
          <h5 className="mb-0">Chat</h5>
          <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark">Let's Chat
            App</button>
        </div>
        <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "300px",overflowY: "scroll"}}>

          <div className="d-flex flex-row justify-content-start">
              <Image
               style={{objectFit: "contain", width:"45px", height: "100%"}}
               src="/assets/icons/male-user.png"
               alt="Casa Laptop Logo"
               width={180} height={70} priority/>
            <div>
              <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>Hi</p>
              <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>How are you ...???
              </p>
              <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>What are you doing
                tomorrow? Can we come up a bar?</p>
              <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
            </div>
          </div>
    
          <div className="divider d-flex align-items-center mb-4">
            <p className="text-center mx-3 mb-0" style={{color: "#a2aab7"}}>Today</p>
          </div>
    
          <div className="d-flex flex-row justify-content-end mb-4 pt-1">
            <div>
              <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Hiii, I'm good.</p>
              <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">How are you doing?</p>
              <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Long time no see! Tomorrow
                office. will
                be free on sunday.</p>
              <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:06</p>
            </div>
              <Image
               style={{objectFit: "contain", width:"45px", height: "100%"}}
               src="/assets/icons/male-user.png"
               alt="Casa Laptop Logo"
               width={180} height={70} priority/>
          </div>
        </div>
        <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
              <Image
               style={{objectFit: "contain", width:"45px", height: "100%"}}
               src="/assets/icons/male-user.png"
               alt="Casa Laptop Logo"
               width={180} height={70} priority/>
          <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
            placeholder="Type message"/>
          <a className="ms-1 text-muted" href="#!"><FaIcons.FaPaperclip/></a>
          <a className="ms-3 text-muted" href="#!"><FaIcons.FaSmile/></a>
          <a className="ms-3" href="#!"><FaIcons.FaPaperPlane/></a>
        </div>
    </div>
    </>
  )
}