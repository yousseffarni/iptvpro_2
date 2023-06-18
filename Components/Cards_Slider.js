"use client"
import Image from 'next/image'
import * as FaIcons from "react-icons/fa"
import {useEffect, useState} from "react";
import Slider from "react-slick";
import axios from 'axios';

export default function Cards_Slider({type, params, width, data}) {

    const [dataItems, setdataItems] = useState([]);
    const [Loading, setLoading] = useState(true);

    var Data = [];
    var breakFor = false;

    useEffect(() => {// api key: f9d15425
        var url = "";
        var host = "watchmode.p.rapidapi.com"
        var params = {};
        var isSearch = false;

        switch(type){
            case "latest_movies_series":
                url = "https://moviesdatabase.p.rapidapi.com/titles";
                params = {
                    list: 'most_pop_movies',
                    endYear: '2024',
                    startYear: '2018'
                }; 
                isSearch = true;
                host = "moviesdatabase.p.rapidapi.com";
                break;
            case "popular_tv_channels": case "popular_net_channels":
                url = "https://watchmode.p.rapidapi.com/sources/";
                params = {
                    stypes: type.includes("net_")? "sub,purchase":"free,tv",
                    regions: 'US,UK'
                };
                break; 
            case "Testimonials": setdataItems(data); setLoading(false); return;   
        }

        
        axios.get(url,{
            params: params,
            headers: {
                'X-RapidAPI-Key': 'd25956cc33msh3cb5f1429b1e9f8p189cf6jsn97321b471225',
                'X-RapidAPI-Host': host
            }
        }).then(function (response) {
            console.log("response:", response);
            setdataItems(isSearch? response.data.results : response.data);  
            setLoading(false);
            console.log("movies:", dataItems);
        })
    }, []);

    const Get_movie_details = (movie_id) =>{
        movie_id = movie_id.split("/").filter(i=> i!=="")[1];
        var Status = true;
        axios.get(`https://moviesdatabase.p.rapidapi.com/titles/${movie_id}`,{
            headers: {
                'X-RapidAPI-Key': 'd25956cc33msh3cb5f1429b1e9f8p189cf6jsn97321b471225',
                'X-RapidAPI-Host': "moviesdatabase.p.rapidapi.com"
            }
        }).then(function (response) {
            console.log("response detail:", response);
            if(response.data != undefined && response.data != ""){
                var data = response.data.results;
                
                if(data.primaryImage !== null){
                    Data.push({
                     image: {url: data.primaryImage.url},
                     id: data.id,
                     name: data.titleText.text
                    });  
                    if(Data.length >= 20) Status = false;
                }
            }
            
            setdataItems(Data); 
            console.log("Data:", Data);
        })
        return Status;
    }

    const settings = {
        dots: params.controles? true:false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        className: "SliderMenu",
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        swipeToSlide: true,
        rtl: params.rtl? true:false,
        nextArrow: <FaIcons.FaArrowRight style={{color:"#000"}} />,
        prevArrow: <FaIcons.FaArrowLeft style={{color:"#000"}} />
    };

    const isLogo = type.includes("channels");

    return (
        <div className={width? "container-fluid mb-3 px-2 m-auto w-75":"container-fluid mb-3 px-2"}>
            <div className={"container Slider-Container "+ params.paddingH? "py-1":"py-5"}>
                {params.title?
                <h2 className="text-uppercase text-center mb-3">{params.title}</h2>:""}
                {Loading? 
                  <div className="d-flex justify-content-center py-3 w-100">
                    <div class="spinner-border text-info" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>:
                  <Slider {...settings}>
                    {dataItems.length>0 && dataItems.map(i=>
                     <div key={i.id} className="item rounded d-initial" style={{
                        width:params.width, height:params.height, 
                        borderRadius: "12px !important", overflow: "hidden",
                        outline: params.paddingH? "":"3px solid #167ee9 !important;"
                        }}>
                        <img
                          className="img-fluid rounded w-100"
                          style={{objectFit: isLogo? "scale-down":"cover",height: "100% !important;"}}
                          src={i.image_url? i.image_url: i.primaryImage? i.primaryImage.url : i.logo_100px}
                          alt={i.name}
                          width={1000} height={1000} priority
                        />
                     </div>
                    )}
                  </Slider>
                }
            </div>
        </div>
    )
}