import React from 'react'
import { Block } from 'framework7-react'


function FlashSale() {
    const temImg = require('../../../assets/egimg/xianshiqu.png')
    
    return (
        <Block className='flashSale'>
            <div className="inner">
                <img src={temImg.default}></img>
            </div>
        </Block>
    )
}

export default FlashSale
