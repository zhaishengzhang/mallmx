import React from 'react'


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
const temImg = require('@/assets/egimg/banlanchanp.png')


interface Props {}
const rightArrowIcon = require("@/assets/icons/right_arrow.png");

function ProductSelect(props: Props) {
    const {} = props
    
    const arrowBtnHandle = ()=>{
        
    }

    return (
        <div className="prodSelectWrap">
            <div className="brief">
                <span className="label">已选择:</span>
                <span className="name">asdfasfsasd</span>
                <img src={rightArrowIcon.default} onClick={arrowBtnHandle}></img>
            </div>
            <ul className="prodList">
                {
                    prodList.slice(0,3).map((item, index)=>{
                        return <li key={index}>
                            <img src={temImg.default}></img>
                        </li>
                    })
                }
                <li className="total">共有{prodList.length}款选择</li>
            </ul>
        </div>
    )
}

export default ProductSelect
