/**
 *
 * @title 西瓜UI Button
 * @description 西瓜UI 其他Button样式组件
 *
 */

import React, { Component } from 'react';
import {AcButton} from '../../src/index';
 class Demo2 extends Component {
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
                <AcButton colors="default_line">带边框按钮</AcButton>
                <AcButton colors="default_alpha">透明按钮</AcButton>

                {/* <AcButton colors="check_selected">button</AcButton> */}
                {/* <AcButton colors="check_close">button</AcButton> */}
                <AcButton colors="default_white">默认按钮</AcButton>
                <AcButton colors="search_icon">默认按钮</AcButton>
                <AcButton colors="org">品牌色</AcButton>
                <AcButton colors="org_o">带边框按钮</AcButton>

                {/* <p>禁用</p>
                <div>
                    <AcButton disabled colors="brand">button</AcButton>
                    <AcButton disabled colors="default">button</AcButton>
                    <AcButton disabled colors="default_line">button</AcButton>
                    <AcButton disabled colors="default_alpha">button</AcButton>
                    <AcButton disabled colors="check_selected">button</AcButton>
                    <AcButton disabled colors="check_close">button</AcButton>
                    <AcButton disabled colors="default_white">button</AcButton>
                    <AcButton disabled colors="danger">button</AcButton>
                    <AcButton disabled colors="warning">button</AcButton>
                    <AcButton disabled colors="search_icon">button</AcButton>
                    <AcButton disabled colors="org">button</AcButton>
                    <AcButton disabled colors="org_o">button</AcButton>
                </div> */}
            </div>
        )
    }
}

export default Demo2;
