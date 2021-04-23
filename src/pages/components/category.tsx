import React, { useState } from 'react'
import { Block ,Link} from 'framework7-react'

function Category(props:any) {
    const {} = props;
    const temList:any[] = [
        {
            id:2,
            icon:require('../../assets/icons/home-lsgs.png'),
            name:"绿色果蔬"
        },
        {
            id:3,
            icon:require('../../assets/icons/home-rdsc.png'),
            name:"肉蛋产品"
        },
        {
            id:4,
            icon:require('../../assets/icons/home-rpjy.png'),
            name:"乳品酒饮"
        },
        {
            id:5,
            icon:require('../../assets/icons/home-mxzc.png'),
            name:"莓溪资产"
        },
        {
            id:6,
            icon:require('../../assets/icons/home-mfzq.png'),
            name:"摩飞专区"
        },
        {
            id:7,
            icon:require('../../assets/icons/home-gdtc.png'),
            name:"各地特产"
        },
        {
            id:8,
            icon:require('../../assets/icons/home-lsxc.png'),
            name:"零食小吃"
        },
        {
            id:9,
            icon:require('../../assets/icons/home-wgzl.png'),
            name:"五谷杂粮"
        }
    ]
    const [category, setCategory] = useState(temList);




    return (
        <Block className="categoryWrap">
            <ul>
                {
                category.map((item)=>{
                    return (
                        <li key={item.id}>
                            <Link href={item.id}>
                                <img src={item.icon.default}></img>
                                <p>{item.name}</p>
                            </Link>
                        </li>
                    )
                })
                }
            </ul>
        </Block>
    )
}

export default Category
