import React, { useEffect, useState } from 'react'
import { Block } from 'framework7-react'

interface Props {
    notice:any
}

function Notice(props:Props) {
    const {notice} = props
    const noticeArr : any[]= [
        '单比订单满78元，免费配送1',
        '单比订单满78元，免费配送2',
        '单比订单满78元，免费配送3'
    ]
    const [animate, setAnimate] = useState(false)
    const [notices, setNotices] = useState(noticeArr);
    
          

    const Dt = ()=>{
        setAnimate(true);
        setTimeout(() => {   
            notices.push(notices[0]);
            setNotices(notices);
            notices.shift();
            setNotices(notices);   
            setAnimate(false); 
        }, 1000)
    }

      
    useEffect(()=>{
        setInterval(Dt, 2000);
    },[])

    return (
        <Block className="mxNotice">
            <h2>公告</h2>
            <div className="noticeWrap">
                <ul className={animate ? 'anim' : ''}>
                    {
                        notices.map((item, index)=>{
                            return <li className="item" key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </Block>
    )
}

export default Notice
