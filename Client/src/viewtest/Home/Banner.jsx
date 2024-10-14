import React from 'react'
import './css/base.css';
import './css/banner.css';
import { FaMedal } from "react-icons/fa6";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
function Banner() {
  return (
    <div className='banner'>
      <div className='banner__main'>
        <h1 className='banner__main-textmain'>Mobile Hub - Đứng đầu thị trường điện thoại</h1>
        <div className='banner__main-dash'></div>
        <p className='banner__main-textchild'>
          Trải nghiệm sự khác biệt từ <span>hơn 1000+</span> điện thoại trên Việt Nam
        </p>
      </div>
      <div className='banner__list'>
        <div className='banner__list-text'>
          <p>
            Chào mừng bạn đến với Mobile Hub - Đứng đầu Việt Nam
          </p>
        </div>
        <div className='banner__list-usage'>
        </div>
        <div className='banner__list-point'>
          <p className='banner__list-point-text'>
            Trải Nghiệm Thôi</p>
        </div>
        <ScrollLink to='content' smooth={true} duration={800}>
          <button className='banner__list-search'>
            <h3>Tìm điện thoại</h3>
          </button>
      </ScrollLink>
      </div>
    </div>
  )
}

export default Banner
