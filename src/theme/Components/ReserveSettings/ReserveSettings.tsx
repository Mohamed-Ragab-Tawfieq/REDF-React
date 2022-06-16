import React from 'react'

function ReserveSettings() {
    return (
        <>
            <div className="card style-2">
                <div className="card-header">
                    <h5>إعدادات الحجز</h5>
                </div>

                <div className="card-body">
                    <div className="item">
                        <label>الوقت المسموح لتلقي الخدمة بعد حلول وقت الموعد</label>
                        <input type="number" className='form-control' placeholder='ساعة' />
                    </div>
                    <div className="item">
                        <label>عدد العملاء المسموح لهم بحجز موعد في الفترة الواحدة</label>
                        <input type="number" className='form-control' placeholder='ساعة' />
                    </div>
                    <div className="item">
                        <label>عدد المواعيد المسموح للعميل بحجزها (في نفس اليوم)</label>
                        <input type="number" className='form-control' placeholder='ساعة' />
                    </div>
                    <div className="item">
                        <label>المدة الزمنية لتقديم الخدمة للعميل</label>
                        <input type="number" className='form-control' placeholder='ساعة' />
                    </div>
                    <div className="item">
                        <label>الفترة المسموح بها للعميل الإلغاء/ التعديل علي موعد </label>
                        <input type="number" className='form-control' placeholder='ساعة' />
                    </div>
                    <div className="item">
                        <label>الفترة المستقبلية المسموح بها لحجز موعد</label>
                        <input type="number" className='form-control' placeholder='ساعة' />
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

export default ReserveSettings