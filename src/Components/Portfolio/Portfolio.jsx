import Header from "../Header/Header";
import './portfolio.css';
import Sponsor from "../SponsorBox/Sponsor";
import { linkData } from "../Dropdown/Dropdown";
// import { gsap } from "gsap";
import React, { useEffect } from 'react';

const Portfolio = () => {
    const sponData = linkData.map(link => {
        return(
            <Sponsor
                key={link.id}
                title={link.title}
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
        window.scrollTo(9, 0);

        return () => window.removeEventListener("scroll");
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
        </section>
    )
}

export default Portfolio;