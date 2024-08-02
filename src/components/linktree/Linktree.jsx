import React from 'react';
import './Styles.css';
import bio from '../../assets/bio.png'
import logo from '../../assets/logo.svg'

export const Linktree = () => {
  return (
    <div>
        <div className='container'>
            <img src={bio} alt='foto' className='profile'/>
            <h1>Luis E. Diaz</h1>
            <p className='sub-title'>Bem-vindo ao meu Linktree!</p>
            <a href='https://www.linkedin.com/in/luis-enrique-diaz-brice%C3%B1o-b4662124b/' className='link'  target='_blank'>
            <img src='https://img.icons8.com/?size=40&id=xuvGCOXi8Wyg&format=png&color=000000' alt='link'/>
            <p>LinKedin</p>
            </a>

            <a href='https://www.luisediaz.co/' className='link' target='_blank'>
            <img src='https://img.icons8.com/?size=40&id=naDnVpQ3BNkR&format=png&color=000000' alt='link'/>
            <p>Portfolio</p>
            </a>

            <a href='https://luismagnum.github.io/reactnav/' className='link'  target='_blank'>
            <img src={logo} alt='logo' width={40}/>
            <p>Projeto</p>
            </a>
        </div>
    </div>
  )
}
