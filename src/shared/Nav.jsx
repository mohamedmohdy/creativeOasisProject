import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Nav.css"

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 start-0 w-100 z-3">
      <div className="container-fluid">
        <a className="navbar-brand text-capitalize" href="#">creative oasis<br />واحة الابداع </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active link-underline" aria-current="page">
                من نحن
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link link-underline">
                الخدمات
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Prices" className="nav-link link-underline">
                الأنشطة
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link link-underline">
                تواصل معنا
              </Link>
            </li>
          </ul>


        </div>
      </div>
    </nav>
  )
}

export default Nav