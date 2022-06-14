import React from 'react'
import searchIcon from '../../assets/images/icons/Search.svg'

function Filters() {
    return (
        <div className="filters">
            <div className="filter search">
                <label>ابحث عن كود الموعد, اسم الخدمة أو اسم الفرع</label>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="ابحث" />
                    <span className="input-group-text"><img src={searchIcon} alt="" /></span>
                </div>
            </div>
            <div className="filter">
                <label>الخدمة</label>
                <select className="form-select" aria-label="select">
                    <option selected>الكل</option>
                    <option value="1">فك رهن</option>
                    <option value="2">طلب تمويل</option>
                </select>
            </div>
            <div className="filter">
                <label>الفرع</label>
                <select className="form-select" aria-label="select">
                    <option selected>الكل</option>
                    <option value="1">جدة</option>
                    <option value="2">الرياض</option>
                </select>
            </div>
            <div className="filter">
                <label>التاريخ من/إلي</label>
                <input type="text" className='form-control' />
            </div>
        </div>
    )
}

export default Filters