import React, { useState, useEffect } from 'react'
import LocalBackgroundURL from '../images/elena-prokofyeva-17909-unsplash-min.jpg';

export default function Hero( {heroData} ) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener('resize', () => {setWindowWidth(window.innerWidth)})
        return () => window.removeEventListener('resize', () => {setWindowWidth(window.innerWidth)})
    }, [])

    let ratio = 2.487
    if (windowWidth<800) ratio = 1.5
    if (windowWidth<640) ratio = 1
    if (windowWidth<420) ratio = .85
    if (windowWidth<321) ratio = .8
    
    return (
        <div className={`PbJg`} style={{height:`${windowWidth/ratio}px`}}>
            <div className={`AuGE`} style={{backgroundImage:`url(${LocalBackgroundURL})`,backgroundSize:`cover`}}></div>
            <div className={`tAhe`}>
                <div className={`ut54`}>
                    <h1 className={`lPNc`}>{heroData.title}</h1>
                    <div className={`E4UF`}>{heroData.excerpt}</div>
                    <a className={`btn LPOz`} href="#"><span>{heroData.CTAButtonText}</span></a>
                </div>
            </div>
        </div>
    )
}
