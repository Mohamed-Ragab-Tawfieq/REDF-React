import React from 'react'

function BranchesSettings() {
    return (
        <div className="card">
            <div className="card-header">
                <div className='d-flex'>
                    <h5>فروع خدمة حجز موعد</h5>

                    <small>نتيجة البحث</small>
                    <strong className='number'>6</strong>
                    <small>من</small>
                    <strong className='number'>١٢٣٤٤٥٦</strong>
                </div>

                <div className='row'>
                    <select className="form-select col">
                        <option selected>فلترة بالأحدث</option>
                        <option selected>فلترة بالأقدم</option>
                    </select>

                    <button className='btn col'>إعدادات عامة</button>
                </div>
            </div>

            <div className="card-body p-0">
                <table className="table table-borderless table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">الحالة</th>
                            <th scope="col">اسم الفرع</th>
                            <th scope="col">عدد الحجوزات</th>
                            <th scope="col">العنوان</th>
                            <th scope="col">عدد الموظفين</th>
                            <th scope="col">عدد الخدمات</th>
                            <th scope="col">الإجراء</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className="switch-wrap">
                                    <input type="checkbox" className='switch-btn' />
                                    <label className="switch-label"></label>
                                </div>
                            </td>
                            <td>فرع المدينة المنورة</td>
                            <td className='light'>134</td>
                            <td className='light'>مكة - شارع الملك فيصل - 128</td>
                            <td className='light'>240</td>
                            <td>7</td>
                            <td><button className='btn btn-primary'>عرض التفاصيل</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="switch-wrap">
                                    <input type="checkbox" className='switch-btn' />
                                    <label className="switch-label"></label>
                                </div>
                            </td>
                            <td>فرع المدينة المنورة</td>
                            <td className='light'>134</td>
                            <td className='light'>مكة - شارع الملك فيصل - 128</td>
                            <td className='light'>240</td>
                            <td>7</td>
                            <td><button className='btn btn-primary'>عرض التفاصيل</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BranchesSettings