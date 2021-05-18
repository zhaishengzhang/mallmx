import React from 'react'
import { Block ,Link} from 'framework7-react'
import CommentItem from '../components/commentItem'

const list = [1]
const tags = ["bangbande", "便宜实惠", "味道好"]

const rightArrowIcon = require("../../../assets/icons/right_arrow.png");


const temImg = require('../../../assets/egimg/banlanchanp.png')

interface Props {}

function Comment(props: Props) {
    const {} = props

    return (
        <Block className="commentWrap">
            <div className="top">
                <span> 用户评论 12</span>
                <span className="more">
                    <Link href="/comment">
                        查看全部
                        <img src={rightArrowIcon.default}></img>
                    </Link>
                </span>
            </div>
            <ul className="tags">
                {
                    tags.map((item,index)=>{
                        return <li>{item}</li>
                    })
                }
            </ul>
            <CommentItem></CommentItem>
            {/* <div className="orderInfo">
                <span>123-12-234</span>
                <span>红色草莓一堆</span>
            </div>
            <div className="commentCont">
                <p>评论文字内容</p>
                <div className="imgWrap">
                    <img src={temImg.default}></img>
                    <img src={temImg.default}></img>
                    <img src={temImg.default}></img>
                </div>
            </div> */}
        </Block>
    )
}

export default Comment
