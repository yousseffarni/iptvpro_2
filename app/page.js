import { Inter } from 'next/font/google'
import Carousel from "../Components/Carousel"
import Subscriptions from "../Components/Subscriptions"
import Cards_Slider from "../Components/Cards_Slider"
import Facts from "../Components/Facts"
import Testimonials from '../services/Testimonials'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Casa Laptop Store',
  description: 'Casa Laptop Store',
  icon: "./icon_2.png"
}


export default function Home() {
  
  return (
    <div className="Home">
      <Carousel/>

      <Cards_Slider type="latest_movies_series" params={{width: "250px", height: "550px", title:"Get Access to your favorite Channels, Movies & Series"}}/>
      <Cards_Slider type="popular_tv_channels" width={"90% !important"} params={{width: "120px", height: "300px", paddingH:0}}/>
      <Cards_Slider type="popular_net_channels" width={"95% !important"} params={{width: "100px", height: "300px",paddingH:0, rtl:true}}/>
      <Cards_Slider type="Testimonials" width={"95% !important"} data={Testimonials} params={{width: "200px", height: "400px", title:"What Our Client Says About Our Services", controles:true}}/>
      
      <Subscriptions/>
      <Facts/>
      <div className="container-fluid pt-5 pb-3">
        <h2 className="text-center position-relative text-uppercase mx-xl-5 mb-4">
          <span className="px-3">Featured Products</span>
        </h2>
        <div className="row px-xl-5">
        </div>
      </div>
    </div>
  )
}
