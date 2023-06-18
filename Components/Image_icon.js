"use client"
import React from 'react';
import Image from 'next/image'

export default function Image_icon(props) {

    return (
        <Image
          style={props.styles? props.styles:{objectFit: "contain", paddingRight:"5px"}}
          src={props.Image}
          alt="Casa Laptop Logo" width={25} height={25} priority
        /> 
    )
}
