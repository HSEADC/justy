import * as React from 'react'
import logoSvg from './justy.svg'
import './style.scss'

const Logo = (props) => (
    <a className='logo' style={{display: `block`}} href='/'>
        <img src={logoSvg} className={props.size} alt=""/>
    </a>
  );
  
  export default Logo;
  