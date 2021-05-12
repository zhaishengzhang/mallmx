import React from 'react'
import { Block, Page, BlockTitle ,Link} from 'framework7-react';
//公用组件
import {
    Swiper,
  } from "../../components/index";
import Price from "./price";
import Vip from "./vip";
import Coupon from "./coupon";
import Active from "./active";
import ProdSelect from "./productSelect";
import Comment from "./comment";
import MxRecomment from "./mxrecommend";
import BuyBar from "./buyBar";


const backArrow:any = require('@/assets/icons/back-black.png');


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
        console.log(7777);
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
        <Page className="mallDetail">
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
                    <a onClick={()=>scrollToAnchor("comment")} href="#">评价</a>
                    <a onClick={()=>scrollToAnchor("detail")} href="#">详情</a>
                    <a onClick={()=>scrollToAnchor("recommned")}  href="#r">推荐</a>
                </Block>
            </Block>
            {/* 商品轮播 */}
            <a id="product"></a>
            <Swiper></Swiper>
            {/* 价格展示 */}
            <Price {...prodItem}></Price>
            {/* 会员卡 */}
            <Vip></Vip>
            {/* 优惠券 */}
            <Coupon 
                list= {_list}
            ></Coupon>
            {/* 活动 */}
            <Active
                list = {activeList}
            ></Active>
            {/* 商品选择 */}
            <ProdSelect></ProdSelect>
            {/* 评论 */}
            <a id="comment"></a>
            <Comment></Comment>
            {/* 商品详情 */}
            <div className="prodBriefInfo" id="detail">
                <BlockTitle>商品详情</BlockTitle>
                <Block className="prodContent">
                    {"adfsasdfasdfasdfasdfasdf"}
                </Block>
            </div>
            {/* 莓溪推荐 */}
            <a id="recommned"></a>
            <MxRecomment ></MxRecomment>
            {/* 沟通按钮 */}
            <BuyBar></BuyBar>
            {/* 优惠券 */}
        </Page>
    )
}

export default Index
