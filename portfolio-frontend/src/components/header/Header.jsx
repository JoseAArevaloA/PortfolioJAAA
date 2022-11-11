import React from 'react'
import { useState } from 'react'
import './header.css'


const Header = () => {
    /* toggle menu */
    const [Toggle, showMenu] = useState(false);
    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav__logo'>Jose Arévalo</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href='home' className='nav__link active-link'>
                                <i class="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href='about' className='nav__link active-link'>
                                <i className='uil uil-user-circle nav__icon'></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href='skills' className='nav__link active-link'>
                                <i className='uil uil-brain nav__icon'></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href='portfolio' className='nav__link active-link'>
                                <i className='uil uil-bag nav__icon'></i>Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href='messages' className='nav__link active-link'>
                                <i className='uil uil-message nav__icon'></i>Get in touch
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={()=>showMenu(!Toggle)} >
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
    }

export default Header