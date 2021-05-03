import React from 'react'
import { Block } from 'framework7-react'

interface Props {
    list:any[];
}

const rightArrowIcon = require("../../../assets/icons/right_arrow.png");


function Active(props: Props) {
    const {list} = props
    
    return (
        <Block className="activeWrap">
            <div className="desc">
                <span className="title">活 动：</span>
                {
                    list.map((item,index)=>{
                        return <span className="actives" key={index}>{item.name}</span>
                    })
                }
                
            </div>
            <div className="redirect">
                <img src={rightArrowIcon.default}></img>
            </div>
        </Block>
    )
}

export default Active
