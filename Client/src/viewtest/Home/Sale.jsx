import "./css/base.css";
import "./css/sale.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaX } from "react-icons/fa6";

function Sale() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedTitle1, setSelectedTitle1] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedContent1, setSelectedContent1] = useState(null);
  const [selectedContent2, setSelectedContent2] = useState(null);
  const [selectedContent3, setSelectedContent3] = useState(null);
  const [selectedContent4, setSelectedContent4] = useState(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modalOpen]);
  const openModal = (image, title, title1, content,content1,content2,content3,content4) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setSelectedTitle1(title1);
    setSelectedContent(content);
    setSelectedContent1(content1);
    setSelectedContent2(content2);
    setSelectedContent3(content3);
    setSelectedContent4(content4);

    setModalOpen(true);
    setOverlayOpacity(1);
  };

  const closeModal = () => {
    setModalOpen(false);
    setOverlayOpacity(0);
  };
  const handleScroll = (e) => {
    const element = e.target;
    setIsScrollable(element.scrollHeight > element.clientHeight);
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0, // thể hiện hình ảnh 3 (0,1,2)
          // infinite: true,
          dots: true,
        },
      },
      // {
      //     breakpoint: 740,
      //     settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //         infinite: true,
      //         dots: true,
      //     },
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2, // thể hiện hình ảnh 3 (0,1,2)
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const dataDigitalBestSeller = [
    {
      id: 1,
      linkImg: "https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_02db70568f.png",
      title: "🎊Hung Test ",
      title1: "",
      content:
        "",
      content1: "" ,
      content2: "" ,
      content3: "" ,
      content4: "" ,
    },
    {
      id: 2,
      linkImg: "https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_46fc1c4cf0.png",
      title: "🎁 Hung Test ",
      title1: "Hung Test ",
      content: "Hung Test ." ,
      content1: "🎊 Hung Test " ,
      content2: "📲Hung Test " ,
    },
    {
      id: 3,
      linkImg: "https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_0d1822e46c.png",
      title: "Hung Test ",
      content: "🚘 Hung Test  " ,
      content1: "📲 Hung Test ",
      content2: " 🌟Hung Test ",
      content3: "Hung Test  ",
      content4: " 👨‍👩‍👧‍👦 Hung Test ",

    },
    {
      id: 4,
      linkImg:
        "https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_e97abfb675.png",
   
        title: "Hung Test ",
        content: "Hung Test " ,
        content1: "Hung Test 💥" ,
        content2: "Hung Test " ,
    
    },
    {
      id: 5,
      linkImg:
        "https://cdn.mobilecity.vn/mobilecity-vn/images/2024/04/w800/banner-thay-pin-iphone-200k.jpg.webp",
        title: "Hung Test ",
        content: " Hung Test " ,
        content1: "Hung Test " ,
        content2: "🎊 CHung Test  " ,
        content3: "📲 Hung Test  " ,
    },

  ];

  return (
    <div className="sale">
      <div className="sale__text">
        <h3>Chương trình khuyến mãi</h3>
        <p>Nhận nhiều ưu đãi từ Mobile Hub</p>
      </div>
      <div className="sale__slider">
        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <div
              className="sale__slider-container"
              onClick={() =>
                openModal(item.linkImg, item.title, item.title1, item.content, item.content1, item.content2, item.content3, item.content4)
              }
            >
              <div className="sale__slider-container-top">
                <img src={item.linkImg} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {modalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          style={{ opacity: overlayOpacity }}
        >
          <div className="modall" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>
              <FaX />
            </span>
            <img src={selectedImage} alt="Selected" />
         <div className="modall-content1">
    
            <h1>{selectedTitle}</h1>
            <h1>{selectedTitle1}</h1>

            <p>{selectedContent}</p>
            <p>{selectedContent1}</p>
            <p>{selectedContent2}</p>
            <p>{selectedContent3}</p>
            <p>{selectedContent4}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sale;
