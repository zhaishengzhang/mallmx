import React from 'react'
import { 
    Block
} from 'framework7-react'
interface Props {
    type:number; //类型1、通用券, 2、商品券
    status:number; //状态是不是已经领取1,未领取, 2、领取
    operate:number; //操作,领取使用, 1、领取, 2、选择, 3、使用
}

function CouponsItem(props: Props) {
    const {type, status, operate} = props

    return (
        <Block className={type == 2 ? 'CouponsItem commonCoupons' : 'CouponsItem'}>
            <div className="label">
                <p className="number"><span>¥</span>3</p>
                <p className="ctype">无门槛</p>
            </div>
            <div className="info">
                <div className="infoTop">
                    <span className="type">通用</span>
                    <span className="getType">手动领取</span>
                </div>
                <p>领取后3天内可用</p>
                <div className="operate">
                    <span>立即领取</span>
                </div>
            </div>
        </Block>
    )
}

export default CouponsItem
