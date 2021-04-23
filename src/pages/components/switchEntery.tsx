import React from 'react'

interface Props {
    type:number; //入口类型, 1,去选菜, 2、去首页
}

function SwitchEntery(props: Props) {
    const {type} = props

    const toxcicon = require('../../assets/icons/xuancai-entery.png')
    const toxchome = require('../../assets/icons/mall-entery.png')


    return (
        <div className="switchEntery">
            {
            type == 1 ?
                <img src={toxcicon.default}></img>
            :
                <img src={toxchome.default}></img>
            }
        </div>
    )
}

export default SwitchEntery
