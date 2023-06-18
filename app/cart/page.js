"use client"
import Image from 'next/image'
import * as FaIcons from "react-icons/fa"
import Breadcrumb from "../../Components/Breadcrumb"
import { useState , useContext} from 'react'
import DataContext from '../../context/DataProvider';
import { GetCorrectPrice } from '../../utils'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Cart() {

    const [Counters, setCounters] = useState({});
    const {Currency} = useContext(DataContext);

    const { data: session } = useSession();

    const Counter_Up = (e) => {
        e.preventDefault();
        if(Counters[e.target.name] == undefined) Counters[e.target.name] = 1;
        if(Counters[e.target.name] < 10)
         setCounters({...Counters, [e.target.name]:Counters[e.target.name]+1});
    }
    const Counter_Down = (e) => {
        e.preventDefault();
        if(Counters[e.target.name] == undefined) Counters[e.target.name] = 1;
        if(Counters[e.target.name] > 1)
         setCounters({...Counters, [e.target.name]:Counters[e.target.name]-1});
    }

    const UpdateCounter = (e) =>{
        if(Counters[e.target.name] == undefined) Counters[e.target.name] = 1
        setCounters({...Counters, [e.target.name]:parseInt(e.target.value)}); 
    }

  return (
    <>
     <Breadcrumb current_page="Shopping Cart"/>
     <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
                <table className="table table-light table-borderless table-hover text-center mb-0">
                    <thead className="thead-dark">
                        <tr>
                            <th>Products</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                      {[1,2,3,4,5,6].map(i =>
                        <tr key={i}>
                            <td className="align-middle">
                                <Image
                                  className="img-fluid w-100 h-100"
                                  src={`/assets/articles/images/pc_pro/acier i3 - 10th/Image_acier i3 - 10th_ (${i}).jpg`}
                                  alt="Casa Laptop Logo"
                                  width={1000} height={1000} priority
                                  style={{width:"50px", height: "100% !important",objectFit: "cover"}}
                                />
                                Product {i} Name 
                            </td>
                            <td className="align-middle">{GetCorrectPrice(3200.99,Currency)}</td>
                            <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{width: "100px"}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-minus"  name={"counter_"+i} onClick={Counter_Down}>
                                          <FaIcons.FaMinus/>
                                        </button>
                                    </div>
                                    <input type="text" 
                                        className="form-control form-control-sm border-0 text-center" 
                                        name={"counter_"+i} 
                                        onChange={(e)=>UpdateCounter(e)}  
                                        value={Counters["counter_"+i]? Counters["counter_"+i] : 1}
                                    />
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-plus" name={"counter_"+i} onClick={Counter_Up}>
                                         <FaIcons.FaPlus />
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">{GetCorrectPrice(3200.99,Currency)}</td>
                            <td className="align-middle"><button className="btn btn-sm btn-danger"><FaIcons.FaTimes/></button></td>
                        </tr>
                      )}  
                    </tbody>
                </table>
            </div>
            <div className="col-lg-4">
                <form className="mb-30" action="">
                    <div className="input-group">
                        <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary">Apply Coupon</button>
                        </div>
                    </div>
                </form>
                <h5 className="position-relative text-uppercase mb-3"><span className="pr-3">Cart Summary</span></h5>
                <div className="bg-light p-30 mb-5" style={{boxShadow: "rgba(0, 0, 0, 0.2) 1px 1px 3px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px"}}>
                    <div className="border-bottom pb-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h6>Subtotal</h6>
                            <h6>{GetCorrectPrice(3200.99,Currency)}</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Shipping</h6>
                            <h6 className="font-weight-medium">{GetCorrectPrice(20,Currency)}</h6>
                        </div>
                    </div>
                    <div className="pt-2">
                        <div className="d-flex justify-content-between mt-2">
                            <h5>Total</h5>
                            <h5>{GetCorrectPrice(3200.99,Currency)}</h5>
                        </div>
                        <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}