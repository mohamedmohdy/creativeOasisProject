import React from 'react'
import funnySpace from "../../public/images/funny.png"
import "../styles/Service.css"
const Services = () => {
  return (
   <>
        <div className="container service-contan">
          <div className="row">
            <div className="col-12">
              <img src={funnySpace} alt="" />
            </div>
          </div>
          <div class="row courses">
              <div className='shape'> الحضانه   </div>
              <div className='shape'> الاسلاميات  </div>
              <div className='shape'> القران الكريم مجود ومفسر </div>
              <div className='shape'> الانجليزى  </div>
              <div className='shape'> الفرنساوي  </div>
              <div className='shape'> المانى  </div>
              <div className='shape' > هاند ميد </div>
              <div className='shape'> يوسى ماث او حساب ذهنى </div>
              <div className='shape'> الخط العربى </div>
              <div className='shape'> الرسم </div>
              <div className='shape'> كورس التاسيس ( بديل الحضانه) </div>
              <div className='shape'> كورس البرمجة للاطفال </div>
              <div className='shape'> التخاطب وتعديل السلوك وتنميه المهارات </div>
          </div>
        </div>
   </>
  )
}

export default Services
