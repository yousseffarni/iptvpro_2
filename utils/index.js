
import * as FaIcons from "react-icons/fa"

const GetCorrectPrice = (price,Currency) => {
    price = parseFloat(price);
    switch(Currency){
      case "MAD": return price+" MAD";
      case "USD": return "$"+(price/10).toFixed(2);
      case "EUR": return "£"+(price/11).toFixed(2);
    }
}

const GetImageByType = (type) => {

  switch(type){
    case "Display": return "/assets/icons/monitor.png";
    case "RAM": return "/assets/icons/memory-slot.png";
    case "Hard_disk": return "/assets/icons/ssd.png";
    case "CPU": return "/assets/icons/processor.png";
    case "GPU": return "/assets/icons/video-card.png";
    case "Battery": return "/assets/icons/charging-battery.png";
    default: return ""; // unkown Image
  }
}

const GetStars = (nb) =>{
  const FullStars = parseInt(nb);
  var Stars = [], halfStar = parseFloat(nb) > FullStars;
  for(let i=1; i<FullStars; i++) if(Stars.length<5) Stars.push(1);
  if(halfStar) Stars.push(0.5);
  while(Stars.length<5) Stars.push(-1);

  const StarsJSX = Stars.map(i=> 
   <small> {
     Math.abs(i)==1? 
     <FaIcons.FaStar style={{color: i<0? "gray":"orange"}}/>:
     <FaIcons.FaStarHalfAlt/>
     }
   </small>
  )
  return StarsJSX;
}


export {
    GetCorrectPrice,GetImageByType,GetStars
}