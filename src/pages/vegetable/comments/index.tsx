import React from 'react'
import { Page ,Block} from 'framework7-react'
import CommentItem from '../components/commentItem'

const backArrow:any = require('@/assets/icons/back-black.png');


//test
const tags = ["全部", "bangbande", "便宜实惠", "味道好"]




interface Props {
    f7router:any
}
function Index(props: Props) {
    const {f7router} = props

    const goBack = () => {
        f7router.back();
    }

    return (
        <Page className="commentsPage">
            <Block className="top">
                <img 
                    src={backArrow.default} 
                    className="backBtn"
                    onClick={goBack}
                    width="9"
                    height="17"
                ></img>
                <h1 className="title">用户评论</h1>
            </Block>
            <Block className="tagsWrap">
                <p className="title">用户评价 (45)</p>
                <ul className="tags">
                    {
                        tags.map((item,index)=>{
                            return <li className={index == 0 ? "active" : ""}>{item}</li>
                        })
                    }
                </ul>
                <div className="footer">
                    <span>打开</span>
                </div>
            </Block>
            <Block className="commentsWrap">
                {
                    tags.map((item,index)=>{
                        return <div className="commentItemWrap">
                            <CommentItem></CommentItem>
                        </div>
                    })
                }
                
            </Block>
        </Page>
        
    )
}

export default Index
