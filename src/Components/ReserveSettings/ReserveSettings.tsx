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
                <button className='btn save'>حفظ التعديلات</button>
                <button className='btn back'>رجوع</button>
            </div>
        </>
    )
}

export default ReserveSettings