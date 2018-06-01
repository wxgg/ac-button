/**
 *
 * @title 应用组件名称 带有下拉和跳转的分页
 * @description 应用组件描述，下拉是默认的
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
                <AcButton actype="brand_btn">button</AcButton>
                <AcButton actype="default_btn">button</AcButton>
                <AcButton actype="default_line_btn">button</AcButton>
                <AcButton actype="default_alpha_btn">button</AcButton>
                <AcButton actype="check_selected_btn">button</AcButton>
                <AcButton actype="check_close_btn">button</AcButton>
                <AcButton actype="default_white_btn">button</AcButton>
                <AcButton actype="danger_btn">button</AcButton>
                <AcButton actype="warning_btn">button</AcButton>
                <AcButton actype="search_icon_btn">button</AcButton>
                <AcButton actype="org_btn">button</AcButton>
                <AcButton actype="org_btn_o">button</AcButton>
                <p>禁用</p>
                <div>
                    <AcButton disabled actype="brand_btn">button</AcButton>
                    <AcButton disabled actype="default_btn">button</AcButton>
                    <AcButton disabled actype="default_line_btn">button</AcButton>
                    <AcButton disabled actype="default_alpha_btn">button</AcButton>
                    <AcButton disabled actype="check_selected_btn">button</AcButton>
                    <AcButton disabled actype="check_close_btn">button</AcButton>
                    <AcButton disabled actype="default_white_btn">button</AcButton>
                    <AcButton disabled actype="danger_btn">button</AcButton>
                    <AcButton disabled actype="warning_btn">button</AcButton>
                    <AcButton disabled actype="search_icon_btn">button</AcButton>
                    <AcButton disabled actype="org_btn">button</AcButton>
                    <AcButton disabled actype="org_btn_o">button</AcButton>
                </div>
            </div>
        )
    }
}

export default Demo1;
