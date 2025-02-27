import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Contact.css";
import oasisZone from "../../public/images/oasisZone.png";
import confetti from 'canvas-confetti';


const Contact = () => {
  const [formDate, setFormDate] = useState({
    nameFather: "",
    nameChild: "",
    phone: "",
    message: "",
    age: ""
  });

  const [errors, setErrors] = useState({});

  const validateField = (field, value) => {
    let error = "";
    if (field === "nameFather") {
      if (!value.trim()) {
        error = "عاوزين نتشرف با اسم حضرتك 😅";
      }
      else if (typeof value !== "string" || !isNaN(value)) {
        error = "اكتب الاسم بتكتب هنا رقم لي هزعل منك😅";
      }
      else if (value.length > 17) {
        error = "اي يا باشا انتا كاتب اسم العيلة كلها ولا اي 😅";
      }
      else if (!/^[a-zA-Z\u0600-\u06FF\s]+$/.test(value.trim())) {
        error = "متكتبش رموز اكتب اسمك سهلة خالص😅";
      }
    }
    if (field === "phone") {
      if (!value.trim()) {
        error = "إطب احنا هنكلمك ازاي من غير الرقم  😅";
      } if (value.length < 11) {
        error = "رقم الموبايل لازم يكون 11 رقم، مش أقل! 📱";
      } else if (value.length > 11) {
        error = "اكتب الرقم صح هو اخترعو رقم 12 رقم؟؟ 🤔";
      } else if (!/^01[0-2,5]{1}[0-9]{8}$/.test(value)) {
        error = "اكتب رقم موبايل مصري صحيح (يبدأ بـ 010، 011، 012، أو 015). 🧐";
      }

    }
    if (field === "nameChild") {
      if (!value.trim()) {
        error = "اسم الكتكوت الصغير ال هينورنا ! 😅";
      }
      else if (value.length > 12) {
        error = "اسم الطفل ليس طويل جداً! 😅";
      }
      else if (typeof value !== "string" || !isNaN(value)) {
        error = "انتا مصعبها علينا لية اكتب اسم الطفل😅";
      }
      else if (!/^[a-zA-Z\u0600-\u06FF\s]+$/.test(value.trim())) {
        error = "متكتبش رموز اكتب اسم الطفل سهلة خالص😅";
      }

    }
    if (field === "age") {
      if (!value.trim()) {
        error = "متنساش سن الكتكوت الصغير عشان ميزعلش منك ! 😅";
      }
      else if (value < 0) {
        error = "بزمتك في عمر بالسالب ياجدع ؟ 😂";
      }
      else if (value == 0) {
        error = "انتا داخل تختبرني بقي ! 😅";
      }
      else if (value > 15) {
        error = "يباشا انتا كبير وهنجوزك طفل اي؟! 😂";
      }
    }
    if (field === "message" && !value.trim()) {
      error = "نسيت هتعلم ابنك اي طب دي تيجي؟ 😅";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // تحديث القيمة
    setFormDate((prevState) => ({
      ...prevState,
      [name]: value
    }));

    // إزالة الخطأ عند التصحيح
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value)
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formDate).forEach((field) => {
      const error = validateField(field, formDate[field]);
      if (error) newErrors[field] = error;
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // التحقق من الأخطاء
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("مش معقول كده! املأ الحقول بسرعة قبل ما يزعل الطفل منك! 😅", { position: "top-right" });
      return;
    }
  
    console.log("Form Data to be sent:", formDate); // تحقق من البيانات قبل الإرسال
  
    // عرض توست "جاري الإرسال..."
    const loadingToastId = toast.loading("جاري الإرسال...", { position: "top-right", autoClose: false });
  
    // إرسال البيانات
    fetch("https://formspree.io/f/xeoejgzg", {
      method: "POST",
      body: JSON.stringify(formDate),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to send data");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Response from server:", data); // تحقق من الاستجابة
        
        // بعد 3 ثوانٍ، إخفاء توست "جاري الإرسال..." وإظهار توست "تم الإرسال بنجاح!"
        setTimeout(() => {
          toast.dismiss(loadingToastId); // إخفاء توست "جاري الإرسال..."
          toast.success("  تم إرسال النموذج بنجاح! وسوف يتم التواصل معك 🎉", { position: "top-right" });
        }, 1000);
  
        // إعداد تأثير الكونفيتي المتكرر
        const duration = 5000; // مدة الكونفيتي (5 ثوانٍ)
        const animationEnd = Date.now() + duration;
  
        const interval = setInterval(() => {
          if (Date.now() > animationEnd) {
            clearInterval(interval); // إيقاف الكونفيتي بعد انتهاء المدة
            return;
          }
  
          // إعداد كونفيتي بمواقع عشوائية
          confetti({
            particleCount: 30, // عدد القطع في كل مرة
            spread: 360, // مدى الانتشار
            startVelocity: 40, // السرعة الابتدائية
            origin: {
              x: Math.random(), // موضع أفقي عشوائي
              y: Math.random(), // موضع رأسي عشوائي
            },
            zIndex: 999, // التأثير فوق جميع العناصر
          });
        }, 300); // تشغيل الكونفيتي كل 300 مللي ثانية
  
        // تفريغ الحقول بعد الإرسال الناجح
        setFormDate({
          nameFather: "",
          nameChild: "",
          phone: "",
          message: "",
          age: "",
        });
        setErrors({}); // إزالة الأخطاء بعد الإرسال الناجح
      })
      .catch((err) => {
        console.error("Error during submission:", err);
        toast.error("حدث خطأ أثناء الإرسال. حاول مرة أخرى.", { position: "top-right" });
      });
  };

  return (
    <>
      <section className="container contact-container contact">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 img-fluid">
            <img src={oasisZone} alt="Oasis Zone"  />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <form onSubmit={handleSubmit} method="POST">
              <h2>سجل الكتكوت الصغير معانا💖🧑</h2>

              <label>اسم ولي الامر</label>
              <input
                type="text"
                name="nameFather"
                className={`form-control ${errors.nameFather ? 'is-invalid' : formDate.nameFather ? 'is-valid' : ''}`}
                value={formDate.nameFather}
                onChange={handleChange}
              />
              {errors.nameFather && <p className="text-danger">{errors.nameFather}</p>}

              <label>رقم الهاتف</label>
              <input
                type="number"
                name="phone"
                className={`form-control ${errors.phone ? 'is-invalid' : formDate.phone ? 'is-valid' : ''}`}
                value={formDate.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-danger">{errors.phone}</p>}

              <label>اسم الطفل</label>
              <input
                type="text"
                name="nameChild"
                className={`form-control ${errors.nameChild ? 'is-invalid' : formDate.nameChild ? 'is-valid' : ''}`}
                value={formDate.nameChild}
                onChange={handleChange}
              />
              {errors.nameChild && <p className="text-danger">{errors.nameChild}</p>}

              <label>سن الطفل</label>
              <input
                type="number"
                name="age"
                className={`form-control ${errors.age ? 'is-invalid' : formDate.age ? 'is-valid' : ''}`}
                value={formDate.age}
                onChange={handleChange}
              />
              {errors.age && <p className="text-danger">{errors.age}</p>}

              <label>مهتم تعلم ابنك اي معانا (الكورسات في صفحة الخدمات)</label>
              <input
                type="text"
                name="message"
                className={`form-control ${errors.message ? 'is-invalid' : formDate.message ? 'is-valid' : ''}`}
                value={formDate.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-danger">{errors.message}</p>}

              <button className="btn btn-primary ">انطلق في رحلتك الآن 🚀</button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
