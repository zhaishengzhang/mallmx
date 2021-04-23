import React from 'react'
import { Block } from 'framework7-react'

function Discount() {
    const temImg = require('../../assets/egimg/zhekouqu.png')
    
    return (
        <Block className='discount'>
            <div className="inner">
                <img src={temImg.default}></img>
            </div>
        </Block>
    )
}

export default Discount
