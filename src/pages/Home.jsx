import React from 'react'
import "../styles/Home.css"
import "../responsev/homeRespone.css"
import Kids from "../../public/images/kids-mainTitle.png"
import cap from "../../public/images/cap.png"
import cloud from "../../public/images/cloud.png"
import cloudlg from "../../public/images/cloud-lg.png"
import pencil from "../../public/images/icons/pencile.png"
import hand from "../../public/images/icons/hand.png"
import bag from "../../public/images/icons/bag.png"
import kids_save from "../../public/images/kids_save.png"
import books from "../../public/images/icons/books.png"
import box from "../../public/images/icons/box.webp"
import fire from "../../public/images/fire.png"

const Home = () => {
  return (
    <>
      <section className="container customer-container">
        <section className='main-title row'>
          <div className="content col-lg-5 col-sm-12 col-md-12" >
            <div className="title-content">
              <h1 >أهلاً بكم في<br /><span style={{color:"#88D5E8" , fontWeight:"bold"}}>حضانة واحة الابداع</span><br /></h1>
              <p>حيث ينمو الطفل بحب ورعاية</p>
            </div>
            <div className="description">
              <span>تأسست حضانة واحة الابداع لكي تساعد الاطفال علي اكتساب المهارات الاساسية والابداعية لكي تساعد الطفل علي الابداع والتفكير .</span>
            </div>
          </div>
          <div className="imgKids col-lg-7 col-sm-12 col-md-12" >
            <img src={Kids} alt="kids" loading='lazy' className='img-fluid' />
            <img src={cap} className='img-fluid cap'  loading='lazy' alt="cap" />
            <img src={cloud} className='img-fluid cloud' alt="cloud"  />
            <img src={cloudlg} className='img-fluid cloud-lg' alt="cloudlg"  />

          </div>
        </section>
        <section className='Feature row ' data-aos="fade-left">
          <div className="futherinfo-one col-lg-4 col-sm-12">
            <div className="imag ">
              <img src={pencil} className='img-fluid' alt="pencil" loading='lazy' />
            </div>
            <div className="info">
              <h3>تحسين نمو وتطور الأطفال وصقل مواهبهم استناداً إلى أفضل المناهج التعليمية.</h3>
            </div>

          </div>
          <div className="futherinfo-two col-lg-4 col-sm-12">
            <div className="imag ">
              <img src={hand} className='img-fluid' alt="hand" loading='lazy' />
            </div>
            <div className="info">
              <h3>تعزيز سلوكيات الأطفال وتنمية مواهبهم، ضمن بيئة ملهمة تقدّم فرصاً تعليمية متكافئة.</h3>
            </div>

          </div>
          <div className="futherinfo-three col-lg-4 col-sm-12">
            <div className="imag ">
              <img src={bag} className='img-fluid' alt="bag" loading='lazy' />
            </div>
            <div className="info">
              <h3>تقديم خدمات متميّزة للأطفال وأولياء أمورهم، وفقاً لأعلى معايير الجودة والشفافية.</h3>
            </div>

          </div>
        </section>
        <section className='moreInfoForBlace row' data-aos="fade-left">
          <div className="moreInfoForBlace-img col-lg-6 col-sm-12 col-md-12">
            <img src={kids_save} alt="kids_save" className='img-fluid kids' loading='lazy' />
            <img src={books} className='img-fluid book' alt="books" loading='lazy' />
          </div>
          <div className="moreInfoForBlace-content col-lg-6 col-sm-12 col-md-12">
            <h2>حول حضانة واحة الابداع</h2>
            <p>نؤمن في حضانات واحة الابداع بأهمية التعليم في مرحلة الطفولة المبكرة وأثره في وضع الأساس لحياة عنوانها النجاح والسعادة. إن بيئتنا الحاضنة، وخبرة معلماتنا، والبرامج الشاملة التي نقدّمها، تخلق مكاناً يمكن أن تزدهر فيه العقول اليافعة وتصل إلى إمكاناتها الكاملة.</p>
          </div>
        </section>
        <section className="target-blace row" data-aos="zoom-in">
          <div className="target-teaching col-lg-6 col-md-6 col-sm-12">
            <span>رؤيتنا</span>
            <h2>تعزيز جودة التعليم المبكر<br/> في واحة الابداع </h2>
            <p>بما يضمن تقديم تجربة رعاية وتعلّم متكاملة وشمولية للأطفال من مختلف القدرات، تغرس فيهم حب التعلّم مدى الحياة.</p>
          </div>
          <div className="target-teaching-tow col-lg-6 col-md-6 col-sm-12">
            <span>رسالتنا</span>
            <h2>تأسيس جيل من الرواد </h2>
            <p>المبدعين في بيئة خلّاقة تجمع بين الرعاية، والتعليم، والريادة، والابتكار.</p>
          </div>
        </section>
        <section className='GoolsSpace' data-aos="zoom-in">
          <div className="titleGools row">
            <span className='col-12'>أهدافنا</span>
          </div>
          <div className="contentGools row">
            <div className="items col-lg-3 col-md-12 col-sm-12">
              <div className="imageGools">
                <img src={box} alt="" />
              </div>
              <div className="content-items">
                <h3>تطوير متكامل</h3>
                <p>تحسين نمو وتطور ومعرفة الأطفال استناداً إلى أفضل المناهج التعليمية، مع تعزيز سلوكياتهم وتنمية مواهبهم، ضمن بيئة تقدّم فرصاً تعليمية متكافئة.</p>
              </div>
            </div>
            <div className="items col-lg-3 col-md-12 col-sm-12">
              <div className="imageGools">
                <img src={pencil} alt="" />
              </div>
              <div className="content-items">
                <h3>شراكة فاعلة</h3>
                <p>تقديم خدمات متميّزة للأطفال وأولياء أمورهم، وفقاً لأعلى معايير الجودة والشفافية، وتمكين رأس المال البشري ليصبح عنصراً إيجابياً في مجتمعه.</p>
              </div>
            </div>
            <div className="items col-lg-3 col-md-12 col-sm-12">
            <div className="imageGools">
                <img src={bag} alt="" />
              </div>
              <div className="content-items">
                <h3>بيئة مبتكرة</h3>
                <p>توفير بيئة داعمة للمبدعين والمبتكرين، ورعاية ثقافة الريادة والابتكار، وتحويل الحضانات إلى مجتمع نابض بالحيوية، والحركة، والنشاط.</p>
              </div>
            </div>
            <div className="items col-lg-3 col-md-12 col-sm-12">
            <div className="imageGools">
                <img src={hand} alt="" />
              </div>
              <div className="content-items">
                <h3>خدمات متميزة</h3>
                <p>تعزيز شراكتنا الفاعلة مع أولياء أمور الأطفال، مع تحفيز وتمكين أبنائهم الصغار من الوصول إلى مستقبل حافل بالنجاحات والإنجازات.</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className='ArtWlaaGirl row'>
        <div className="content col-lg-6 col-sm-12">
        <span>تعليم مبتكر</span>
          <h2>منهج تعليمي متكامل</h2>
          <p>تقدّم حضانة واحة الابداع منهاجاً تعليمياً متفرداً بُني وفقاً لأحدث الدراسات العالمية في مجال التربية للطفولة المبكرة، بما يدعم التطور المستمر لقدرات الأطفال ويعزز مهاراتهم ومواهبهم الإبداعية، ويراعي الاحتياجات الفردية لكل طفل، ويضمن تطور مهاراته، وتنمية معارفه، في بيئة تحفظ له صحته الجسدية والنفسية، وتصون حقوقه وكرامته كفرد مؤثر في المجتمع.</p>
        </div>
      </section>
      <div className="container "> 
        <div className="program">
          <img src={fire} alt="fire" loading='lazy' />
          <span>برامجنــــــا</span>
          <h2>برامج تعليمية متخصصة</h2>
          <p>صممت برامجنا خصيصاً لتلبية الاحتياجات المحددة لكل فئة عمرية، بدءاً من الرُضّع وحتى رياض الأطفال.<br/> وتعمل على تشجيع الفضول والتفكير النقدي والإبداع، لإعداد الأطفال للانتقال الناجح إلى المدرسة الابتدائية وما بعدها.</p>
        </div>
      </div>
      
    </>
  )
}

export default Home
