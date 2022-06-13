import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../images/logo.svg';
import HomeIcon from '../images/icons/home.svg';
import bookmarkIcon from '../images/icons/bookmark.svg';
import message from '../images/icons/message.svg';
import settings from '../images/icons/settings.svg';
import notification from '../images/icons/notification.svg';
import stats from '../images/icons/stats.svg';
import user from '../images/icons/profile.svg';
import profile from '../images/profile.png';
import chevronLeft from '../images/icons/chevron-left.svg';

function SideMenu() {
    const [toggled, setToggleMenu] = useState(true);

    const toggleMenu = () => {
        setToggleMenu(toggled => !toggled)
    }

    return (
        <nav className={`side-menu ${toggled ? "toggled" : ""}`}>
            <div className="brand-wrap">
                <NavLink to="/" className='brand'>
                    <img src={logo} alt="" />
                    <h6>صندوق التنمية العقارية</h6>
                    <small>حساب مدير خدمة حجز موعد</small>
                </NavLink>
            </div>

            <div className="menu-wrap">
                <ul className='menu'>
                    <li className='active'><NavLink to="/"><img src={HomeIcon} alt="" /></NavLink></li>
                    <li><NavLink to="/"><img src={bookmarkIcon} alt="" /></NavLink></li>
                    <li><NavLink to="/"><img src={message} alt="" /></NavLink></li>
                    <li><NavLink to="/"><img src={settings} alt="" /></NavLink></li>
                    <li><NavLink to="/"><img src={notification} alt="" /></NavLink></li>
                    <li><NavLink to="/"><img src={stats} alt="" /></NavLink></li>
                    <li><NavLink to="/"><img src={user} alt="" /></NavLink></li>
                    <li className='profile'><NavLink to="/"><img src={profile} alt="" /></NavLink></li>
                </ul>

                <div className='sub-menu'>
                    <h6 className='title'>المواعيد</h6>
                    <button className={`btn toggle navbar-toggler ${toggled ? "collapsed" : ""}`} onClick={toggleMenu}>
                        <img className='d-none d-md-block' src={chevronLeft} alt="" />
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <ul className="list">
                        <li className='item'>طلبات الفروع لإلغاء المواعيد</li>
                        <li className='item active'>طلبات حجز مواعيد بالفروع</li>
                    </ul>

                    <div className="username">
                        <label>أحمد سمير</label>
                        <small>ahmedsamer062@gmail.com</small>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideMenu