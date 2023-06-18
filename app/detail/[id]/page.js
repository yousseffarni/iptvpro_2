"use client"
import Image from 'next/image'
//import { useRouter } from 'next/router'
import * as FaIcons from "react-icons/fa"
import Breadcrumb from "../../../Components/Breadcrumb"
import { useState ,useContext,useEffect} from 'react'
import DataContext from '../../../context/DataProvider';
import { GetCorrectPrice, GetStars } from '../../../utils'
import { GetProduct }  from "../../../services"
import NotFoundPage from '../../NotFoundPage/page'


export default function Detail({params}) {

    const [Counter, setCounter] = useState(1);
    const [Product, setProduct] = useState({
      id: 0,
      name: "",
      type: "",
      designiation: "",
      description: "",
      price: 0,
      oldPrice: 0,
      stock: 0,
      colors:[],
      images: [],
      videos:[],
      num_stars: 4,
      details: []
    });

    //const router = useRouter();
    const {Currency,ChoppingCart,setChoppingCart} = useContext(DataContext);

    useEffect(() => {
        setProduct(GetProduct(params.id));
    }, [params.id]);

    const Counter_Up = (e) => {
        e.preventDefault();
        if(Counter<10) setCounter(Counter+1);
    }
    const Counter_Down = (e) => {
        e.preventDefault();
        if(Counter>1)  setCounter(Counter-1);
    }

    const UpdateCounter = (e) =>{
        setCounter(parseInt(e.target.value)); 
    }

    const Add_To_Cart = (e) =>{
        e.preventDefault();
        if(!ChoppingCart.includes(Product.id))
         setChoppingCart(ChoppingCart.push(Product.id));
    }

  if(Product == undefined){
    return <NotFoundPage/>;
  }

  return (
    <>
     <Breadcrumb current_page={"detail"}/>
     <div className="container-fluid pb-5">
        <div className="row px-xl-5">
            <div className="col-lg-5 mb-30">
                <div id="product-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner bg-light">
                        {Product.images.map((img,k)=>
                         <div key={k} className={"carousel-item "+(k==0? "active":"")}>
                           <Image
                             className="img-fluid w-100 h-100"
                             src={img}
                             alt="Casa Laptop Logo"
                             width={1000} height={1000} priority
                             style={{width:"100%", height: "100% !important",objectFit: "cover"}}
                           />
                         </div>
                        )}
                    </div>
                    <a className="carousel-control-prev" href="#product-carousel" data-bs-slide="prev">
                        <FaIcons.FaAngleLeft/>
                    </a>
                    <a className="carousel-control-next" href="#product-carousel" data-bs-slide="next">
                      <FaIcons.FaAngleRight/>
                    </a>
                </div>
            </div>

            <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30" style={{boxShadow: "rgba(0, 0, 0, 0.2) 1px 1px 3px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px"}}>
                    <h3>{Product.name}</h3>
                    <div className="d-flex mb-3">
                        <div className="text-primary mr-2">
                            {GetStars(Product.num_stars)}
                        </div>
                        <small className="pt-1">(99 Reviews)</small>
                    </div>
                    <h3 className="font-weight-semi-bold mb-4">{GetCorrectPrice(Product.price,Currency)}</h3>
                    <p className="mb-4">{Product.designiation}</p>
                    <div className="d-flex mb-3">
                        <strong className="text-dark mr-3">Sizes:</strong>
                        <form>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-1" name="size"/>
                                <label className="custom-control-label" for="size-1">XS</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-2" name="size"/>
                                <label className="custom-control-label" for="size-2">S</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-3" name="size"/>
                                <label className="custom-control-label" for="size-3">M</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-4" name="size"/>
                                <label className="custom-control-label" for="size-4">L</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-5" name="size"/>
                                <label className="custom-control-label" for="size-5">XL</label>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex mb-4">
                        <strong className="text-dark mr-3">Colors:</strong>
                        <form>
                            {Product.colors.map((color,k)=>
                              <div key={k} className="custom-control custom-radio custom-control-inline">
                                  <input type="radio" className="custom-control-input" id={"color-"+k} name="color"/>
                                  <label className="custom-control-label" for={"color-"+k}>{color}</label>
                              </div>
                            )}
                        </form>
                    </div>
                    <div className="d-flex align-items-center mb-4 pt-2">
                        <div className="input-group quantity mr-3" style={{width: "146px !important"}}>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-minus" onClick={(e)=>Counter_Down(e)}>
                                    <FaIcons.FaMinus/>
                                </button>
                            </div>
                            <input type="text" className="form-control border-0 text-center" onChange={UpdateCounter} value={Counter}/>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-plus" onClick={(e)=>Counter_Up(e)}>
                                    <FaIcons.FaPlus />
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-primary px-3" onClick={Add_To_Cart}>
                            <FaIcons.FaShoppingCart/> Add To Cart
                        </button>
                    </div>
                    <div className="d-flex pt-2">
                        <strong className="text-dark mr-2">Share on:</strong>
                        <div className="d-inline-flex">
                            <a className="text-dark px-2" href="">
                                <FaIcons.FaFacebook/>
                            </a>
                            <a className="text-dark px-2" href="">
                                <FaIcons.FaTwitter/>
                            </a>
                            <a className="text-dark px-2" href="">
                                <FaIcons.FaLinkedin/>
                            </a>
                            <a className="text-dark px-2" href="">
                                <FaIcons.FaPinterest/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row px-xl-5">
            <div className="col">
                <div className="bg-light p-30" style={{boxShadow: "rgba(0, 0, 0, 0.2) 1px 1px 3px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px"}}>
                    <div className="nav nav-tabs mb-4">
                        <a className="nav-item nav-link text-dark active" data-bs-toggle="tab" href="#tab-pane-1">Description</a>
                        <a className="nav-item nav-link text-dark" data-bs-toggle="tab" href="#tab-pane-2">Information</a>
                        <a className="nav-item nav-link text-dark" data-bs-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <h4 className="mb-3">Product Description</h4>
                            <p>{Product.description}</p>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <h4 className="mb-3">Additional Information</h4>
                            <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                        </li>
                                      </ul> 
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                        </li>
                                      </ul> 
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mb-4">1 review for {Product.name}</h4>
                                    <div className="media mb-4">
                                        <Image
                                          className="img-fluid mr-3 mt-1"
                                          src={Product.images[0]}
                                          alt="Casa Laptop Logo"
                                          width={1000} height={1000} priority
                                          style={{width:"45px", height: "100% !important",objectFit: "cover"}}
                                        />
                                        <div className="media-body">
                                            <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                            <div className="text-primary mb-2">
                                                {[1,2,3,4,5].map(j=>
                                                 j==5? <FaIcons.FaStarHalfAlt key={j}/> : <FaIcons.FaStar key={j}/>
                                                )}
                                            </div>
                                            <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="mb-4">Leave a review</h4>
                                    <small>Your email address will not be published. Required fields are marked *</small>
                                    <div className="d-flex my-3">
                                        <p className="mb-0 mr-2">Your Rating * :</p>
                                        <div className="text-primary">
                                            {[1,2,3,4,5].map(j=>
                                             <FaIcons.FaStar key={j}/>
                                            )}
                                        </div>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <label for="message">Your Review *</label>
                                            <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label for="name">Your Name *</label>
                                            <input type="text" className="form-control" id="name"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="email">Your Email *</label>
                                            <input type="email" className="form-control" id="email"/>
                                        </div>
                                        <div className="form-group mb-0">
                                            <input type="submit" value="Leave Your Review" className="btn btn-primary px-3"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}