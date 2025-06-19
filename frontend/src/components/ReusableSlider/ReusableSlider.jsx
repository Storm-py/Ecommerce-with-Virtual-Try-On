import React from 'react'
import Slider from 'react-slick';
import { MdArrowBackIosNew,MdArrowForwardIos } from "react-icons/md";

const ReusableSlider = ({
    children,
    yPosition,
    leftPosition,
    rightPosition,
    slidesToShow=4
    }) => {
       const NextArrow = ({ onClick }) => (
          <div className={`absolute ${yPosition} ${rightPosition} z-10 cursor-pointer`} onClick={onClick}>
            <MdArrowForwardIos className="text-5xl text-gray-200 hover:text-black" />
          </div>
        );
        
        const PrevArrow = ({ onClick }) => (
          <div className={`absolute ${yPosition} ${leftPosition} z-10 cursor-pointer`} onClick={onClick}>
            <MdArrowBackIosNew className="text-5xl text-gray-200 hover:text-black" />
          </div>
        );
      
        const sliderSettings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: slidesToShow,
          lazyLoad:true,
          slidesToScroll: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768, 
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480, 
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        };
  return (
    <div>
        <Slider {...sliderSettings}>
            {children}
        </Slider>
    </div>
  )
}

export default ReusableSlider