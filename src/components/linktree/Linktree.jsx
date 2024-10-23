import React from 'react';
import './Styles.css';
import bio from '../../assets/bio.png'
import logo from '../../assets/logo.svg'
import speed from '../../assets/speed.png'

export const Linktree = () => {
  return (
    <div>
        <div className='container'>
            <img src={bio} alt='foto' className='profile'/>
            <h1>Luis E. Diaz</h1>
            <p className='sub-title'>Bienvenido a mi Linktree!</p>
            <a href='https://www.linkedin.com/in/luis-enrique-diaz-brice%C3%B1o-b4662124b/' className='link'  target='_blank'>
            <img src='https://img.icons8.com/?size=40&id=xuvGCOXi8Wyg&format=png&color=000000' alt='link'/>
            <p>LinKedin</p>
            </a>

            <a href='https://www.luisediaz.co/' className='link' target='_blank'>
            <img src='https://img.icons8.com/?size=40&id=naDnVpQ3BNkR&format=png&color=000000' alt='link'/>
            <p>Portfolio</p>
            </a>

            <a href='https://saboresdevenezuela.online/' className='link'  target='_blank'>
            <img src={logo} alt='logo' width={40}/>
            <p>Proyecto</p>
            </a>

            <a href='https://www.speedweb.live/' className='link'  target='_blank'>
            <img src={speed} alt='logo' width={50}/>
            <p>Proyecto</p>
            </a>
        </div>
    </div>
  )
}
