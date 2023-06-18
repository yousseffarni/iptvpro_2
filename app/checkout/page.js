"use client"
import Image from 'next/image'
import * as FaIcons from "react-icons/fa"
import Breadcrumb from "../../Components/Breadcrumb"
import { useState ,useContext} from 'react'
import DataContext from '../../context/DataProvider';
import { GetCorrectPrice } from '../../utils'

export default function Checkout() {

    const {Currency} = useContext(DataContext);
  return (
    <>
     <Breadcrumb current_page="checkout"/>
     <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-lg-8">
                <h5 className="position-relative text-uppercase mb-3"><span className="pr-3">Billing Address</span></h5>
                <div className="bg-light p-30 mb-5" style={{boxShadow: "rgba(0, 0, 0, 0.2) 1px 1px 3px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px"}}>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>First Name</label>
                            <input className="form-control" type="text" placeholder="John"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Last Name</label>
                            <input className="form-control" type="text" placeholder="Doe"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>E-mail</label>
                            <input className="form-control" type="text" placeholder="example@email.com"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Mobile No</label>
                            <input className="form-control" type="text" placeholder="+123 456 789"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address Line 1</label>
                            <input className="form-control" type="text" placeholder="123 Street"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address Line 2</label>
                            <input className="form-control" type="text" placeholder="123 Street"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Country</label>
                            <select defaultValue={"us"} className="custom-select">
                                <option defaultValue={"us"} selected>United States</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                            </select>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>City</label>
                            <input className="form-control" type="text" placeholder="New York"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>State</label>
                            <input className="form-control" type="text" placeholder="New York"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>ZIP Code</label>
                            <input className="form-control" type="text" placeholder="123"/>
                        </div>
                        <div className="col-md-12 form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="newaccount"/>
                                <label className="custom-control-label" for="newaccount">Create an account</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="shipto"/>
                                <label className="custom-control-label" for="shipto"  data-bs-toggle="collapse" data-bs-target="#shipping-address">Ship to different address</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapse mb-5" id="shipping-address">
                    <h5 className="position-relative text-uppercase mb-3"><span className="pr-3">Shipping Address</span></h5>
                    <div className="bg-light p-30" style={{boxShadow: "rgba(0, 0, 0, 0.2) 1px 1px 3px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px"}}>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>First Name</label>
                                <input className="form-control" type="text" placeholder="John"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Last Name</label>
                                <input className="form-control" type="text" placeholder="Doe"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>E-mail</label>
                                <input className="form-control" type="text" placeholder="example@email.com"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Mobile No</label>
                                <input className="form-control" type="text" placeholder="+123 456 789"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Address Line 1</label>
                                <input className="form-control" type="text" placeholder="123 Street"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Address Line 2</label>
                                <input className="form-control" type="text" placeholder="123 Street"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Country</label>
                                <select defaultValue={"us"}className="custom-select">
                                    <option value="us" selected>United States</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                </select>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>City</label>
                                <input className="form-control" type="text" placeholder="New York"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>State</label>
                                <input className="form-control" type="text" placeholder="New York"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>ZIP Code</label>
                                <input className="form-control" type="text" placeholder="123"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <h5 className="position-relative text-uppercase mb-3"><span className="pr-3">Order Total</span></h5>
                <div className="bg-light p-30 mb-5" style={{boxShadow: "rgba(0, 0, 0, 0.2) 1px 1px 3px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px"}}>
                    <div className="border-bottom">
                        <h6 className="mb-3">Products</h6>
                        <div className="d-flex justify-content-between">
                            <p>Product Name 1</p>
                            <p>{GetCorrectPrice(3200.99,Currency)}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Product Name 2</p>
                            <p>{GetCorrectPrice(3200.99,Currency)}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Product Name 3</p>
                            <p>{GetCorrectPrice(3200.99,Currency)}</p>
                        </div>
                    </div>
                    <div className="border-bottom pt-3 pb-2">
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
                    </div>
                </div>
                <div className="mb-5">
                    <h5 className="position-relative text-uppercase mb-3"><span className="pr-3">Payment</span></h5>
                    <div className="bg-light p-30" style={{boxShadow: "rgba(0, 0, 0, 0.2) 1px 1px 3px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px"}}>
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id="paypal"/>
                                <label className="custom-control-label" for="paypal">Paypal</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id="directcheck"/>
                                <label className="custom-control-label" for="directcheck">Direct Check</label>
                            </div>
                        </div>
                        <div className="form-group mb-4">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id="banktransfer"/>
                                <label className="custom-control-label" for="banktransfer">Bank Transfer</label>
                            </div>
                        </div>
                        <button className="btn btn-block btn-primary font-weight-bold py-3">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}