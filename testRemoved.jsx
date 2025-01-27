import React from 'react'
import { useState } from 'react'

const testRemoved = () => {
  const [formDate, SetDate] = useState({
    nameFather: "",
    nameChild: "",
    phone: "",
    message: "",
    age: ""
  })
  const [errors, Seterrors] = useState({})

  const handelcange = (e) => {
    const { name, value } = e.target;
    SetDate((prevstate) => ({
      ...prevstate,
      [name]: value,
    }))
    Seterrors((prevErroer) => ({
      ...prevErroer,
      [name]: validateField(name, value)
    }))
  }

  const validateField = (filed, value) => {
    let erros = "";
    if (filed == "nameFather") {
      if (!value.trim()) {
        erros = "عاوزين نتشرف با اسم حضرتك 😅"
      }
      else if (value.length > 11) {
        erros = "اي يا باشا انتا كاتب اسم العيلة كلها ولا اي 😅"
      }
    }
    return erros;

  }

  const validateForm = () => {
    const newErros = {};
    Object.keys(formDate).forEach((filed) => {
      const erros = validateField(filed, formDate[filed]);
      if (erros) newErros[filed] = erros;
    })
    return newErros;
  }

  const handelSubmite = (e) => {
    e.preventDefault();
    const newErors = validateForm();
    if (Object.keys(newErors).length > 0) {
      Seterrors(newErors);
      console.log("errors", newErors)
      return;
    }

    fetch("https://formspree.io/f/xeoejgzg", {
      method: "POST",
      body: JSON.stringify(formDate),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      if (res.status == 200) {
        console.log("success")
        SetDate({
          nameFather: "",
          nameChild: "",
          phone: "",
          message: "",
          age: ""
        })
        Seterrors({})
      }
      else {
        throw new Error("Failed to send data")
      }
    })
      .catch((error) => {
        console.log(error)
      })
  }





  return (
    <div>
      <form onSubmit={handelSubmite} method='POST'>
        <label htmlFor="">nameFather</label>
        <input
          type="text"
          name='nameFather'
          onChange={handelcange} />
        <label htmlFor=""> nameChild</label>
        <input type="text" name='nameChild' onChange={handelcange} />
        <label htmlFor="">phone</label>
        <input type="number" name='phone' onChange={handelcange} />
        <label htmlFor="">message</label>
        <input type="text" name='message' onChange={handelcange} />
        <label htmlFor="">age</label>
        <input type="number" name='age' onChange={handelcange} />
      </form>
    </div>
  )
}

export default testRemoved
