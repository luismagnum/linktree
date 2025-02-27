import React from 'react';
import './Styles.css';
import bio from '../../assets/bio.png'
import logo from '../../assets/logo.svg'
import speed from '../../assets/speed.png'
import zully from '../../assets/zully.jpeg'
import auto from '../../assets/auto.jpg'
import curso from '../../assets/curso.png'

export const Linktree = () => {
  return (
    <div>
        <div className='container'>
            <img src={bio} alt='foto' className='profile'/>
            <h2>Luis E. Diaz</h2>
            <p className='sub-title'>Bienvenido a mis Proyectos</p>
            <a href='https://www.zullydiaz.com' className='link'  target='_blank'>
            <img src={zully} alt='logo' width={30}/>
            <p>Psicologa</p>
            </a>

            <a href='https://autos-6nkd.vercel.app/' className='link' target='_blank'>
            <img src={auto} alt='logo' width={50}/>
            <p>Auto.com</p>
            </a>

            <a href='https://saboresdevenezuela.online/' className='link'  target='_blank'>
            <img src={logo} alt='logo' width={40}/>
            <p>Sab. de Vzla.</p>
            </a>

            <a href='https://www.speedweb.live/' className='link'  target='_blank'>
            <img src={speed} alt='logo' width={50}/>
            <p>Pagina Web</p>
            </a>

            <a href='https://cursos-nine-lac.vercel.app/' className='link'  target='_blank'>
            <img src={curso} alt='logo' width={40}/>
            <p>Cursos online</p>
            </a>
        </div>
    </div>
  )
}
