
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";import Demo2 from "./demolist/Demo2";
var DemoArray = [{"example":<Demo1 />,"title":" 西瓜UI Button","code":"/**\n *\n * @title 西瓜UI Button\n * @description 西瓜UI 基础Button组件样式\n *\n */\n\nimport React, { Component } from 'react';\nimport AcButton from '../../src/index';\n class Demo1 extends Component {\n    constructor(props){\n        super(props)\n        this.state={\n        }\n    }\n     onClick(){\n        console.log('click')\n     }\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <AcButton colors=\"brand\">品牌色</AcButton>\n                <AcButton colors=\"danger\">危险</AcButton>\n                <AcButton colors=\"warning\">警告</AcButton>\n                <AcButton colors=\"default\">信息</AcButton>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 西瓜UI 基础Button组件样式"},{"example":<Demo2 />,"title":" 西瓜UI Button","code":"/**\r\n *\r\n * @title 西瓜UI Button\r\n * @description 西瓜UI 其他Button样式组件\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport AcButton from '../../src/index';\r\n class Demo2 extends Component {\r\n    constructor(props){\r\n        super(props)\r\n        this.state={\r\n        }\r\n    }\r\n     onClick(){\r\n        console.log('click')\r\n     }\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <AcButton colors=\"default_line\">带边框按钮</AcButton>\r\n                <AcButton colors=\"default_alpha\">透明按钮</AcButton>\r\n \r\n                <AcButton colors=\"default_white\">默认按钮</AcButton>\r\n                <AcButton colors=\"search_icon\">默认按钮</AcButton>\r\n                <AcButton colors=\"org\">品牌色</AcButton>\r\n                <AcButton colors=\"org_o\">带边框按钮</AcButton>\r\n \r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 西瓜UI 其他Button样式组件"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
