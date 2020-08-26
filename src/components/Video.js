import React, { useState, useEffect } from 'react'
import Icon from '../components/Icon'
import LocalBackgroundURL from '../images/jordan-mcqueen-99269-unsplash-min.jpg';

export default function Video({ videoData }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {setWindowWidth(window.innerWidth)})
        return () => window.removeEventListener('resize', () => {setWindowWidth(window.innerWidth)})
    }, [])
    
    return (
        <div className={`BDti`} style={{height:`${windowWidth/1.946}px`}}>
            <div className={`UNst`} style={{backgroundImage:`url(${LocalBackgroundURL})`,backgroundSize:`cover`}}></div>
            <div className={`w9cr`}>
                <div className={`oiWh`}>
                    <Icon icon="play" className="YGcU"></Icon>
                    <div className={`rK4s`}>{videoData.title}</div>
                </div>
            </div>
        </div>
    )
}
