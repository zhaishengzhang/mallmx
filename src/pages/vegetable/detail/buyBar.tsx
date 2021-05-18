import React from 'react'
import { Block } from 'framework7-react'
import ShopButton from "../../components/shopButton";

interface Props {}

function BuyBar(props: Props) {
    const {} = props

    // 购物车数据处理
    function stepperChangeHandle(number:number):void{
        console.log("production item ---number  : ", number);
    }
    // 弹窗处理
    function shopBtnHandle(){
        console.log("shopBtnHandle");
    }

    return (
        <Block className="buyBarWrap">
            <div className="operateBtn">
                <span className="label">
                    商品数量
                </span>
                <div className="shopCart">
                    <ShopButton
                        number={0}
                        type={1}
                        numberHandle = {stepperChangeHandle}
                        shopBtnHandle = {shopBtnHandle}
                    ></ShopButton>
                </div>
            </div>
            <div className="buyBtnsWrap">
                <span className="addCart">去购物车结算</span>
            </div>
        </Block>
    )
}

export default BuyBar
