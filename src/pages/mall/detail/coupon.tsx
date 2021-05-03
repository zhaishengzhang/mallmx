import React from 'react'
import { Block } from 'framework7-react'

interface Props {
    list:any[];
}

const rightArrowIcon = require("../../../assets/icons/right_arrow.png");


function Coupon(props: Props) {
    const {list} = props
    
    return (
        <Block className="couponWrap">
            <div className="desc">
                <span className="title">优惠券：</span>
                {
                    list.slice(0,2).map((item,index)=>{
                        return <span className="coupons" key={index}>
                                <i className="left"></i>
                                {item.name}
                                <i className="right"></i>
                            </span>
                    })
                }
                
            </div>
            <div className="redirect">
                <img src={rightArrowIcon.default}></img>
            </div>
        </Block>
    )
}

export default Coupon
