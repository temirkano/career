import React from 'react'
import scss from './HotCategories.module.scss'
import { HotCategoriesData } from '../../const/HotCategoriesData'
import strelka from '../../assets/HotCategoriesIcon/strelka.svg'

function HotCategories({ img, title, txt }) {
    return (
        <div className={scss.wrapper + ' container'}>
                <h2>Hot Categories</h2>
                <div className={scss.cards}>
                    <div className={scss.cards__item}>
                        {
                            HotCategoriesData.map(item => (
                                <div className={scss.card} key={item.id}>
                                    <div className={scss.krug}>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className={scss.card__text}>
                                        <h6>{item.title}</h6>
                                        <p>{item.txt}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <button>View All Categories <img src={strelka} alt="" /></button>
        </div>
    )
}

export default HotCategories