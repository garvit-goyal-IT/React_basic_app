import Header from "./components/Header"
import Footer from "./components/Footer"
import React from "react"
import { Outlet } from "react-router-dom"


export default function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}