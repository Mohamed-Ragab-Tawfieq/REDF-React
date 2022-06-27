import React from 'react'
import { NavLink } from 'react-router-dom';
import printIcon from '../../../assets/images/icons/print.svg';

function Breadcrumb() {
    return (
        <div className="breadcrumb-wrap">
            <nav aria-label="breadcrumb" className='breadcrumb-wrap'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink to="/">المواعيد</NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page">طلبات الحجز</li>
                </ol>

                <div className="actions">
                    <button className='btn excel-btn'>تصدير كملف Excel</button>
                    <button className='btn print-btn'>طباعة <img src={printIcon} alt="" /></button>
                </div>
            </nav>
        </div>
    )
}

export default Breadcrumb