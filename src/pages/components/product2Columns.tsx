import React from 'react'
import {Row, Col } from 'framework7-react'
import ProductItem from './productItem'
import {oneDim2AnyDim} from '../../utils/toolsMethods'

interface Props {
    products:any[]
    type:number;
}

function Product2Columns(props: Props) {
    let {products,type} = props
    const rowArr = oneDim2AnyDim(products, 2);
    return (
        <div className="productColumn">
            {rowArr.map((rowItem, index)=>{
                    return <Row key={index}>{
                        rowItem.map((item:any)=>{
                                item.type = type;
                                   return (<Col className="colmun2" key={item.id} width="50" >
                                    <ProductItem 
                                        is2Column = {true}
                                        {...item}
                                    ></ProductItem>
                                </Col>)
                            })
                        }
                    </Row>
                })
            }
        </div>
    )
}

export default Product2Columns