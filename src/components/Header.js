import React, { useState, useEffect, useRef } from 'react'
import Icon from '../components/Icon'

export default function Header({ menuItems }) {
  const [curMenuItem, setCurMenuItem] = useState(0)
  const [curMenuItemLeft, setCurMenuItemLeft] = useState()
  const [curMenuItemWidth, setCurMenuItemWidth] = useState()
  const [curMenuItemBottom, setCurMenuItemBottom] = useState()
  const [logoStyle, setLogoStyle] = useState()
  const [underlineHex, setUnderlineHex] = useState()
  const [underlineOpacity, setUnderlineOpacity] = useState(0)
  const [isFixedMenu, setIsFixedMenu] = useState(false)
  const [fixedMenuStyle, setFixedMenuStyle] = useState()
  const [windowScrollY, setWindowScrollY] = useState(window.scrollY)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const isScrollTop = window.scrollY > 36 ? true : false;

  useEffect(() => {
      window.addEventListener('scroll', () => {setWindowScrollY(window.scrollY)})
      window.addEventListener('resize', () => {setWindowWidth(window.innerWidth)})
      return () => {
        window.removeEventListener('scroll', () => {setWindowScrollY(window.scrollY)})
        window.removeEventListener('resize', () => {setWindowWidth(window.innerWidth)})    
      }
  }, [])

  if (isFixedMenu) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'auto';

  return (
    <>
      <header className={`hT3b ${isScrollTop?`Y6zq`:``}`}>
        <div className={`wrap`}>
          <nav className={`CNjM`}>
            {menuItems.map(menuItem => {
              const classNames = [`YMdg`]
              if (menuItem.id===1) classNames.push(`C7Lh`)
              if (menuItem.id===1 && isFixedMenu) classNames.push(`XGhI`)
              if (menuItem.id===curMenuItem) classNames.push(`DPor`)
              else if (curMenuItem!==0 && menuItem.id!==1) classNames.push(`R2f9`)
              if (windowWidth>=1340 && menuItem.id===8) classNames.push(`d-none`)
              if (windowWidth<1340 && menuItem.id===8) classNames.push(`d-flex`)
              if (windowWidth<1340 && menuItem.id===6) classNames.push(`d-none`)
              if (windowWidth<1340 && menuItem.id===5) classNames.push(`d-none`)
              if (windowWidth<1200 && menuItem.id===4) classNames.push(`d-none`)
              if (windowWidth<800 && menuItem.id===3) classNames.push(`d-none`)
              if (windowWidth<800 && menuItem.id===7) classNames.push(`d-none`)
              if (windowWidth<800 && menuItem.id===2) classNames.push(`d-none`)

              let text = menuItem.text
              if (menuItem.id===1) text = <Icon icon="logo" className={`vxCO ${isScrollTop?`gXQ9`:``}`} style={logoStyle} />
              if (menuItem.id===8) text = <div><input type="checkbox" id="Cxjb" onClick={() => {if(isFixedMenu){setIsFixedMenu(false)}else{setIsFixedMenu(true)}}}/><label for="Cxjb"><div></div><div></div><div></div></label></div>
              
              return <a
                      className={classNames.join(' ')}
                      href={menuItem.href}
                      key={menuItem.id}
                      onMouseEnter={() => {setCurMenuItem(menuItem.id)}}
                      onMouseLeave={() => {setCurMenuItem(0);setUnderlineOpacity(0)}}
                      ref={el => {
                        if (el&&menuItem.id===curMenuItem
                            && curMenuItem!==1 && curMenuItem!==8) {
                          setCurMenuItemLeft(el.offsetLeft)
                          setCurMenuItemWidth(el.getBoundingClientRect().width)
                          setCurMenuItemBottom(el.getBoundingClientRect().bottom)
                          setUnderlineHex(menuItem.hex)
                          setUnderlineOpacity(1)
                        }
                      }}
                    >
                        {text}
                    </a>
            })}
            <div className="JAIy" style={{bottom:`32.5%`,left:`${curMenuItemLeft+35.76}px`,width:`${curMenuItemWidth-71.52}px`,background:`${underlineHex}`,opacity:`${underlineOpacity}`}}></div>
          </nav>
        </div>
        {/* fixed menu */}
        <div className={`Hm1N ${isFixedMenu?`yAaR`:``}`}>
          <nav className="ATju" style={{top:`${isScrollTop?`8rem`:`12rem`}`}}>
          {menuItems.map(menuItem => {
            if(menuItem.id!==1&&menuItem.id!==8)
            return <a className={`PUQa`} href={menuItem.href}>{menuItem.text}</a>
          })}
            <div style={{height:`${isScrollTop?`4rem`:`4rem`}`}}></div>
            <button type="button" className="btn Hj4v" style={{float:`left`,fontSize:`1.2rem`,width:`49%`}}><span>Enquire Now</span></button>
            <button type="button" className="btn TQYB" style={{float:`right`,fontSize:`1.2rem`,width:`49%`}}><span><Icon icon="phone" style={{height:`1.6rem`,top:`-.25rem`,right:`3rem`,position:`absolute`}} /> Call</span></button>
          </nav>
        </div>
        {/* divider */}
        <div className={`vzmj`}>
          <div className={`wrap`}>
            <div className={`uHkQ`}></div>
          </div>
        </div>
      </header>
    </>
  )
}
