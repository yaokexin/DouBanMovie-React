import React from 'react'
import ReactDOM from 'react-dom'

//导入根组件
import App from '../components/app.js'

//导入css
import '../css/index.css'

ReactDOM.render(
    <App />,
    document.getElementById('app')
)


//记录: antd的基本使用步骤
//1.找到相应的组件
//2.修改成相应的样式和结构