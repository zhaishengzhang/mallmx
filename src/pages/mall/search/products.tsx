import React from 'react'
import { Block } from 'framework7-react'
import Prod2Columns from '../../components/product2Columns'

interface Props {
    products:any[]; //产品列表
}
// 产品列表调整为
function Products(props:Props) {
    const {products} = props;
    
    return (
        <Block>
            <Prod2Columns type={1} products={products}></Prod2Columns>
        </Block>
    )
}

export default Products
