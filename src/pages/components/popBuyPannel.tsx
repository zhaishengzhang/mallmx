import React, { useState } from 'react'
import { PageContent, Block, Sheet, Link, Button } from 'framework7-react'
import ShopButton from "../components/shopButton";

interface Props {
    pop:boolean; //是否弹窗
    onSheetClosed:any;//关闭
}

function PopBuyPannel(props: Props) {
    const {pop, onSheetClosed} = props
    const [number, setNumber] = useState(0);

    const shopingCart = require('../../assets/icons/home-gdtc.png');

    //监听数据变化然后提交数据
    function stepperChangeHandle(value:any){
        setNumber(value);
    }
    // function onSheetClosed(){

    // }

    return (
        <div>
            <Sheet
                opened={pop} 
                closeByBackdropClick
                onSheetClosed={onSheetClosed}
                className="popBuyPannel"
                style={{height: 'auto'}}
            >
                <PageContent>
                    <Block className="top">
                        <Link sheetClose className="closeBtn"></Link>
                        <img src={shopingCart.default}></img>
                        <div className="info">
                            <p className="price">asdfasdfasdf<span>as222323<i></i></span></p>
                            <p className="choice">已选 asdfassfs<span>asdfasd</span></p>
                        </div>
                    </Block>
                    <Block className="productList">
                        <h4>描述:</h4>
                        <ul>
                            <li className="active">
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx</span>
                            </li>
                            <li>
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx</span>
                            </li>
                            <li>
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx全家乐享装xxx</span>
                            </li>
                            <li>
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx</span>
                            </li>
                            <li>
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx</span>
                            </li>
                            <li className="active">
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx</span>
                            </li>
                            <li>
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx</span>
                            </li>
                            <li>
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx全家乐享装xxx</span>
                            </li>
                            <li>
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx</span>
                            </li>
                            <li>
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx</span>
                            </li>
                            <li className="active">
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx</span>
                            </li>
                            <li>
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx</span>
                            </li>
                            <li>
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx全家乐享装xxx</span>
                            </li>
                            <li>
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx</span>
                            </li>
                            <li>
                                <img src={shopingCart.default}></img>
                                <span>全家乐享装xxx</span>
                            </li>
                        </ul>
                    </Block>
                    <Block className="number">
                        <span>购买数量:</span>
                        <span className="shopbtn">
                            <ShopButton 
                                number={0}
                                type={3}
                                numberHandle = {stepperChangeHandle}
                            ></ShopButton>
                        </span>
                    </Block>
                    <Block className="btnWrap">
                        <Button className="addToCart">加入购物车</Button>
                        <Button className="buy">立即购买</Button>
                    </Block>
                </PageContent>
            </Sheet>
        </div>
    )
}

export default PopBuyPannel
