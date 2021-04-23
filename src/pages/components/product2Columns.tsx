import React from 'react'
import {Row, Col } from 'framework7-react'
import ProductItem from './productItem'
import {oneDim2AnyDim} from '../../utils/toolsMethods'

interface Props {
    products:any[]
}

function Product2Columns(props: Props) {
    let {products} = props
    const rowArr = oneDim2AnyDim(products, 2);

    return (
        <div className="productColumn">
            {rowArr.map((rowItem, index)=>{
                    return <Row key={index}>{
                        rowItem.map((item:any)=>{
                                return (<Col key={item.id} width="50" >
                                    <ProductItem {...item}></ProductItem>
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