import React from 'react'
import scss from './Header.module.scss'
import headerLogo from '../../assests/headerIcon/headerLogoBlack.svg'
import search from '../../assests/headerIcon/search.svg'
import world from '../../assests/headerIcon/world.svg'
import burger from '../../assests/headerIcon/burger.svg'

function Header() {
    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <div className={scss.wrapper__left}>
                    <img src={headerLogo} alt="logo" />
                    <div className={scss.left_text}>
                        <a href="">Home</a>
                        <a href="">Components</a>
                        <div className={scss.krug}>
                            <select>
                                <option value="Pages">Pages</option>
                                <option value="Home">Home</option>
                                <option value="List">List</option>
                                <option value="Details">Details</option>
                                <option value="Blog">Blog</option>
                                <option value="About">About</option>
                                <option value="Contact">Contact</option>
                            </select>
                        </div>
                        <a href="">Documentation</a>
                    </div>
                </div>
                <div className={scss.wrapper__right}>
                    <button className={scss.burger}> <img src={burger} alt="burger" /></button>
                    <button className={scss.search}> <img src={search} alt="search" /></button>
                    <div className={scss.dropdown}>
                        <button className={scss.world}> <img src={world} alt="world" />  </button>
                        <div className={scss.dropdownContent}>
                            <a href="">Рус</a>
                            <a href="">Eng</a>
                        </div>
                    </div>
                    <div className={scss.line}></div>
                    <button className={scss.login}>Login</button>
                    <button className={scss.join}>Join Us</button>
                </div>
            </div>
        </div>
    )
}

export default Header