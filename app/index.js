"use client";
import {useContext} from "react";
import styles from './page.module.css';
import TopBar from "../Components/TopBar";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ChatBoxMenu from "../Components/ChatBoxMenu";
import DataContext from '../context/DataProvider';

export default function App({ children }) {

  const {DarkMode} = useContext(DataContext);

  return (
      <html lang="en">
        <head>
         <link rel="icon" href="/icon.ico" />
        </head>
        <body className={DarkMode? "darkMode":""}>
          <main className={styles.main}>
            <TopBar/>
            <NavBar/>
            {children}
            <Footer/>
            <ChatBoxMenu/>
          </main>
        </body>
      </html>
  )
}
