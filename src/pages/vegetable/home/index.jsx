import React from 'react';
import {
  View,
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
} from "../../components/index.tsx";
//页面组件
import Products from "./products";

const HomePage = (props) => {
  const logo = require('../../../assets/icons/logoy.png');

  const toSearch = ()=>{
    console.log(props)
    props.f7router.navigate('/vegesearch')
  }

  return <Page  init={true}  name="home" className="vegetableHomePage bgGray">
    {/* 跳转到选菜页面入口 */}
    <SwitchEntery
      type={2}
    ></SwitchEntery>
    {/* 头部包括轮播 */}
    <Block className="top">
        <img src={logo.default} className="logo"></img>
        <Searchbar
          searchContainer=".search-list"
          searchIn=".item-title"
          onFocus = {toSearch}
        ></Searchbar>
    </Block>
    {/* 轮播 */}
    <Block className="swiperWrap">
      <Swiper></Swiper>
    </Block>
    {/* 公告 */}
    <Notice></Notice>
    
    {/* 产品分类 */}
    <Category type="2"></Category>
    {/* 产品列表 */}
    <Products></Products>
    

    <Toolbar tabbar bottom>
      <MenuBar></MenuBar>
    </Toolbar>

  </Page>
};
export default HomePage;