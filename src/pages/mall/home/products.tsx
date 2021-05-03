import React from 'react'
import { Block } from 'framework7-react'
import PorpItem from '../../components/productItem'
import Prod2Columns from '../../components/product2Columns'
import ProdColumn from '../../components/productColumn'

const prodList:any[] = [
    {
        isWholeColumn:true,
        products:[
            {
                name:"限北京-草莓礼品兑换卡10张起售",
                imgUrl:"",
                desc:"有机认证 健康品质的草莓送礼更有心意",
                tags:[],
                price:123,
                weight:300,
                isWholeColumn:true
            },
        ]
    },
    {
        isWholeColumn:true,
        products:[
            {
                name:"限北京-草莓礼品兑换卡10张起售",
                imgUrl:"",
                desc:"有机认证 健康品质的草莓送礼更有心意",
                tags:[],
                price:123,
                weight:300,
                isWholeColumn:true
            },
        ]
    },
    {
        isWholeColumn:false,
        products:[
            {
                name:"限北京「淡雪草莓」",
                imgUrl:"string",
                desc:"恋爱般可口草莓",
                tags:[],
                price:123,
                weight:3243,
                isWholeColumn:false
            },
            {
                name:"有机草莓四盒装",
                imgUrl:"string",
                desc:"养眼的翠绿，水嫩清新",
                tags:[],
                price:13,
                weight:50,
                isWholeColumn:false
            },
            {
                name:"有机草莓四盒装",
                imgUrl:"string",
                desc:"养眼的翠绿，水嫩清新",
                tags:[],
                price:123,
                weight:200,
                isWholeColumn:false
            }
        ]
    },
    {
        isWholeColumn:true,
        products:[
            {
                name:"限北京-草莓礼品兑换卡10张起售",
                imgUrl:"",
                desc:"有机认证 健康品质的草莓送礼更有心意",
                tags:[],
                price:123,
                weight:300,
                isWholeColumn:true
            },
        ]
    },
    {
        isWholeColumn:false,
        products:[
            {
                name:"限北京「淡雪草莓」",
                imgUrl:"string",
                desc:"恋爱般可口草莓",
                tags:[],
                price:123,
                weight:3243,
                isWholeColumn:false
            },
            {
                name:"有机草莓四盒装",
                imgUrl:"string",
                desc:"养眼的翠绿，水嫩清新",
                tags:[],
                price:13,
                weight:50,
                isWholeColumn:false
            }
        ]
    }
    
];

// 产品列表调整为

function Products() {

    return (
        <Block>
            
            {
                prodList.map((item,index)=>{
                    if(item.isWholeColumn){
                        return (
                            <ProdColumn products={item.products} key={index}></ProdColumn>
                        )
                    }else{
                        return (
                            <Prod2Columns products={item.products} key={index}></Prod2Columns>
                        )
                    }
                    
                })
            }
        </Block>
    )
}

export default Products
