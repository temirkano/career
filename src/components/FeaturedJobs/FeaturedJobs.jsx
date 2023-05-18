import React, { useState } from 'react'
import scss from './FeaturedJobs.module.scss'
import { FeaturedJobsData } from '../../const/FeaturedJobsData'
import heart from '../../assets/FeaturedJobsIcon/heart.svg'
import action_heart from '../../assets/FeaturedJobsIcon/action_heart.svg'
import location from '../../assets/FeaturedJobsIcon/location.svg'
import step from '../../assets/FeaturedJobsIcon/step.svg'
import time from '../../assets/FeaturedJobsIcon/time.svg'
import money from '../../assets/FeaturedJobsIcon/money.svg'
import person from '../../assets/FeaturedJobsIcon/person.svg'
import strelka from '../../assets/FeaturedJobsIcon/strelka.svg'

function FeaturedJobs({id, image, icon, title, description, city, data, year, timee, moneyy, personn }) {

    const [imageSrc, setImageSrc] = useState(heart);

    const handleClick = () => {
        if (imageSrc === heart) {
            setImageSrc(action_heart)
        } else {
            setImageSrc(heart)
        }
    }

    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <div className={scss.text}>
                    <div className={scss.text__txt}>
                        <p>Featured Jobs</p>
                    </div>
                    <h3>Jobs available apply to Editorial Specialist, Account Manager, Human Resources Specialist and more!</h3>
                </div>
                <div className={scss.cards}>
                    {
                        FeaturedJobsData.map(item => (
                            <div className={scss.card} key={item.id}>
                                <div className={scss.img}>
                                    <img className={scss.img__logo} src={item.image} alt="icon" />
                                    <img className={scss.img__icon} src={imageSrc} onClick={handleClick} alt="icon" />
                                </div>
                                <div className={scss.infa}>
                                    <div className={scss.infa__text}>
                                        <h6>{item.title}</h6>
                                        <p>{item.description}</p>
                                        <div className={scss.text__item}>
                                            <img src={location} alt="icon" />
                                            <p>{item.city}</p>
                                        </div>
                                    </div>
                                    <p>{item.data}</p>
                                </div>
                                <div className={scss.line}></div>
                                <div className={scss.infa2}>
                                    <div className={scss.infa2_top}>
                                        <div className={scss.top_left}>
                                            <img src={step} alt="icon" />
                                            <p>{item.year}</p>
                                        </div>
                                        <div className={scss.top_right}>
                                            <img src={time} alt="icon" />
                                            <p>{item.timee}</p>
                                        </div>
                                    </div>
                                    <div className={scss.infa2_bottom}>
                                        <div className={scss.bottom_left}>
                                            <img src={money} alt="icon" />
                                            <p>{item.moneyy}</p>
                                        </div>
                                        <div className={scss.bottom_right}>
                                            <img src={person} alt="icon" />
                                            <p>{item.personn}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button> View All Jobs <img src={strelka} alt="" /></button>
            </div>
        </div>
    )
}

export default FeaturedJobs