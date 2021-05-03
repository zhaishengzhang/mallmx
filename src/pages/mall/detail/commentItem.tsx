import React from 'react'
import { Block } from 'framework7-react'
import Star from '../../components/star'

//test code
const _img = [
    2,3,4,5,6
]

interface Props {}

function CommentItem(props: Props) {
    const {} = props

    const avata = require("../../../assets/icons/commet-user-avata.png")

    return (
        <Block className="commentItem">
            <div className="head">
                <div className="top">
                    <img className="userAvata" src={avata.default}></img>
                    <span className="userName">asdfasdfsd</span>
                    <span className="level"></span>
                    <span className="star">
                        <Star star={3}></Star>
                    </span>
                </div>
                <div className="bottom">
                    <span >2021-02-23</span>
                    <span >红草莓好吃</span>
                </div>
            </div>
            <div className="conten">
                <p>评论文字,文字</p>
                <div>
                    {
                        _img.map((item, index)=>{
                            return <img src={avata.default} key={index}></img>
                        })
                    }
                </div>
            </div>
            {
                //判断该条评论是不是有回复,如果有展示
                true ?
                    <div className="footer">
                    
                    </div> 
                :null
            }
            

        </Block>
    )
}

export default CommentItem
