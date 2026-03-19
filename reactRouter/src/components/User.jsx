import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {user_id}= useParams()

    return (
        <>
            <div className="text-3xl text-center p-4 bg-gray-400 text-white">Welcome User  {user_id} </div>
        </>
    )
}