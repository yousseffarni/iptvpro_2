import Image from 'next/image'
import * as FaIcons from "react-icons/fa"

export default function Subscriptions() {

    const List_Data = [
        "+54,000 TV Channels, Movies & Series",
        "+ 40.000 VOD",
        "4k, FHD, HD & SD Picture Quality",
        " All Devices Supported",
        "Catch Up / EPG For All UK and European Channels",
        "99.9% Server Uptime",
        "Support 24/7",
        "Fast Delivery",
        "Daily Backups",
    ];

    const Subscriptions = [
        {name:"Basic", price:"$12" , duration:"1 Month"},
        {name:"Standard", price:"$25" , duration:"3 Month"},
        {name:"Prémium", price:"$35" , duration:"6 Month"},
        {name:"Ultimate", price:"$55" , duration:"12 Month"}
    ];

    return (
        <div className="container-fluid pt-5" id="Plans">
            <div className="container">
                <h2 className="text-uppercase text-center mb-3">Choose The Plan That Suits For You</h2>
                <p className="pb-3 text-center">
                    You are here to Buy IPTV service from BESSTIPTV and use it on Smart TV, Android Box, Cell Phone, Tablet, Mag Device, enigma2 device, Smart satellite receiver, or even on your Laptop with VLC Player.
                </p>
                <div className="row mt-3">
                    {Subscriptions.map((i,k)=>
                     <div key={k} className="col-lg-3 col-md-6 pb-3">
                        <div className="card pricing-cards d-flex align-items-center justify-content-center">
                            <h4 className="h-1 w-75 text-center pt-5">{i.name}<br/>{i.price}<br/>{i.duration}</h4>
                            <ul className="mb-5 px-5 list-unstyled text-muted">
                                {List_Data.map((j,k_)=>
                                 <li key={k_} className="py-1 gap-2 d-flex justify-content-center align-items-center">
                                    <FaIcons.FaCheckCircle className="text-success"/>
                                    <span className="w-75">{j}</span>
                                </li>
                                )}
                            </ul> 
                            <button type="button" className="btn rounded btn-primary mb-3"> Get Started </button>
                        </div>
                     </div>
                    )}
                </div>
            </div>
        </div>
    )
}