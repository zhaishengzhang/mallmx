
import React, { useState } from 'react'
import { 
    Page , Block, Searchbar, Toolbar, Link, Tabs, Tab
} from 'framework7-react'
import Product from '../../components/productItemHoriColumn'


interface Props {
    f7router:any
}

const catelist:any[] = [
    {
        id:2,
        icon:require('@/assets/icons/home-lsgs.png'),
        name:"绿色果蔬",
        cates:[1,2,3,4,5,6]
    },
    {
        id:3,
        icon:require('@/assets/icons/home-rdsc.png'),
        name:"肉蛋产品",
        cates:[1,2,3,4,5,6]
    },
    {
        id:4,
        icon:require('@/assets/icons/home-rpjy.png'),
        name:"乳品酒饮",
        cates:[1,2,3,4,5,6]
    },
    {
        id:5,
        icon:require('@/assets/icons/home-mxzc.png'),
        name:"莓溪资产",
        cates:[1,2,3,4,5,6]
    },
    {
        id:6,
        icon:require('@/assets/icons/home-mfzq.png'),
        name:"摩飞专区",
        cates:[1,2,3,4,5,6]
    },
    {
        id:7,
        icon:require('@/assets/icons/home-gdtc.png'),
        name:"各地特产",
        cates:[1,2,3,4,5,6]
    },
    {
        id:8,
        icon:require('@/assets/icons/home-lsxc.png'),
        name:"零食小吃",
        cates:[1,2,3,4,5,6]
    },
    {
        id:9,
        icon:require('@/assets/icons/home-wgzl.png'),
        name:"五谷杂粮",
        cates:[1,2,3,4,5,6]
    }
]

const productList = 
        [
            {
                name:"限北京「淡雪草莓」111",
                imgUrl:"string",
                desc:"恋爱般可口草莓",
                tags:[],
                price:123,
                weight:3243,
                id:1,
                type:1,
            },
            {
                name:"有机草莓四盒装",
                imgUrl:"string",
                desc:"养眼的翠绿，水嫩清新",
                tags:[],
                price:13,
                weight:50,
                type:1,
                id:2
            },{
                name:"限北京「淡雪草莓」111",
                imgUrl:"string",
                desc:"恋爱般可口草莓",
                tags:[],
                price:123,
                weight:3243,
                type:1,
                id:1
            },
            {
                name:"有机草莓四盒装",
                imgUrl:"string",
                desc:"养眼的翠绿，水嫩清新",
                tags:[],
                price:13,
                weight:50,
                type:1,
                id:2
            },
            
        ];

function Index(props: Props) {
    const {f7router} = props
    const [tabActiveIndex, setTabActiveIndex] = useState(0); //按照数组下标来
    const [category, setCategory] = useState(catelist);
    const [activeInde, setActiveIndex] = useState(0)

    const backArrow:any = require('../../../assets/icons/back-white.png');

    const goBack = () => {
        f7router.back();
    }

    function handleTabChange(index:number){
        setTabActiveIndex(index);
        console.log("index :",index)
        // console.log("event: ",e)
    }
    //menu 点击
    function handleMenuClick(index:number){
        setActiveIndex(index);
    }

    return (
       <Page className="categoryPage">
           <Block className="top">
                <img 
                    src={backArrow.default} 
                    className="backBtn"
                    onClick={goBack}
                ></img>
                <Searchbar
                    searchContainer=".search-list"
                    searchIn=".item-title"
                ></Searchbar>
            </Block>
            <Block className="categoryList">
                <Toolbar scrollable noShadow noHairline className="tabNav">
                    {
                        catelist.map((item,index)=>{
                            return (
                                <Link tabLink={"#tab-"+index }
                                    className={tabActiveIndex === index ? "cateTabActive" : ""}
                                    tabLinkActive = {tabActiveIndex === index }
                                    onClick = {()=>handleTabChange(index)}
                                    key = {item.id}
                                >
                                    <img src={item.icon.default}></img><p>{item.name}</p>
                                </Link>
                            )
                        })
                    }
                </Toolbar>
            </Block>
            <Tabs swipeable className='tabPannel'>
                {
                    catelist.map((item, index)=>{
                        return(
                            <Tab 
                                id={"tab-"+index} 
                                className ="tabPannelItem" 
                                tabActive = {tabActiveIndex === index }
                                key = {index}
                            > 
                                <ul className="menu">
                                    {
                                        item.cates.map((v:any,i:number)=>{
                                           return <li
                                                className={  i==activeInde ?  i == 0 ? "active menuTop":"active" : "" }
                                                onClick = {()=>handleMenuClick(i)}
                                                >
                                                <i></i>
                                                {v}2131312
                                            </li>
                                        })
                                    }
                                    
                                </ul>
                                <div className="list">
                                    {
                                        productList.map((item,index)=>{
                                            return <Product {...item}></Product>
                                        })
                                    }
                                </div>
                            </Tab>
                        )
                    })
                }
            </Tabs>
       </Page>
    )
}

export default Index
