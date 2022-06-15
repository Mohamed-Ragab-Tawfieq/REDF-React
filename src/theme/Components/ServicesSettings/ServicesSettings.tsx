import React from 'react'

function ServicesSettings() {
    return (
        <div className="card">
            <div className="card-header">
                <h5>الخدمات المتاح حجزها</h5>

                <select className="form-select">
                    <option selected>فلترة بالأحدث</option>
                    <option selected>فلترة بالأقدم</option>
                </select>
            </div>

            <div className="card-body p-0">
                <table className="table table-borderless table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">الحالة</th>
                            <th scope="col">اسم الخدمة</th>
                            <th scope="col">وصف الخدمة</th>
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
                            <td>خدمة تحديث صك</td>
                            <td className='light'>وصف لخدمة تحديث صك وصف لخدمة تحديث صك وصف لخدمة تحديث صك وصف لخدمة تحديث وصف لخدمة وصف لخدمة تحديث صك وصف لخدمة تحديث صك وصف لخدمة تحديث</td>
                        </tr>

                        <tr>
                            <td>
                                <div className="switch-wrap">
                                    <input type="checkbox" className='switch-btn' />
                                    <label className="switch-label"></label>
                                </div>
                            </td>
                            <td>خدمة فك رهن </td>
                            <td className='light'>وصف لخدمة تحديث صك وصف لخدمة تحديث صك وصف لخدمة تحديث صك وصف لخدمة تحديث وصف لخدمة وصف لخدمة تحديث صك وصف لخدمة تحديث صك وصف لخدمة تحديث</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ServicesSettings