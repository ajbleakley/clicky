import React from 'react'
import Slider from 'react-slick'
import LocalBackgroundURL from '../images/kalen-emsley-98264-unsplash-min.jpg';

export default function Slideshow({ slideshowData }) {
  const settings = {
      centerMode: true,
      centerPadding: `275px`,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      responsive: [
        {breakpoint:1120,settings:{centerPadding:`200px`}},
        {breakpoint:960,settings:{centerPadding:`150px`}},
        {breakpoint:800,settings:{centerPadding:`20px`}},
      ]
    };

    return (
      <div className={`Pf9j`}>
        <Slider {...settings}>
          {slideshowData.posts.map((post,index) => {
            return (
              <>
                <div className={`Vo9Y`} style={{backgroundImage:`url(${LocalBackgroundURL})`,backgroundSize:`cover`}}>
                  <div className={`MSv0`}>
                    <div className={`ehcz`}><img src={require('../images/michael-dam-258165-unsplash-min.png')} /></div>
                    <div className={`u4SH`}>&quot;{post.body}&quot;</div>
                    <div className={`S4Su`}>{post.author}</div>
                  </div>
                  <div className={`HCVy`}></div>
                </div>
              </>
            )
          })}
        </Slider>
      </div>
    )
}
