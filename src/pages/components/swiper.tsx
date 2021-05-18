import React from 'react'
import {
    Swiper,
    SwiperSlide,
    Link,
    Block,
  } from 'framework7-react';

const temImg = require('../../assets/egimg/prodimg/mall/home/banner1.jpg');
const temImg2 = require('../../assets/egimg/prodimg/mall/detail/b1.jpg');
const test = [1,2,3,4]

function MxSwiper(props:any) {
    const {type} = props;


    return (
        <div className="mxSwiper mxSwiperWhite">
            <Swiper pagination >
                {
                    test.map((item,index)=>{
                        return (
                            <SwiperSlide key={index}>
                                {
                                    type == 1 ?
                                    <img src={temImg.default} className="radius"></img> :
                                    <img src={temImg2.default}></img>
                                }
                                
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>
        </div>
    )
}

export default MxSwiper

