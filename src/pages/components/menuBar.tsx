/**
 * name: 页面底部导航栏
 * 备注:框架原因页面在引用时, 如需要固定在屏幕底部的, 需要再包一层ToolBar才行
 * eg. <ToolBar><MenuBar></MenuBar><ToolBar>
 */

import React from 'react'
import { 
    Block,
    Toolbar,
    Link
 } from 'framework7-react'

function MenuBar() {
    const icon1 = require('../../assets/icons/menuIcon-mall-a.png');
    
    return (
        // <Toolbar tabbar bottom labels className="menuBar">
        //     {/* <Link tabLink="#tab-1" tabLinkActive>
        //         <img src={icon1.default}></img>
        //         <span className="name">asdfasdf</span>
        //     </Link>
        //     <Link tabLink="#tab-2">

        //     </Link>
        //     <Link tabLink="#tab-3"></Link>
        //     <Link tabLink="#tab-3"></Link> */}
        //     <Link tabLink="#tab-1" tabLinkActive text="Tab 1" iconIos="f7:email_fill" iconAurora="f7:email_fill" iconMd="material:email"></Link>
        //   <Link tabLink="#tab-2" text="Tab 2" iconIos="f7:today_fill" iconAurora="f7:today_fill" iconMd="material:today"></Link>
        //   <Link tabLink="#tab-3" text="Tab 3" iconIos="f7:cloud_fill" iconAurora="f7:cloud_fill" iconMd="material:file_upload"></Link>
        // </Toolbar>

        <Toolbar tabbar labels >
          <Link tabLink="#tab-1" tabLinkActive text="Tab 1" iconIos="f7:email_fill" iconAurora="f7:email_fill" iconMd="material:email"></Link>
          <Link tabLink="#tab-2" text="Tab 2" iconIos="f7:today_fill" iconAurora="f7:today_fill" iconMd="material:today"></Link>
          <Link tabLink="#tab-3" text="Tab 3" iconIos="f7:cloud_fill" iconAurora="f7:cloud_fill" iconMd="material:file_upload"></Link>
        </Toolbar>
    )
}

export default MenuBar
