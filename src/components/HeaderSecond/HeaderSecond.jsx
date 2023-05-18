import React from 'react'
import scss from './HeaderSecond.module.scss'
import headerLogo from '../../assets/headerIcon/logoWhite.svg'
import search from '../../assets/headerIcon/searchWhite.svg'
import world from '../../assets/headerIcon/global.svg'
import burger from '../../assets/headerIcon/burger.svg'
import { Link } from "react-router-dom";

function HeaderSecond() {
    return (
        <>
            <div className={scss.wrapper}>
                <div className={scss.wrapper__left}>
                    <img src={headerLogo} alt="logo" />
                    <div className={scss.left_text}>
                        <a href="/#">Home</a>
                        <a href="/#">Components</a>
                        <div className={scss.krug}>
                            <select>
                                <option className={scss.option} value="Pages">Pages</option>
                                <Link className={scss.option} to="/about">Home</Link>
                                <Link className={scss.option} to="/list">List</Link>
                                <Link className={scss.option} to="/details">Details</Link>
                                <Link className={scss.option} to="/blog">Blog</Link>
                                <option className={scss.option} value="About">About</option>
                                <option className={scss.option} value="Contact">Contact</option>
                            </select>
                        </div>
                        <a href="/#">Documentation</a>
                    </div>
                </div>
                <div className={scss.wrapper__right}>
                    <button className={scss.burger}> <img src={burger} alt="burger" /></button>
                    <button className={scss.search}> <img src={search} alt="search" /></button>
                    <div className={scss.dropdown}>
                        <button className={scss.world}> <img src={world} alt="world" />  </button>
                        <div className={scss.dropdownContent}>
                            <a href="/#">Рус</a>
                            <a href="/#">Eng</a>
                        </div>
                    </div>
                    <div className={scss.line}></div>
                    <button className={scss.login}>Login</button>
                    <button className={scss.join}>Join Us</button>
                </div>
            </div>
        </>
    )
}

export default HeaderSecond;