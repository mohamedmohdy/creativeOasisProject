import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Nav.css"

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 start-0 w-100 z-3">
      <div className="container-fluid">
        <a className="navbar-brand text-capitalize" href="#">creative oasis<br/>واحة الابداع </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to={"/"} className='link-underline'>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">من نحن </a>
              </li>
            </Link>
           <Link to={"/services"} className='link-underline' >
            <li className="nav-item">
              <a className="nav-link" href="#">الخدمات</a>
            </li>
            </Link>
            <Link to={"/Prices"} className='link-underline'>
            <li className="nav-item">
              <a className="nav-link" href="#">الانشطة</a>
            </li>
            </Link>
            <Link to={"/Contact"} className='link-underline'>
            <li className="nav-item">
              <a className="nav-link" href="#">تواصل معنا</a>
            </li>
            </Link>

          </ul>
          
        </div>
      </div>
    </nav>
  )
}

export default Nav