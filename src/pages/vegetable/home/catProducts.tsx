import React ,{ useState } from 'react'
import { Block ,Toolbar,Link,Tabs,Tab} from 'framework7-react'
import Product2Columns from '../../components/product2Columns'

function CatProducts() {
    const catelist = [
        {
            id:1,
            name:"分类1"
        },
        {
            id:2,
            name:"果蔬分类"
        },
        {
            id:3,
            name:"肉蛋奶分类"
        },
        {
            id:4,
            name:"哎呀噢噢我"
        },
        {
            id:5,
            name:"哎呀噢噢我"
        },
        {
            id:6,
            name:"哎呀噢"
        },
    ]
    const productList = 
        [
            [
                {
                    name:"限北京「淡雪草莓」111",
                    imgUrl:"string",
                    desc:"恋爱般可口草莓",
                    tags:[],
                    price:123,
                    weight:3243,
                    isWholeColumn:false,
                    id:1
                },
                {
                    name:"有机草莓四盒装",
                    imgUrl:"string",
                    desc:"养眼的翠绿，水嫩清新",
                    tags:[],
                    price:13,
                    weight:50,
                    isWholeColumn:false,
                    id:2
                }
            ],
            [
                {
                    name:"限北京「淡雪草莓」2222",
                    imgUrl:"string",
                    desc:"恋爱般可口草莓",
                    tags:[],
                    price:123,
                    weight:3243,
                    isWholeColumn:false,
                    id:3
                },
                {
                    name:"有机草莓四盒装",
                    imgUrl:"string",
                    desc:"养眼的翠绿，水嫩清新",
                    tags:[],
                    price:13,
                    weight:50,
                    isWholeColumn:false,
                    id:4
                }
            ],
            [
                {
                    name:"限北京「淡雪草莓」333",
                    imgUrl:"string",
                    desc:"恋爱般可口草莓",
                    tags:[],
                    price:123,
                    weight:3243,
                    isWholeColumn:false,
                    id:5
                },
                {
                    name:"有机草莓四盒装",
                    imgUrl:"string",
                    desc:"养眼的翠绿，水嫩清新",
                    tags:[],
                    price:13,
                    weight:50,
                    isWholeColumn:false,
                    id:6
                }
            ],
            [
                {
                    name:"限北京「淡雪草莓44444」",
                    imgUrl:"string",
                    desc:"恋爱般可口草莓",
                    tags:[],
                    price:123,
                    weight:3243,
                    isWholeColumn:false,
                    id:7
                },
                {
                    name:"有机草莓四盒装",
                    imgUrl:"string",
                    desc:"养眼的翠绿，水嫩清新",
                    tags:[],
                    price:13,
                    weight:50,
                    isWholeColumn:false,
                    id:8
                }
            ],
            [
                {
                    name:"限北京「淡雪草莓」55555",
                    imgUrl:"string",
                    desc:"恋爱般可口草莓",
                    tags:[],
                    price:123,
                    weight:3243,
                    isWholeColumn:false,
                    id:9
                },
                {
                    name:"有机草莓四盒装",
                    imgUrl:"string",
                    desc:"养眼的翠绿，水嫩清新",
                    tags:[],
                    price:13,
                    weight:50,
                    isWholeColumn:false,
                    id:10
                }
            ],
            [
                {
                    name:"限北京「淡雪草莓」66666",
                    imgUrl:"string",
                    desc:"恋爱般可口草莓",
                    tags:[],
                    price:123,
                    weight:3243,
                    isWholeColumn:false,
                    id:11
                },
                {
                    name:"有机草莓四盒装",
                    imgUrl:"string",
                    desc:"养眼的翠绿，水嫩清新",
                    tags:[],
                    price:13,
                    weight:50,
                    isWholeColumn:false,
                    id:12
                }
            ]
            
        ];
        
    const [tabActiveIndex, setTabActiveIndex] = useState(0); //按照数组下标来

    
    function handleTabChange(index:number){
        setTabActiveIndex(index);
        console.log("index :",index)
        // console.log("event: ",e)
    }

    return (
        <Block className="cateProductsWrap">
            <Toolbar bottom scrollable noShadow noHairline className="tabNav">
                {
                    catelist.map((item,index)=>{
                        return (
                            <Link tabLink={"#tab-"+index }
                                className={tabActiveIndex === index ? "cateTabActive" : ""}
                                tabLinkActive = {tabActiveIndex === index }
                                onClick = {()=>handleTabChange(index)}
                                key = {item.id}
                            >
                                <span>
                                    {item.name}
                                    {
                                        tabActiveIndex === index ?  (<i></i>) : ''
                                    }
                                </span>
                            </Link>
                        )
                    })
                }
            </Toolbar>

            <Tabs swipeable className='tabPannel'>
                {
                    productList.map((item, index)=>{
                        return(
                            <Tab id={"tab-"+index} 
                                className ="tabPannelItem" 
                                tabActive = {tabActiveIndex === index }
                                key = {index}
                            >
                                <Product2Columns type={1} products={item}></Product2Columns>
                            </Tab>
                        )
                    })
                }
            </Tabs>

        </Block>
    )
}

export default CatProducts
