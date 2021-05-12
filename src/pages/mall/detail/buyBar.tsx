import React from 'react'
import { Block } from 'framework7-react'

interface Props {}

function BuyBar(props: Props) {
    const {} = props

    const MallIcon = require('../../../assets/icons/menuIcon-mall-n.png');
    const collectIcon = require('../../../assets/icons/menuIcon-collect.png');
    const shopCartIcon = require('../../../assets/icons/menuIcon-shop-cart.png');

    

    return (
        <Block className="buyBarWrap">
            <div className="operateBtn">
                <span>
                    <img src={MallIcon.default}></img>
                    商城
                </span>
                <span>
                    <img src={collectIcon.default}></img>
                    收藏
                </span>
                <span>
                    <img src={shopCartIcon.default}></img>
                    购物车
                </span>
            </div>
            <div className="buyBtnsWrap">
                <span className="addCart">加入购物车</span>
                <span className="buy">立即购买</span>
            </div>
        </Block>
    )
}

export default BuyBar
