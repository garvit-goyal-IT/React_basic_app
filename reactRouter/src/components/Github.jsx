import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data= useLoaderData()
    // const [data, setData]= useState([])
    // useEffect( ()=> {
    //     fetch('https://api.github.com/users/garvit-goyal-IT')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     }
    //     )
    // }, [] )
    return (
        <>
            <div className="text-center m-4 p-4 text-3xl bg-pink-100 text-black ">Github repositories: {data.
public_repos}</div>
            <img src={data.avatar_url} alt="git-profil-picture" width={300}></img>
        </>
    )
}

export const githubInfoLoader= async() => {
    const response= await fetch('https://api.github.com/users/garvit-goyal-IT')
    return response.json()
}