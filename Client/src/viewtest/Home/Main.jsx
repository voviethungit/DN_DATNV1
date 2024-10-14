import React from 'react'
import Header from './Header';
import Banner from './Banner';
import Sale from './Sale';
import Content from './Content';
import Location from './Location';
import Post from './Post';
import Protect from './Protect';
import Instruct  from './Instruct';
import Aboutme from './Aboutme';
import Registercar from './Registercar';
import Blog from './Blog';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
const Main = () => {
  return (
    <div className='main'>
       <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <Header/>
      <Banner/>
      <Sale/>
      <Content/>
      <Location/>
      <Protect/>
      <Aboutme/>
      <Footer />
    </div>
  )
}

export default Main;