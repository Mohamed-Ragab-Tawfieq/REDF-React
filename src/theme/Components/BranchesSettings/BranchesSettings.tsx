import React from 'react'
import { Link } from 'react-router-dom'

import markerIcon from '../../../assets/images/icons/modals/marker.svg'
import handIcon from '../../../assets/images/icons/modals/hand.svg'

function BranchesSettings() {
    return (
        <>
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
                                <td> <button type='button' className='btn btn-grad rounded-pill' data-bs-toggle="modal" data-bs-target="#branchDetailsModal">عرض التفاصيل</button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div className="modal fade long" id="branchDetailsModal" tabIndex={-1} aria-labelledby="branchDetailsLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">X</button>
                            <h4>تفاصيل الفرع</h4>
                            <div className="switch-wrap">
                                <input type="checkbox" className='switch-btn' />
                                <label className="switch-label"></label>
                            </div>
                        </div>

                        <div className="modal-body">
                            <div className="appoints-count">
                                <strong className='text-primary'>124</strong>
                                <span>ميعاد محجوز</span>
                                <Link to="/"> عرض <small className='caret'>&#9664;</small></Link>
                            </div>

                            <div className="item">
                                <span className="icon"><img src={markerIcon} alt="" /></span>
                                <label className='text-primary'>الفرع</label>
                                <span className='item-desc'>فرع المدينة المنورة بالباطح</span>
                            </div>


                            <div className="map">
                                <span className="text-primary">515 شارع محمد الطناني, الباطح, المدينة المنورة</span>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"></iframe>

                                <Link className="btn btn-primary" to="/">عرض موقع الفرع</Link>
                            </div>

                            <div className="item">
                                <span className="icon"><img src={handIcon} alt="" /></span>
                                <label className='text-primary'>الخدمات (7)</label>
                                <span className='item-desc'>تحديث الصك, خدمة ثانية, خدمة ثالثة, تحديث الصك, خدمة ثانية, خدمة ثالثة,  تحديث الصك, خدمة ثانية, خدمة ثالثة,  تحديث الصك, خدمة ثانية, خدمة ثالثة, </span>
                            </div>

                            <hr />

                            <strong className='text-primary'><small className='caret'>&#9664;</small> إعدادات أخري</strong>

                            <div className="input-item">
                                <label>عدد الموظفين المعنيين بخدمة المواعيد المسبقة</label>
                                <input type="text" className='form-control' placeholder="موظف" value={24} readOnly />
                            </div>
                            <div className="input-item">
                                <label>عدد العملاء المسموح لهم بحجز موعد في الفترة الواحدة</label>
                                <input type="text" className='form-control' placeholder="موظف" value={1} readOnly />
                            </div>
                            <div className="input-item">
                                <label>المدة الزمنية لتقديم الخدمة للعميل</label>
                                <input type="text" className='form-control' placeholder="موظف" value={15} readOnly />
                            </div>
                            <div className="input-item">
                                <label>الوقت المسموح لتلقي الخدمة بعد حلول وقت الموعد</label>
                                <input type="text" className='form-control' placeholder="موظف" value={1} readOnly />
                            </div>
                            <div className="input-item">
                                <label>عدد المواعيد المسموح للعميل بحجزها (في نفس اليوم)</label>
                                <input type="text" className='form-control' placeholder="موظف" value={1} readOnly />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-grad" data-bs-dismiss="modal">تعديل إعدادات الفرع</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BranchesSettings