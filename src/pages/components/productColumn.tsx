import React from 'react'
import {Row, Col } from 'framework7-react'
import ProductItem from './productItem'

interface Props {
    products:any[]
}

function ProductColumn(props: Props) {
    const {products} = props

    return (
        <div className="productColumn">
            {
                products.map((item,index)=>{
                    return <Row key={index}>
                        <Col>
                            <ProductItem {...item}></ProductItem>
                        </Col>
                    </Row>
                })
            }
            
        </div>
    )
}

export default ProductColumn