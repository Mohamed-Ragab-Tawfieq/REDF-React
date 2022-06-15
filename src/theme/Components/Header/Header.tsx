import React from 'react'
import { NavLink } from 'react-router-dom';

import printIcon from '../../../assets/images/icons/print.svg';

function Header() {
    return (
        <header>
            <nav aria-label="breadcrumb" className='breadcrumb-wrap'>
                <h3 className='title'>طلبات حجز مواعيد بالفروع</h3>

                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink to="/">المواعيد</NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page">طلبات الحجز</li>
                </ol>
            </nav>

            <div className="actions">
                <button className='btn excel-btn'>تصدير كملف Excel</button>
                <button className='btn print-btn'>طباعة <img src={printIcon} alt="" /></button>
            </div>
        </header>
    )
}

export default Header