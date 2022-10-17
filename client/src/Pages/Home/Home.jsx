import axios from "axios";
import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { shortLink } from "../../Redux/Actions/Actions";
import swal from "sweetalert";

import style from './Home.module.css'

let inputInitial = ''

export default function Home(){

    const dispatch = useDispatch()
    let [cardlink,setcardlink] = useState("")
    let [input,setInput] = useState(inputInitial)
    let link = useSelector((state)=>state.link)
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
        else swal({
            title: "Error",
            text: "This url isn't a link",
            icon: "warning",
          });
    };

    console.log(link)
    return(
        <div>
            <div className={style.conteiner}>
                <h2 className={style.title}>Free short URL</h2>
                <div className={style.urlinput}>
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
                </div>
                    {link?
                        <div className={style.card}>
                            <a href={`https://ptyann.herokuapp.com/${link}`} className={style.redirect}><p>https://ptyann.herokuapp.com/{link}</p></a>
                        </div>
                        :<div></div>
                    }
            </div>
        </div>
    )
}