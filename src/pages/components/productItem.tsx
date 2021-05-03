import React, { useState } from 'react'
import { Block , Link} from 'framework7-react'
import ShopButton from "../components/shopButton";
import PopBuyPannel from "../components/popBuyPannel";

const temImg = require('../../assets/egimg/banlanchanp.png')
const temImgTonglan = require('../../assets/egimg/tonglan.png')


interface Props {
    id:number,
    name:string,
    imgUrl:string,
    desc?:string,
    tags?:any[],
    price?:number,
    weight?:number,
    isWholeColumn?:boolean,

    type:number, //类型1,mall, 2自选
    is2Column:boolean, //是不是两列展示

}

//test tags
const _tags = [121,323]

function ProductItem(props: Props) {
    const {id, name, imgUrl, desc,tags,price, weight,type=1,is2Column} = props
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
            <Link className={is2Column ? "imgWrap twoColumnWrap" : "imgWrap"} href={type ==1 ? "/detail?id="+id : "/detail?id="+id} >
                <img src={is2Column ?  temImg.default : temImgTonglan.default  }></img>
            </Link>
            
            <div className="info">
                <h3>
                    <Link href={type ==1 ? "/detail?id="+id : "/detail?id="+id} >
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
                <span>¥ {price} <s>¥{342}</s></span>
                    <span className="shopbtn">
                        <ShopButton 
                            number={0}
                            type={1}
                            numberHandle = {stepperChangeHandle}
                            shopBtnHandle = {shopBtnHandle}
                        ></ShopButton>
                    </span>
                </div>
            </div>
            <PopBuyPannel 
                pop={pop}
                onSheetClosed =  {onSheetClosed}
            ></PopBuyPannel>
        </Block>
    )
}

export default ProductItem
