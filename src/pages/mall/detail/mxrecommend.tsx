import React, { useEffect, useState } from 'react'
import { 
    Block,
    Swiper,
    SwiperSlide,
    Row,
    Col
} from 'framework7-react'
import {oneDim2AnyDim} from '../../../utils/toolsMethods'

const prodList:any[] = [
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
    ,
    {
        name:"有机草莓四盒装",
        imgUrl:"string",
        desc:"养眼的翠绿，水嫩清新",
        tags:[],
        price:123,
        weight:200,
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
    },
    {
        name:"有机草莓四盒装",
        imgUrl:"string",
        desc:"养眼的翠绿，水嫩清新",
        tags:[],
        price:123,
        weight:200,
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
    },
    {
        name:"有机草莓四盒装",
        imgUrl:"string",
        desc:"养眼的翠绿，水嫩清新",
        tags:[],
        price:123,
        weight:200,
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
];
const temImg = require('@/assets/egimg/banlanchanp.png')


interface Props {}

function Mxrecommend(props: Props) {
    const {} = props

    let _fill = prodList.length%6;

    console.log(" mx recommmend list _fill:", _fill);

    for(let i = 0; i< 6-_fill; i++){
        prodList.push({})
    }
    console.log("prodList.length::", prodList.length)
    const [list, setList] = useState(oneDim2AnyDim(prodList,6));
    console.log(" mx recommmend list :", list);

    useEffect(()=>{
        //获取数据
        // console.log(" mx recommmend list :", list);

        //test code
        // setList(oneDim2AnyDim(prodList,6));
    },[])

    return (
        <Block className="mxrecommendWrap">
            <div className="title">莓溪推荐</div>
            <Swiper className="recommendProd" pagination>{
                list.map((item, index)=>{
                    return (
                        <SwiperSlide  key={index}>{
                                oneDim2AnyDim(item,3).map((vv:any,ii:number)=>{
                                    return (
                                        <Row key={ii}>{
                                                vv.map((v:any,i:number)=>{
                                                    if(!!v.name){
                                                        return (
                                                            <Col key={i} className="prodItem">
                                                                <img src = {temImg.default}></img>
                                                                <h3>{v.name}</h3>
                                                                <p className="price">¥ {v.price}<s>¥ {v.price}</s></p>
                                                            </Col> 
                                                        )
                                                    }else{
                                                        return (
                                                            <Col key={i} className="prodItem"></Col> 
                                                        )
                                                    }
                                                })
                                            }
                                        </Row>
                                    )
                                    
                                })
                            }
                        </SwiperSlide>
                    )
                })
                }
            </Swiper>
        </Block>
    )
}

export default Mxrecommend
