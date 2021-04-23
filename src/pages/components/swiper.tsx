import React from 'react'
import {
    Swiper,
    SwiperSlide,
    Link,
    Block,
  } from 'framework7-react';

function MxSwiper(props:any) {
    const {} = props;


    return (
        <Block className="mxSwiper">
            <Swiper pagination >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </Block>
    )
}

export default MxSwiper

