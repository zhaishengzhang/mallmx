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
import Anchor from './anchor'


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
        f7router.back();
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
                    <a href="#">商品</a>
                    <a href="#">评价</a>
                    <a href="#">详情</a>
                    <a href="#r">推荐</a>
                </Block>
            </Block>
            {/* 商品轮播 */}
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
            <Comment></Comment>
            {/* 商品详情 */}
            <div className="prodBriefInfo">
                <BlockTitle>商品详情</BlockTitle>
                <Block className="prodContent">
                    {"adfsasdfasdfasdfasdfasdf"}
                </Block>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            {/* 莓溪推荐 */}
            
            <MxRecomment></MxRecomment>
            {/* 沟通按钮 */}
            <BuyBar></BuyBar>
        </Page>
    )
}

export default Index
