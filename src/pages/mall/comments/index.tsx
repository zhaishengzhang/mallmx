import React, { useState, useEffect } from 'react'
import { Page ,Block} from 'framework7-react'
import CommentItem from '../components/commentItem'

const backArrow:any = require('@/assets/icons/back-black.png');
const downArrow:any = require('@/assets/icons/commentArrowDown.png');
const upArrow:any = require('@/assets/icons/commentArrowUp.png');

//test
const tags:any[] = ["全部", "bangbande", "便宜实惠", "味道好", "bangbande", "便宜实惠", "味道好", "bangbande", "便宜实惠", "味道好", "bangbande", "便宜实惠", "味道好"]




interface Props {
    f7router:any
}
function Index(props: Props) {
    const {f7router} = props
    const [open, setOpen] = useState(false);
    const [tagArr, setTagArr] = useState(tags);
    
    const initTags = ()=>{
        if(!open){
            let _tag = [...tags.slice(0,4)];
            // console.log("tag::",_tag);
            setTagArr(_tag);
        }
    }
    
    useEffect(()=>{
        //初始化tags数据
        initTags();
    },[])

    useEffect(()=>{
        if(open){
            setTagArr(tags);
        }else{
            setTagArr(tags.slice(0,4));
        }
    },[open])

    const goBack = () => {
        f7router.back();
    }

    const switchHandle=()=>{
        console.log("opten",open)
        setOpen(!open);
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
                        tagArr.map((item,index)=>{
                            return <li className={index == 0 ? "active" : ""}>{item}</li>
                        })
                    }
                </ul>
                <div className="footer" onClick={switchHandle}>
                    {
                        open ? 
                        <span  className="open">
                            <img src={upArrow.default}/>
                        </span> :
                        <span  className="close">
                            <img src={downArrow.default}/>
                        </span>
                    }
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
