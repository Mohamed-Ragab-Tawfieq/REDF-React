import React from 'react'

function BranchDetails() {
    return (
        <>
            <div className="card style-2">
                <div className="card-header">
                    <h5>خدمات الفرع</h5>
                    <div className="active-all">
                        <button className='btn'>تفعيل الكل</button>
                        <button className='btn'>إلغاء تفعيل الكل</button>
                    </div>
                </div>

                <div className="card-body grid-5">
                    <div className="switch-item">
                        <span>خدمة تحديث صك</span>
                        <div className="switch-wrap">
                            <input type="checkbox" className='switch-btn' />
                            <label className="switch-label"></label>
                        </div>
                    </div>
                    <div className="switch-item">
                        <span>خدمة تحديث صك</span>
                        <div className="switch-wrap">
                            <input type="checkbox" className='switch-btn' />
                            <label className="switch-label"></label>
                        </div>
                    </div>
                    <div className="switch-item">
                        <span>خدمة تحديث صك</span>
                        <div className="switch-wrap">
                            <input type="checkbox" className='switch-btn' />
                            <label className="switch-label"></label>
                        </div>
                    </div>
                    <div className="switch-item">
                        <span>خدمة تحديث صك</span>
                        <div className="switch-wrap">
                            <input type="checkbox" className='switch-btn' />
                            <label className="switch-label"></label>
                        </div>
                    </div>
                    <div className="switch-item">
                        <span>خدمة تحديث صك</span>
                        <div className="switch-wrap">
                            <input type="checkbox" className='switch-btn' />
                            <label className="switch-label"></label>
                        </div>
                    </div>
                    <div className="switch-item">
                        <span>خدمة تحديث صك</span>
                        <div className="switch-wrap">
                            <input type="checkbox" className='switch-btn' />
                            <label className="switch-label"></label>
                        </div>
                    </div>
                    <div className="switch-item">
                        <span>خدمة تحديث صك</span>
                        <div className="switch-wrap">
                            <input type="checkbox" className='switch-btn' />
                            <label className="switch-label"></label>
                        </div>
                    </div>
                    <div className="switch-item">
                        <span>خدمة تحديث صك</span>
                        <div className="switch-wrap">
                            <input type="checkbox" className='switch-btn' />
                            <label className="switch-label"></label>
                        </div>
                    </div>
                    <div className="switch-item">
                        <span>خدمة تحديث صك</span>
                        <div className="switch-wrap">
                            <input type="checkbox" className='switch-btn' />
                            <label className="switch-label"></label>
                        </div>
                    </div>
                    <div className="switch-item">
                        <span>خدمة تحديث صك</span>
                        <div className="switch-wrap">
                            <input type="checkbox" className='switch-btn' />
                            <label className="switch-label"></label>
                        </div>
                    </div>
                    <div className="switch-item">
                        <span>خدمة تحديث صك</span>
                        <div className="switch-wrap">
                            <input type="checkbox" className='switch-btn' />
                            <label className="switch-label"></label>
                        </div>
                    </div>
                    <div className="switch-item">
                        <span>خدمة تحديث صك</span>
                        <div className="switch-wrap">
                            <input type="checkbox" className='switch-btn' />
                            <label className="switch-label"></label>
                        </div>
                    </div>
                    <div className="switch-item">
                        <span>خدمة تحديث صك</span>
                        <div className="switch-wrap">
                            <input type="checkbox" className='switch-btn' />
                            <label className="switch-label"></label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card style-2">
                <div className="card-header">
                    <h5>موقع الفرع</h5>
                </div>

                <div className="card-body grid-2">
                    <div className="item">
                        <label>العنوان من خرائط جوجل</label>
                        <div className="input-group icon-end">
                            <input type="text" className="form-control" placeholder="العنوان من خرائط جوجل" value="25 شارع المادن, اسم شارع, اسم مكان, المدينة المنورة" disabled />
                            <button type='button' className="btn btn-warning input-group-text">تحديد الموقع علي الخريطة</button>
                        </div>
                    </div>
                    <div className="item">
                        <label>العنوان لفظياً</label>
                        <input type="text" className='form-control' placeholder='موظف' value="25 شارع المادن, اسم شارع, اسم مكان, المدينة المنورة" />
                    </div>
                </div>
            </div>

            <div className="card style-2 mt-4">
                <div className="card-header">
                    <h5>إعدادات أخري</h5>
                </div>

                <div className="card-body grid-3">
                    <div className="item">
                        <label>عدد الموظفين المعنيين بخدمة المواعيد المسبقة</label>
                        <input type="number" className='form-control' placeholder='موظف' value={15} disabled />
                    </div>
                    <div className="item">
                        <label>عدد العملاء المسموح لهم بحجز موعد في الفترة الواحدة</label>
                        <input type="number" className='form-control' placeholder='عميل' value={15} disabled />
                    </div>
                    <div className="item">
                        <label>المدة الزمنية لتقديم الخدمة للعميل</label>
                        <input type="number" className='form-control' placeholder='دقيقة' value={15} disabled />
                    </div>
                    <div className="item">
                        <label>الوقت المسموح لتلقي الخدمة بعد حلول وقت الموعد</label>
                        <input type="number" className='form-control' placeholder='ساعة' value={15} disabled />
                    </div>
                    <div className="item">
                        <label>عدد المواعيد المسموح للعميل بحجزها (في نفس اليوم)</label>
                        <input type="number" className='form-control' placeholder='موعد' value={15} disabled />
                    </div>
                </div>
            </div>

            <div className="action-btns">
                <button type='button' className='btn btn-grad' data-bs-toggle="modal" data-bs-target="#saveModal">حفظ التعديلات</button>
                <button type='button' className='btn back'>رجوع</button>
            </div>

            <div className="modal fade" id="saveModal" tabIndex={-1} aria-labelledby="saveModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>

                        <div className="modal-body success">
                            <p className='title'>تم حفظ التعديلات</p>
                            <p className='desc'>الرجاء المراجعة دائماً علي الإعدادات خاصتك لتقليل حدوث مشاكل</p>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">حسنا</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BranchDetails