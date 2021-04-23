import React, { useState } from 'react'
import { Page ,Block ,Searchbar} from 'framework7-react'
import { func } from 'prop-types';

interface Props {}

function SearchHistory(props: Props) {
    const {} = props
    const [list, setList] = useState([1,2,3,4,5,234234,23423,4234,234,234,23,4,23,4234,23,42,4,23,4,234,,3,5345345,34])

    const delBtn:any = require('../../assets/icons/search-del-btn.png');


    function clearHistory(){
        //调用接口删除所有
        
        //模拟操作  删除接口成功后回调
        setList([]);  
    }

    return (
        <Block className="searchHistory">
            <div className="header">
                <h2>历史搜索</h2>
                <img src={delBtn.default} className="delBtn" onClick={clearHistory}></img>
            </div>
            <ul className="keywordList">
                {
                    list.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </Block>
    )
}

export default SearchHistory
