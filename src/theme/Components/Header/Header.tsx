import React from 'react'
import { NavLink } from 'react-router-dom';

import earthIcon from '../../../assets/images/icons/earth.svg'
import notificationIcon from '../../../assets/images/icons/notification.svg'
import logoutIcon from '../../../assets/images/icons/logout.svg'
import userIcon from '../../../assets/images/profile.png'

function Header() {
    return (
        <header>
            <h3 className='page-title'>طلبات حجز مواعيد بالفروع</h3>

            <div className="notifications-wrap">
                <div className="btns-wrap btn-group">
                    <div className="btn-group">
                        <button type="button" className="btn lang-btn" id="langDrodownBtn" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={earthIcon} alt="" />
                        </button>

                        <ul className="dropdown-menu lang" aria-labelledby="langDrodownBtn">
                            <li className="dropdown-item form-check">
                                <input className="form-check-input" type="radio" name="langCheck" id="arLang" />
                                <label className="form-check-label" htmlFor="arLang">
                                    اللغة العربية
                                </label>
                            </li>
                            <li className="dropdown-item form-check">
                                <input className="form-check-input" type="radio" name="langCheck" id="enLang" />
                                <label className="form-check-label" htmlFor="enLang">
                                    اللغة الإنجليزية
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn" id="notificationsDrodownBtn" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={notificationIcon} alt="" />
                        </button>

                        <ul className="dropdown-menu notifications-menu" aria-labelledby="notificationsDrodownBtn">
                            <li className='header'>
                                <span>الإشعارات</span>
                                <small>7 جديد</small>
                            </li>
                            <li><a className="dropdown-item" href="#">
                                <span className='title'>تم قبول الإلغاء!</span>
                                <small className='desc'>لقد قمت بقبول إلغاء 24 موعد بفرع الـ...</small>
                                <small className='date'>2022/7/22</small>
                            </a></li>
                            <li className='settings'><a className="dropdown-item" href="#">
                                <span className='title'>تم تغيير إعدادات الفرع</span>
                                <small className='desc'>لقد قمت بقبول إلغاء 24 موعد بفرع الـ...</small>
                                <small className='date'>2022/7/22</small>
                            </a></li>
                            <li><a className="dropdown-item" href="#">
                                <span className='title'>تم الإلغاء!</span>
                                <small className='desc'>لقد قمت بقبول إلغاء 24 موعد بفرع الـ...</small>
                                <small className='date'>2022/7/22</small>
                            </a></li>
                            <li className='footer'><a href="" className='stretched-link'>عرض كل الإشعارات</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="profile dropdown">
                <button className="btn dropdown-toggle" type="button" id="userMenuBtn" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={userIcon} alt="" />
                    <div className="d-flex flex-column mx-3">
                        <span>أحمد سمير</span>
                        <small>مدير خدمة حجز موعد</small>
                    </div>
                </button>

                <ul className="dropdown-menu profile" aria-labelledby="userMenuBtn">
                    <li className='dropdown-item'>
                        <NavLink to="user">
                            <strong>أحمد سمير محمود علي</strong>
                            <small>مدير خدمة حجز موعد</small>
                        </NavLink>
                    </li>
                    <li className='dropdown-item email'>
                        ServiceManager@REDF.com
                    </li>
                    <li className='dropdown-item'>
                        <NavLink to="logout">
                            <img src={logoutIcon} className="logout-icon" alt="" />
                            تسجيل الخروج
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header