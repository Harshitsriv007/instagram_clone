import React from "react";
import Header from './header';
import Navbar from './navbar';
import Feed from "./feed";

export default function Index()
{
    return <>
    <Header/>
    <hr className="break"></hr>
    <Navbar/>
    <Feed/>

 </>
}