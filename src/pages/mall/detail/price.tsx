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
                <span>¥ 23424 <s>¥ 2323</s></span>
                <img className="shareBtn" src={shareBtn.default} onClick={shareBtnHandle}></img>
            </div>
            <h1>
            限北京「莓溪红颜有机草莓3+1」有机种植无花肥 零添加草莓红颜3+1（其中1盒可选择淡雪或圣诞 或奶油），配送前一天会进行联系
            </h1>
            <div className="footer">
                <span>原价:1231</span>
                <span>库存:123</span>
                <span>销量:1231</span>
            </div>
        </Block>
    )
}

export default Price
