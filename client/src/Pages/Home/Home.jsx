import axios from "axios";
import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { shortLink } from "../../Redux/Actions/Actions";

import style from './Home.module.css'

let inputInitial = ''

export default function Home(){
    const dispatch = useDispatch()
    let [input,setInput] = useState(inputInitial)
    let validate = useSelector((state)=>state.validate)
    let valid = /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/

    const handleChange = (e) => {
        e.preventDefault();
        setInput(
        e.target.value,
        );
    };
    const handleClick = (e) => {
        e.preventDefault();
        if(valid.test(input))dispatch(shortLink(input))
        else alert("la url no es un link")
    };

    
    return(
        <div>
        <h1>hola</h1>
            <div className={style.conteiner}>
                
                <div className={style.inputurl}>
                <input 
                type="text" 
                className="form-control" 
                placeholder="       ➡ ➡ ➡  Insert your URL HERE  ⬅ ⬅ ⬅" 
                aria-label="Recipient's username" 
                aria-describedby="basic-addon2"
                value={input}
                onChange={handleChange}
                />
                
                </div>
                <div className="d-grid gap-2 d-md-block">
                <div 
                className="btn btn-primary" 
                type="button"
                onClick={handleClick}
                >Short</div>

                </div>
                <div>

                </div>
            </div>
            <div>
                    <div>
                    
                    </div>
                    <div>
    
                    </div>
            </div>            

        </div>
    )
}