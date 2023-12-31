"use client"
import Image from 'next/image'
import React from 'react'
import * as FaIcons from "react-icons/fa"

export default function Breadcrumb(props) {
  return (
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <a className="breadcrumb-item text-dark" href="#">Home</a>
                    <a className="breadcrumb-item text-dark" href="#">Shop</a>
                    <span className="breadcrumb-item active" style={{textTransform:"capitalize"}}>{props.current_page}</span>
                </nav>
            </div>
        </div>
    </div>
  )
}