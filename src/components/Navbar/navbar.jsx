import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <header
        id='header'
        className='header d-flex align-items-center fixed-top'
      >
        <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
          <a href='index.html' className='logo'>
            <h1 className='sitename'>IEEE Link</h1>
          </a>

          <nav id='navmenu' className='navmenu'>
            <ul>
              <li>
                <a href='index.html'>Home</a>
              </li>
              <li>
                <a href='about.html' className='active'>
                  About
                </a>
              </li>
              <li>
                <a href='services.html'>Services</a>
              </li>
              <li>
                <a href='pricing.html'>Pricing</a>
              </li>
              <li>
                <a href='contact.html'>Contact</a>
              </li>
            </ul>
            <i className='mobile-nav-toggle d-xl-none bi bi-list'></i>
          </nav>

          <div className='social-links'>
            <a href='#' className='facebook'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
              </svg>
            </a>
            <a href='#' className='instagram'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
              </svg>
            </a>
            <a href='#' className='linkedin'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                <rect x='2' y='9' width='4' height='12'></rect>
                <circle cx='4' cy='4' r='2'></circle>
              </svg>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
