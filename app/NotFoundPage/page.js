"use client"
import * as biIcons from "react-icons/bi"
import Breadcrumb from "../../Components/Breadcrumb"

export default function NotFoundPage() {

  return (
    <>
     <Breadcrumb current_page="Page Not Found 404"/>
     <div className="container-xxl py-5 pt-1 wow fadeInUp" data-wow-delay="0.1s">
         <div className="container text-center">
             <div className="row justify-content-center">
                 <div className="col-lg-6">
                     <biIcons.BiError style={{color:"#00bcd5;",fontSize:"200px"}}/>
                     <h1 className="display-1">404</h1>
                     <h1 className="mb-4">Page Not Found</h1>
                     <p className="mb-4">We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                     <a className="btn btn-primary rounded-pill py-3 px-5" href="">Go Back To Home</a>
                 </div>
             </div>
         </div>
     </div>
    </>
  )
}