import React from 'react';
import './css/footer.css';
import './css/base.css';
import { FaFacebookF, FaTiktok, FaFacebookMessenger } from "react-icons/fa6";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';


function Footer() {
  // const scrollToTop = () => {
  //   scroll.scrollToTop({
  //     duration: 800,
  //     delay: 0,
  //     smooth: 'easeInOutQuart',
  //   });
  // };
  return (
    <footer className='footer'>
      <div className='footer__dash'></div>
      <div className='footer__content'>
        <div className='footer__content-firt'>
        <ScrollLink to='header' smooth={true} duration={800} offset={-20} delay={100}>
          <img className='footer__content-firt-img' src='https://i.ibb.co/9W9dKYh/5.png'></img>           
      </ScrollLink>
          < div className='footer__column'>
          <div className='footer__content-firt-phone'>
            <h4 className='footer__content-firt-phone-number'>0329532910</h4>
            <p className='footer__content-firt-phone-text'>Tổng đài hỗ trợ 24/7</p>
          </div>
          <div className='footer__content-firt-email'>
            <h4 className='footer__content-firt-emai-name'>voviethung.tk@gmail.com</h4>
            <p className='footer__content-firt-email-text'>Gửi email cho Mobile Hub</p>
          </div>
          </div>
          <div className='footer__content-firt-icon'>
            <i><FaFacebookF></FaFacebookF></i>
            <i><FaTiktok></FaTiktok></i>
            <i><FaFacebookMessenger></FaFacebookMessenger></i>
          </div>
        </div>
        <ul className='footer__content-list'>
          <li className="footer__content-list-child">
            <h3 className="footer__content-list-child-name" >Chính Sách</h3>
            <div className="footer__content-list-child-text">
              <Link to="/policy" className="footer__content-list-child-text-text">Chính sách và quy định</Link>
              <Link to="/terms" className="footer__content-list-child-text-text">Nguyên tắc chung</Link>
              <Link to="/perso" className="footer__content-list-child-text-text">Chính sách bảo mật</Link>
              <Link to="/resolve" className="footer__content-list-child-text-text">Giải quyết khiếu nại</Link>
            </div>
          </li>
          <li className="footer__content-list-child">
            <h3 className="footer__content-list-child-name">Tìm Hiểu Thêm</h3>
            <div className="footer__content-list-child-text">
              <Link to='/mainhow' className="footer__content-list-child-text-text">Hướng dẫn chung</Link>
              <Link to='/book' className="footer__content-list-child-text-text">Hướng dẫn mua online</Link>
              <Link to='/paymen' className="footer__content-list-child-text-text">Hướng dẫn thanh toán</Link>
              <Link to='/regu' className="footer__content-list-child-text-text">Hỏi và trả lời</Link>
            </div>
          </li>
          <li className="footer__content-list-child footer__content-list-child-name-none">
            <h3 className="footer__content-list-child-name" >Chi Tiết</h3>
            <div className="footer__content-list-child-text">
              <Link to='/ve-xe-tot' className="footer__content-list-child-text-text">Về Mobile Hub</Link>
              {/* <Link to='/bai-viet' className="footer__content-list-child-text-text">Bài Viết Mobile Hub</Link> */}
              <Link to='/nguoi-dung' className="footer__content-list-child-text-text">Người dùng</Link>
            </div>
          </li>
          <li className="footer__content-list-child">
            <h3 className="footer__content-list-child-name" >Đối Tác</h3>
            <div className="footer__content-list-child-text">
              <p className="footer__content-list-child-text-text">Apple</p>
              <p className="footer__content-list-child-text-text">Samsung</p>
            </div>
          </li>
        </ul>
      </div>
      <div className='footer__dash'></div>
      <div className='footer__license'>
        <p className='footer__license-firt'>
        ©HungDev
        </p>
        <ul className='footer__license-last'>
          <p className="footer__license-last-text">
           1 Thành Viên</p>
          <p className="footer__license-last-text">
          Ngày code: 10-10-2024 </p>
          <p className="footer__license-last-text">
           Tryyy</p>
        </ul>
      </div>
      <div className='footer__dash'></div>
      <div className='footer__location'>
        <p className='footer__location-firt'>
        Địa chỉ:  Việt Nam
        </p>
        <ul className='footer__location-last'>
          <p className="footer__location-last-text">
          Tên TK: VO VIET HUNG</p>
          <p className="footer__location-last-text">
          Số TK: 9666629102003 </p>
          <p className="footer__location-last-text">
          MB BANK </p>
        </ul>
      </div>
      <div className='footer__img'>
        <a href='#' className='footer__img-fist'>
          <img className='footer__img-firt-img' src='https://www.mioto.vn/static/media/bocongthuong.40599f29.png'></img>
        </a>
        <ul className='footer__img-last'>
          <p className="footer__img-last-text">
          Phương thức thanh toán</p>
          <div className="footer__img-last-icon">
             <img src="https://www.mioto.vn/static/media/vnpay.780689d6.png" className="footer__img-last-icon-img">
             </img>
             <img src="https://www.mioto.vn/static/media/vnpay.780689d6.png" className="footer__img-last-icon-img">
             </img>
             <img src="https://www.mioto.vn/static/media/vnpay.780689d6.png" className="footer__img-last-icon-img">
             </img>
             <img src="https://www.mioto.vn/static/media/vnpay.780689d6.png" className="footer__img-last-icon-img">
             </img>
          </div>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
