import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin =()=>{
    let navigate = useNavigate()

    useEffect(()=>{
        let token = localStorage.getItem('token');
        if(token === undefined){
            navigate('/login')
        }
    })

    return(
        <div>
            <h1 className="text-center">Admin</h1>
        </div>
    )
}

export default Admin;