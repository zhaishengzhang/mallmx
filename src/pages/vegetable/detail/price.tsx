import React from 'react'
import { Block } from 'framework7-react'

interface Props {
    price:number;
    originalPrice:number;
    name:string;
    stock:number;
    sales:number;
}

const shareBtn = require("../../../assets/icons/detail-share.png");
function Price(props: Props) {
    const {price,originalPrice,name,stock,sales} = props


    const shareBtnHandle = ()=>{}

    return (
        <Block className="priceWrap">
            <div className="price">
                <h1>限北京「莓溪红颜有机草莓3+1」</h1>
                <img className="shareBtn" src={shareBtn.default} onClick={shareBtnHandle}></img>
            </div>
            
            <div className="footer">
                <span>库存:123</span>
                <span>销量:1231</span>
            </div>
        </Block>
    )
}

export default Price
