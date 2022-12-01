import React from "react";
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import './header.css'

const sizeIcon = 50
const colorIcon = 'black'

const Header = () => (
    <section className='header'>
        <h1>Pablo Aldana</h1>
        <h2>Estudiante en Computación</h2>
        <div className='logo-section'>
            <a href={'https://github.com/Paldana99'}>
                <span className='p-lg-4'><BsGithub size={sizeIcon} color={colorIcon}/></span>
            </a>
            <a href={'https://www.linkedin.com/in/p-aldana/'}>
                <span className='p-lg-4'><BsLinkedin size={sizeIcon} color={colorIcon}/></span>
            </a>
        </div>
    </section>
);



export default Header;
