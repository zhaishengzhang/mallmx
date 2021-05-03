import React, { useState, useEffect } from 'react'

interface Props {
    star:number
}

function Star(props: Props) {
    const {star} = props
    const all = 5;
    const starRed = require("../../../assets/icons/star-red.png");
    const starDef = require("../../../assets/icons/star-default.png");

    const initArr:any[] = [];
    const [starArr, setStarArr] = useState(initArr);

    // 设置star展示数组, star:[], 如果为0,则用灰色, 如果1则红色
    const fillStarArr = (star:number):any[]=>{
        const _temArr = new Array(all);
        for(let i = 0; i<all; i++){
            if(i <= star){
                _temArr.push(1);
            }else{
                _temArr.push(0);
            }
        }
        return _temArr;
    }

    useEffect(()=>{
        setStarArr(fillStarArr(star));
    },[star])

    //生成星星
    const makeStar = (tag:number)=>{
        if(tag == 1){
            return <img src={starRed.default} ></img>
        }else{
            return <img src={starDef.default} ></img>
        }
    }
    
    return (
        <div className="starWrap">
            {
                starArr.map((item:number)=>{
                    return makeStar(item)
                })
            }
        </div>
    )
}

export default Star
