import React from 'react';
// import ReactDOM from 'react-dom';
import { Layout, Menu} from 'antd';
const { Header, Content, Footer } = Layout;

//导入路由组件
import {
    HashRouter as Router, //路由容器组件,包裹整个应用
    Route,            //指定组件展示的位置 出口
    Link              // 路由的导航  入口  
} from 'react-router-dom'
//Router 使用步骤
//1.导入路由组件
//2.用<Router></Router>的组件包裹 整个结构
//3.透过route 组件确定对应的 内容

//导入home组件
import Home from '../components/Home/Home.js'

import MovieList from '../components/Movie/MovieList.js'
import About from '../components/About/About.js'


//导出 根组件
export default class App extends React.Component{
    render(){
        return(
            <Router>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">
                            <Link to='/'>首页</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/movielist/in_theaters'>电影列表</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to='/about'>关于</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ }}>
                    <div style={{ background: '#fff', minHeight: 280 }}>
                    {/* path是路由地址.需要与link中的to 相互匹配 
                        component是展示的组件的名字
                        exact 表示绝对匹配
                    */}
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/movielist" component={MovieList} ></Route>
                    <Route path="/about" component={About} exact></Route>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    豆瓣电影 ©2016 Created by 姚可鑫
                </Footer>
            </Layout>
            </Router>
        )
    }
}