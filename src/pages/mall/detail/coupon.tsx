import React, { useState } from 'react'
import { Block } from 'framework7-react'
import PopCouponsPannel from "../../components/popCouponsPannel";

interface Props {
    list:any[];
}

const rightArrowIcon = require("../../../assets/icons/right_arrow.png");


function Coupon(props: Props) {
    const {list} = props
    const [pop, setPop] = useState(false)
    //关闭优惠券
    function onSheetClosed(){
        setPop(false);
    }

    const openSheetPannel = ()=>{
        setPop(true);
    }

    return (
        <div className="couponWrap" onClick={openSheetPannel}>
            <div className="desc">
                <span className="title">优惠券：</span>
                {
                    list.slice(0,2).map((item,index)=>{
                        return <span className="coupons" key={index} >
                                <i className="left"></i>
                                {item.name}
                                <i className="right"></i>
                            </span>
                    })
                }
                
            </div>
            <div className="redirect" onClick={openSheetPannel}>
                <img src={rightArrowIcon.default}></img>
            </div>

            <PopCouponsPannel 
                pop = {pop}
                onSheetClosed = {onSheetClosed}
            ></PopCouponsPannel>
        </div>
    )
}

export default Coupon
