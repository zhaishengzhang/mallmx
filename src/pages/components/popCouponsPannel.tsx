import React, { useState } from 'react'
import { PageContent, Block, Sheet, Link, Toolbar,Tab,Tabs} from 'framework7-react'
import CouponsItem from "../components/couponsItem";

interface Props {
    pop:boolean; //是否弹窗
    onSheetClosed:any;//关闭
}

function PopCouponsPannel(props: Props) {
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
                className="popCouponsPannel"
                style={{height: '50%'}}
                backdrop
                swipeToClose
            >
                <PageContent>
                    <Block className="top">
                        <Toolbar tabbar bottom>
                            <Link tabLink="#tab-1" tabLinkActive>通用券<i></i></Link>
                            <Link tabLink="#tab-2">商品券<i></i></Link>
                        </Toolbar>
                    </Block>
                    <Block className="couponsWrap">
                        <Tabs>
                            <Tab id="tab-1" className="page-content" tabActive>
                                <Block>
                                    <CouponsItem
                                        type = {1}
                                        status ={1}
                                        operate = {1}
                                    ></CouponsItem>
                                </Block>
                            </Tab>
                            <Tab id="tab-2" className="page-content">
                                <Block>
                                    <CouponsItem
                                        type = {2}
                                        status ={1}
                                        operate = {1}
                                    ></CouponsItem>
                                </Block>
                            </Tab>
                        </Tabs>
                    </Block>
                </PageContent>
            </Sheet>
        </div>
    )
}

export default PopCouponsPannel
