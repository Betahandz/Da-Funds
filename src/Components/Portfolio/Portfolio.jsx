import Header from "../Header/Header";
import './portfolio.css';
import Sponsor from "../SponsorBox/Sponsor";
import { linkData } from "../Dropdown/Dropdown";
import React, { useEffect, useState } from 'react';
import { FaRegWindowClose } from "react-icons/fa";

const Portfolio = () => {
    const [msg, setMsg] = useState("");
    const [condition, setCondition] = useState(false);
    const sponData = linkData.map(link => {
        return(
            <Sponsor
                key={link.id}
                title={link.title}
                onClick={(e) => {
                    setCondition(true);
                    setMsg(e.currentTarget.childNodes[0].textContent);
                }}
                />
                )
    })
    
    useEffect(()=> {
        let sponsors = [...document.querySelectorAll(".sponsor-box")]
        
        window.addEventListener("scroll", () => {
            // let winHeight = window.outerHeight;
            let pageY = window.scrollY,num = 0;
            sponsors.forEach(item => {
                if(pageY >= item.offsetTop - 600) {
                    item.classList.add("show-spon");
                    item.style.transitionDelay = num + "s";
                    num += 0.02
                }else {
                    item.classList.remove("show-spon");
                }
            })
        });
        window.scrollTo(0, 0);
        
        return () => window.removeEventListener("scroll", () => {
            let pageY = window.scrollY,num = 0;
            sponsors.forEach(item => {
                if(pageY >= item.offsetTop - 600) {
                    item.classList.add("show-spon");
                    item.style.transitionDelay = num + "s";
                    num += 0.02
                }else {
                    item.classList.remove("show-spon");
                }
            })
        });
    }, [])
    
    return(
        <section className="portfolio">
            <Header />
            <div className="sponsors">
                {sponData}
                {sponData}
                {sponData}
                {sponData}
                {sponData}
                {sponData}
                {sponData}
            </div>
            <div className={`show-message ${condition ? "showup" : null}`}>
                <FaRegWindowClose className="close-msg" onClick={() => {
                    setCondition(false);
                }}/>
                <h4 className={`s-t ${condition ? "showup" : null}`}>
                    {msg}
                </h4>
            </div>
        </section>
    )
}

export default Portfolio;