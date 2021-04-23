/**
 * @summary 商品模块的购买按钮组件, 包括按钮展示和数量添加.
 * 该组件只负责ui展示和交互, 不做数据传输, 包含选菜和正常商品购买,
 * 如果是正常商品点击会调用传入方法,处理外部业务, 外部业务处理完成后修改属性值完成操作.展示数量按钮
 * 如果是选菜则点击后直接展示数量按钮,
 * 点击数量按钮调用传入方法处理外部业务
 * @param {number} type  1:商品, 2:选菜
 * 
 */

import React, { useState } from 'react'
import {Stepper} from 'framework7-react'


interface numberHandle {
    (number:number):void;
  }
interface shopBtnHandle{
    ():void;
}

interface Props {
    number:number, //当前设定值
    type: number, //该组件使用类型, 1:商品, 2:选菜 , 3:购买面板灰色购买按钮
    numberHandle?:numberHandle, //点击数量按钮的处理函数
    shopBtnHandle?:shopBtnHandle; // 点击购物车按钮处理事件
}

function ShopButton(props: Props) {
    const {number, type, numberHandle, shopBtnHandle} = props
    const shopingCart = require('../../assets/icons/menuIcon-mall-a.png');
    const [cnumber , setCnumber] = useState(number);
    let timer:any = null; //点击购买数量的调整

    // 购物车图标点击事件
    function shopBtnClickHandle(){
        if(type == 1 && shopBtnHandle){
            console.log("shopButtonxxx")
            shopBtnHandle()
        }
        if(type == 2){
            setCnumber(1);
            if(numberHandle){
                numberHandle(cnumber);
            }
        }
        
    }

    //监听数据变化然后提交数据
    function stepperChangeHandle(value:any){
        let sleep = 300;

        if (timer) clearTimeout(timer);
        
        timer = setTimeout(() => {
            if(numberHandle){
                numberHandle(value);
            }
        }, sleep);
        
    }


    return (
        <div className="shopButtonWrap">
            {
                (!cnumber && type !== 3)  ?
                    <img className='shopIcon' src={shopingCart.default} onClick={shopBtnClickHandle} ></img>
                :
                    <Stepper 
                        small 
                        value={cnumber} 
                        input={false} 
                        onStepperChange={stepperChangeHandle}
                        className = {type == 3 ? "buyPannelStep" : "stepRed"}
                    ></Stepper>
            }
        </div>
    )
}

export default ShopButton
