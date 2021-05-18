import React from 'react'
import { Block } from 'framework7-react'
import Star from '../../components/star'

//test code
const _img = [
    {
        img:require("@/assets/egimg/prodimg/mall/detail/1_13.jpg")
    },
    {
        img:require("@/assets/egimg/prodimg/mall/detail/1_15.jpg")
    },
    {
        img:require("@/assets/egimg/prodimg/mall/detail/1_17.jpg")
    }
]

interface Props {
}

function CommentItem(props: Props) {
    const {} = props

    const avatar = require("@/assets/icons/commet-user-avata.png");
    const vipIcon = require("@/assets/icons/detail-vip.png");

    return (
        <Block className="commentItem" >
            <div className="head">
                <div className="userInfo">
                    <img className="avatar" src={avatar.default}></img>
                    <span className="name">2342323423</span>
                    {/* 是不是vip */}
                    {1 ? <img className="vipIcon" src={vipIcon.default} ></img> : null }
                    <span className="stars"><Star star={3}></Star></span>
                </div>
                <div className="orderInfo">
                    <span>123-12-234</span>
                    <span>红色草莓一堆</span>
                </div>
            </div>
            <div className="commentCont">
                <p>评论文字内容</p>
                <div className="imgWrap">
                    {
                        _img.map((item, index)=>{
                            return <img src={item.img.default} key={index}></img>
                        })
                    }
                </div>
            </div>
            {
                //判断该条评论是不是有回复,如果有展示
                true ?
                    <div className="reply">
                        <span className="arrow"></span>
                        <span className="replyer">店小二: </span>
                        感谢新老客户支持感谢新老客户支持感谢新老客户支持感谢新老客户支持感谢新老客户支持感谢新老客户支持
                    </div> 
                :null
            }
            

        </Block>
    )
}

export default CommentItem
