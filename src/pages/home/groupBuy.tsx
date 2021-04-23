
import React from 'react'
import { Block } from 'framework7-react'

function GroupBuy() {
    const temImg = require('../../assets/egimg/pintuanqu.png')
    return (
        <Block className='groupBuy'>
            <div className="inner">
                <img src={temImg.default}></img>
            </div>
        </Block>
    )
}

export default GroupBuy
