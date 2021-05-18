import React from 'react'
import { Block, Page, BlockTitle ,Link} from 'framework7-react';
//公用组件
import Price from "./price";
import Vip from "./vip";
import BuyBar from "./buyBar";


const backArrow:any = require('@/assets/icons/back-black.png');

//test img
const banner:any = require('@/assets/egimg/prodimg/xuancai/detail/banner.jpg');
const content:any = require('@/assets/egimg/prodimg/xuancai/detail/content.jpg');




//test 数据
const prodItem = {
    price:111,
    originalPrice:12123,
    name:"好吃草莓",
    stock:23,
    sales:1,
}
//优惠券
const _list:any[] = [
    {
        name:"🈵️30减10",
        id:2
    },
    {
        name:"🈵️30减10",
        id:2
    },
    {
        name:"🈵️30减10",
        id:2
    },
    {
        name:"🈵️30减10",
        id:2
    },
    {
        name:"🈵️30减10",
        id:2
    }
]
//活动
const activeList:any[] = [
    {
        name:"支付有礼",
        id:2
    },
    {
        name:"五一折扣",
        id:2
    }
]


interface Props {
    f7router:any
}

function Index(props: Props) {
    const {f7router} = props

    const goBack = () => {
        f7router.back();
    }

    //锚点滚动
    const scrollToAnchor = (anchor:string)=>{
        if (!!anchor) {
            let anchorElement = document.getElementById(anchor);
            if (anchorElement) {
                console.log(anchorElement.offsetTop - window.innerHeight/2)
                window.scrollTo(0, anchorElement.offsetTop - window.innerHeight/2);
            }
          }
          // 没有的话，滚动到头部
          else {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          }
    }

    return (
        <Page className="vegeDetail">
            {/* 头部 */}
            <Block className="top">
                <img 
                    src={backArrow.default} 
                    className="backBtn"
                    onClick={goBack}
                    width="9"
                    height="17"
                ></img>
                <Block className="nav">
                    <a onClick={()=>scrollToAnchor("product")} href="#">商品</a>
                    <a onClick={()=>scrollToAnchor("detail")} href="#">详情</a>
                </Block>
            </Block>
            {/* 商品轮播 */}
            <a id="product"></a>
            <img className="bannerImg" src={banner.default} />
            {/* 价格展示 */}
            <Price {...prodItem}></Price>
            {/* 会员卡 */}
            <Vip></Vip>
            
            {/* 商品详情 */}
            <div className="prodBriefInfo" id="detail">
                <BlockTitle>商品详情</BlockTitle>
                <Block className="prodContent">
                    <img src={content.default} />
                </Block>
            </div>
            {/* 沟通按钮 */}
            <BuyBar></BuyBar>
            {/* 优惠券 */}
        </Page>
    )
}

export default Index
