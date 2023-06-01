import { useGlobalContext } from '../../Hooks/Context';
import React, {useEffect} from 'react';
import './dropdown.css';
import { FaWindowClose } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';

export const linkData = [
    {
        id: 1,
        href: "/manifesto",
        title: "Manifesto",
    },
    {
        id: 2,
        href: "portfolio",
        title: "Portfolio"
    },
    {
        id: 3,
        href: "/team",
        title: "Team",
    },
    {
        id: 4,
        href: "/anatomy",
        title: "Anatomy"
    }
]


const Dropdown = () => {
    let {close, condition} = useGlobalContext();
    const Linkage = ({href, title}) => {
        return(
            <li><NavLink to={href} onClick={()=>{
                close();
            }}>{title}</NavLink></li>
        )
    }
    

    return(
        <section className={`dropdown ${condition ? "open" : null}`}>
            <FaWindowClose className='close-menu' onClick={close} />
            <nav className="drop-nav">
                <ul>
                    {
                        linkData.map(link => {
                            return(
                                <Linkage
                                    key={link.id}
                                    {...link}
                                />
                            )
                        })
                    }
                </ul>
            </nav>
        </section>
    )
}

export default Dropdown;