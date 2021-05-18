import React from 'react'
import { Block } from 'framework7-react'

interface Props {}

const vipIcon = require("../../../assets/icons/detail-vip.png");
const rightArrowIcon = require("../../../assets/icons/right_arrow.png");


function Vip(props: Props) {
    const {} = props

    return (
        <div className="vipsWrap">
            <Block className="vips">
                <div className="desc">
                    <img src={vipIcon.default}></img>
                    <span>开通“超级会员”立省20元</span>
                </div>
                <div className="redirect">
                    <span>立即开通</span>
                    <img src={rightArrowIcon.default}></img>
                </div>
            </Block>
        </div>
    )
}

export default Vip
