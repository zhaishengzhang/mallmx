import React from 'react';
import {
  Page,
  Searchbar,
  Link,
  Toolbar,
  BlockTitle,
  Block,
  Row,
  Col,
  Button
} from 'framework7-react';

//公用组件
import {
  Swiper,
  Notice,
  Category,
  MenuBar,
  SwitchEntery
} from "../components/index.tsx";
//页面组件
import FlashSale from "./flashSale";
import GroupBuy from "./groupBuy";
import Discount from "./discount"
import Products from "./products";
import CatProducts from "./catProducts";



const HomePage = () => {
  const logo = require('../../assets/icons/search-btn.png');
  const hongbao = require('../../assets/egimg/hongbao.png')
  console.log("logg:", logo.default);


  return <Page name="home" className="homePage">
    {/* 跳转到选菜页面入口 */}
    <SwitchEntery
      type={1}
    ></SwitchEntery>
    {/* 头部包括轮播 */}
    <Block className="top">
        <img src={logo.default} className="logo"></img>
        <Searchbar
          searchContainer=".search-list"
          searchIn=".item-title"
        ></Searchbar>
    </Block>
    {/* 轮播 */}
    <Swiper></Swiper>
    {/* 公告 */}
    <Notice></Notice>

    {/* 红包 */}
    <Block className="adwrap">
      <Link href="https://www.baidu.com/" target="blank">
        <img src={hongbao.default}></img>
      </Link>
    </Block>
    
    {/* 产品分类 */}
    <Category></Category>
    {/* 拼团 */}
    <GroupBuy></GroupBuy>
    {/* 秒杀 */}
    <FlashSale></FlashSale>
    {/* 折扣 */}
    <Discount></Discount>
    {/* 产品列表 */}
    <Products></Products>
    {/* 带分类产品展示选项卡 */}
    <CatProducts></CatProducts>


    <Toolbar tabbar bottom>
      <MenuBar></MenuBar>
    </Toolbar>

  </Page>
};
export default HomePage;