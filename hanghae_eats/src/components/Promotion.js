import React from 'react';
import { Grid, Image } from '../elements';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import promotionA from '../img/promotion1.jpg';
import promotionB from '../img/promotion2.jpg';
import promotionC from '../img/promotion3.jpg';

const Promotion = (props) => {
  const settings = {
    // 아래 dots 
    dots: true,
    // 마지막 슬라이드에서 처음 슬라이스로
    infinite: true,
    speed: 2000,
    // 한 번에 보여줄 스크롤
    slidesToShow: 1,
    // 스크롤 할 때마다 몇 장
    slidesToScroll: 1,
    // 자동 넘김
    autoplay: true,
    autoplaySpeed: 4000,
    // hover시 슬라이더가 자동으로 넘어가지 않음
    pauseOnHover: true,
  }
  
  return (
    <Grid height="250px" margin="2% auto">
      <Slider {...settings}>
        <Grid>
          <Image is_slide height="250px;" src={promotionA}/>
        </Grid>
        <Grid>
          <Image is_slide height="250px;" src={promotionB}/>
        </Grid>
        <Grid>
          <Image is_slide height="250px;" src={promotionC}/>
        </Grid>
      </Slider>
  </Grid>
  );
}

export default Promotion;