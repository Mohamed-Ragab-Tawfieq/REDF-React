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
                <button type='button' className='btn save' data-bs-toggle="modal" data-bs-target="#saveModal">حفظ التعديلات</button>
                <button type='button' className='btn back'>رجوع</button>
            </div>

            <div className="modal fade" id="saveModal" tabIndex={-1} aria-labelledby="saveModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReserveSettings