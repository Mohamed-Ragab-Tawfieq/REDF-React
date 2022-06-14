import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/images/logo.svg';
import HomeIcon from '../../assets/images/icons/home.svg';
import bookmarkIcon from '../../assets/images/icons/bookmark.svg';
import message from '../../assets/images/icons/message.svg';
import settings from '../../assets/images/icons/settings.svg';
import notification from '../../assets/images/icons/notification.svg';
import stats from '../../assets/images/icons/stats.svg';
import user from '../../assets/images/icons/profile.svg';
import profile from '../../assets/images/profile.png';
import chevronLeft from '../../assets/images/icons/chevron-left.svg';

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

                <button className={`btn toggle navbar-toggler ${toggled ? "collapsed" : ""}`} onClick={toggleMenu}>
                    <img className='d-none d-md-block' src={chevronLeft} alt="" />
                    <span className='navbar-toggler-icon'></span>
                </button>

                <ul className='menu'>
                    <li className='active'>
                        <NavLink to="/">
                            <img src={HomeIcon} alt="" />
                            <span className='tooltip-text'>HomeIcon</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img src={bookmarkIcon} alt="" />
                            <span className='tooltip-text'>bookmarkIcon</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img src={message} alt="" />
                            <span className='tooltip-text'>message</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img src={settings} alt="" />
                            <span className='tooltip-text'>settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img src={notification} alt="" />
                            <span className='tooltip-text'>notification</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img src={stats} alt="" />
                            <span className='tooltip-text'>stats</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img src={user} alt="" />
                            <span className='tooltip-text'>user</span>
                        </NavLink>
                    </li>
                    <li className='profile'>
                        <NavLink to="/">
                            <img src={profile} alt="" />
                            <span className='tooltip-text'>profile</span>
                        </NavLink>
                    </li>
                </ul>

                <div className='sub-menu'>
                    <h6 className='title'>المواعيد</h6>

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