"use client";
import { SessionProvider } from "next-auth/react";
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import { DataProvider } from "../context/DataProvider";
import App from ".";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <SessionProvider>
     <DataProvider>
       <App>{children}</App>
     </DataProvider>
    </SessionProvider>
  )
}
