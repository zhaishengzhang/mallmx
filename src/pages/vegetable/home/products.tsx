import React from 'react'
import { Block } from 'framework7-react'
import Prod2Columns from '../../components/product2Columns'
import ProdColumn from '../../components/productColumn'

const prodList:any[] = [
    {
        isWholeColumn:false,
        products:[
            {
                name:"白牡丹矮脚菜500g/份",
                imgUrl:require('@/assets/egimg/prodimg/xuancai/cate/1.jpg'),
                desc:"轻轻嫩嫩 好看又好吃",
                tags:['品控全检'],
                weight:3243,
                isWholeColumn:false
            },
            {
                name:"油菜500g/份",
                imgUrl:require('@/assets/egimg/prodimg/xuancai/cate/2.jpg'),
                desc:"养眼的翠绿，水嫩清新",
                tags:['品控全检'],
                price:13,
                weight:50,
                isWholeColumn:false
            },
            {
                name:"春笋约500g",
                imgUrl:require('@/assets/egimg/prodimg/xuancai/cate/3.jpg'),
                desc:"新鲜清爽，白嫩爽口",
                tags:['品控全检'],
                weight:200,
                isWholeColumn:false
            },
            {
                name:"尖椒500g/份",
                imgUrl:require('@/assets/egimg/prodimg/xuancai/cate/4.jpg'),
                desc:"温中散寒，开胃消食",
                tags:['品控全检'],
                weight:50,
                isWholeColumn:false
            }
        ]
    }
];

// 产品列表调整为

function Products() {
    return (
        <Block className="productList">
            <div className="head">
                <h2>
                    推荐商品<i></i>                
                </h2>
            </div>
            {
                prodList.map((item,index)=>{
                    if(item.isWholeColumn){
                        return (
                            <ProdColumn type={2} products={item.products} key={index}></ProdColumn>
                        )
                    }else{
                        return (
                            <Prod2Columns type={2} products={item.products} key={index}></Prod2Columns>
                        )
                    }
                    
                })
            }
        </Block>
    )
}

export default Products
