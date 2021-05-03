import React from 'react'
import {
    Swiper,
    SwiperSlide,
    Link,
    Block,
  } from 'framework7-react';

const temImg = require('../../assets/egimg/swiper.png');
const test = [1,2,3,4]

function MxSwiper(props:any) {
    const {} = props;


    return (
        <div className="mxSwiper">
            <Swiper pagination >
                {
                    test.map((item,index)=>{
                        return (
                            <SwiperSlide key={index}>
                                <img src={temImg.default}></img>
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>
        </div>
    )
}

export default MxSwiper

