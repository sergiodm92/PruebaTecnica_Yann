import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./styleLanding.module.css"





export default function LandingPage(){
    const navigate= useNavigate()
    return(
        <div className={style.content}>
        <div className={style.background}>

        </div>
        <div className={style.button} onClick={()=>navigate('/home')}>
           <h1>Start</h1>
        </div>

        </div>
    )
}