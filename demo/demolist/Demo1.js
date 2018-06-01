/**
 *
 * @title 西瓜UI Button
 * @description 西瓜UI 基础Button组件样式
 *
 */

import React, { Component } from 'react';
import {AcButton} from '../../src/index';
 class Demo1 extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
     onClick(){
        console.log('click')
     }
    render () {
        return (
            <div className="demoPadding">
                <AcButton colors="brand">品牌色</AcButton>
                <AcButton colors="danger">危险</AcButton>
                <AcButton colors="warning">警告</AcButton>
                <AcButton colors="default">info</AcButton>
            </div>
        )
    }
}

export default Demo1;
