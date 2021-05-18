import React, { useState } from 'react'
import { Block , Link} from 'framework7-react'
import ShopButton from "./shopButton";

const temImg = require('../../assets/egimg/banlanchanp.png')
const temImgTonglan = require('../../assets/egimg/tonglan.png')


interface Props {
    id:number,
    name:string,
    type:number, //类型1,mall, 2自选
    imgUrl:string,
    desc?:string,
    tags?:any[],
    price?:number,
    weight?:number,
    isWholeColumn?:boolean,
    

}

//test tags
const _tags = [121,323]

function ProductItem(props: Props) {
    const {id, name, type ,imgUrl, desc,tags,price, weight} = props
    const [pop, setPop] = useState(false);

    //购物车
    const cart = require("@/assets/icons/proditem-shopping-cart.png")


    // 购物车数据处理
    function stepperChangeHandle(number:number):void{
    }

    // 弹窗处理
    function shopBtnHandle(){
        setPop(true);
    }
    function onSheetClosed(){
        setPop(false);
    }

    return (
        <Block className="productItemHoriColumn">
            <Link className="imgWrap" href={type ==1 ? "/detail?id="+id : "/vegedetail?id="+id} >
                <img src={temImg.default}></img>
            </Link>
            
            <div className="info">
                <h3>
                    <Link href={type ==1 ? "/detail?id="+id : "/vegedetail?id="+id} >
                        {name}
                    </Link></h3>
                <p>{desc}</p>
                <div className="tags">
                    {
                        _tags?.map((item,index)=>{
                           return <span key={index}>{item}</span>
                        })
                    }
                </div>
                <div className="pfooter">
                    {type == 1 ? <span >¥ {price} <s>¥{342}</s></span> : <span> </span> }
                    {
                        type == 1 ? 
                        <span className="shopbtn img">
                            <Link href={"/detail?id="+id} >
                                <img src={cart.default}></img>
                            </Link>
                        </span> :
                        <span className="shopbtn">
                            <ShopButton 
                                number={0}
                                type={2}
                                numberHandle = {stepperChangeHandle}
                                shopBtnHandle = {shopBtnHandle}
                            ></ShopButton>
                        </span>
                    }
                </div>
            </div>
        </Block>
    )
}

export default ProductItem
