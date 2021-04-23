import React, { useState } from 'react'
import { Block } from 'framework7-react'
import ShopButton from "../components/shopButton";
import PopBuyPannel from "../components/popBuyPannel";

const temImg = require('../../assets/egimg/banlanchanp.png')

interface Props {
    name:string,
    imgUrl:string,
    desc?:string,
    tags?:any[],
    price?:number,
    weight?:number,
    isWholeColumn?:boolean
}

function ProductItem(props: Props) {
    const {name, imgUrl, desc,tags,price, weight} = props
    const [pop, setPop] = useState(false);

    // 购物车数据处理
    function stepperChangeHandle(number:number):void{
        console.log("production item ---number  : ", number);
    }

    // 弹窗处理
    function shopBtnHandle(){
        console.log("shopBtnHandle");
        setPop(true);
    }
    function onSheetClosed(){
        setPop(false);
    }

    return (
        <Block className="productItem">
            <img src={temImg.default}></img>
            <div>
                <h3>{name}</h3>
                <p>{desc}</p>
                <div className="tags">
                    {
                        tags?.map((item,index)=>{
                            <span key={index}>{item}</span>
                        })
                    }
                </div>
                <Block className="pfooter">
                    <span>¥ {price}</span>
                    <span className="shopbtn">
                        <ShopButton 
                            number={0}
                            type={1}
                            numberHandle = {stepperChangeHandle}
                            shopBtnHandle = {shopBtnHandle}
                        ></ShopButton>
                    </span>
                </Block>
            </div>
            <PopBuyPannel 
                pop={pop}
                onSheetClosed =  {onSheetClosed}
            ></PopBuyPannel>
        </Block>
    )
}

export default ProductItem
