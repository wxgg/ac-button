/**
 *
 * @title 应用组件名称 带有下拉和跳转的分页
 * @description 应用组件描述，下拉是自定义
 *
 */

import React, { Component } from 'react';
import EnhancedPagination from '../../src/index';
 class Demo2 extends Component {
    constructor(props){
        super(props);
        this.state={
            dataNumSelect:[{ id: 0, name: '15条/页' }, { id: 1, name: '30条/页' }, { id: 2, name: '45条/页' }, { id: 3, name: '60条/页' }],
            dataNum:0,
        }
    }

    selectFunc=(value) =>{
        if(value == this.state.activePage) return false;
        this.setState({
            activePage:value
        })
    }

    dataNumSelect = (index,value) =>{
        alert('下拉的index='+index);
        alert('值='+value)
    }

    render () {
        return (
            <div className="demoPadding">
                <EnhancedPagination
                    items={20}
                    activePage={this.state.activePage}
                    onSelect={this.selectFunc}
                    onDataNumSelect={this.dataNumSelect}
                    dataNumSelect={this.state.dataNumSelect}
                    dataNum={this.state.dataNum}
                />
            </div>
        )
    }
}

export default Demo2;
