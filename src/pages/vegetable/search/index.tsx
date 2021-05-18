import React, { useState } from 'react'
import { Page ,Block ,Searchbar} from 'framework7-react'
import SearchHistory from "./searchHistory";
import Products from "./products";

const prodList:any[] = [
    {
        name:"限北京「淡雪草莓」",
        imgUrl:"string",
        desc:"恋爱般可口草莓",
        tags:[],
        price:123,
        weight:3243,
        isWholeColumn:false,
        id:11
    },
    {
        name:"有机草莓四盒装",
        imgUrl:"string",
        desc:"养眼的翠绿，水嫩清新",
        tags:[],
        price:13,
        weight:50,
        isWholeColumn:false,
        id:12
    },
    {
        name:"有机草莓四盒装",
        imgUrl:"string",
        desc:"养眼的翠绿，水嫩清新",
        tags:[],
        price:123,
        weight:200,
        isWholeColumn:false,
        id:13
    },
    {
        name:"有机草莓四盒装",
        imgUrl:"string",
        desc:"养眼的翠绿，水嫩清新",
        tags:[],
        price:123,
        weight:200,
        isWholeColumn:false,
        id:14
    },
    {
        name:"有机草莓四盒装",
        imgUrl:"string",
        desc:"养眼的翠绿，水嫩清新",
        tags:[],
        price:123,
        weight:200,
        isWholeColumn:false,
        id:15
    }
]


interface Props {
    f7router:any
}

function SearchIndex(props: Props) {
    const {f7router} = props
    const [prodlist, setProdlist] = useState(prodList);
    const [type , setType] = useState(2);

    const backArrow:any = require('../../../assets/icons/back-black.png');

    const goBack = () => {
        f7router.back();
    }

    return (
        <Page 
            name="search" 
            className={ type == 1 ? "vegesearchPage bgwhite" : "vegesearchPage bgGray"}
        >
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

            {/* 搜索历史 */}
            <SearchHistory></SearchHistory>

            {/* 搜索结果列表 */}
            <Products
                products = {prodList}
            ></Products>
        </Page>
    )
}

export default SearchIndex
