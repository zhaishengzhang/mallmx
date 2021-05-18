import React from 'react'
import {Row, Col } from 'framework7-react'
import ProductItem from './productItem'

interface Props {
    type:number;
    products:any[]
}

function ProductColumn(props: Props) {
    const {products,type} = props

    return (
        <div className="productColumn">
            {
                products.map((item,index)=>{
                    item.type = type;
                    return <Row key={index}>
                        <Col>
                            <ProductItem 
                                is2Column = {false} 
                                {...item}
                            ></ProductItem>
                        </Col>
                    </Row>
                })
            }
            
        </div>
    )
}

export default ProductColumn