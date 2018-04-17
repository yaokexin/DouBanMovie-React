import React from 'react'

import { Layout, Menu,Icon } from 'antd';
const { Content, Sider } = Layout;


//router
import {
    Route,            //指定组件展示的位置 出口
    Link ,
    Switch             // 路由的导航  入口  
} from 'react-router-dom'

//组件
import Movie from './Movie.js'
import MovieDetail from './MovieDetail.js'


export default class MovieList extends React.Component {
    render() {
        return (
            <Layout>
                    <Sider width={200} style={{ background: '#fff', borderRight:"1px solid #ccc"}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1">
                            <Link to='/movielist/in_theaters'> 正在热映</Link> 
                            </Menu.Item>
                            <Menu.Item key="2">
                            <Link to='/movielist/coming_soon/1'> 即将上映</Link> 
                            </Menu.Item>
                            <Menu.Item key="3">
                            <Link to='/movielist/top250'>top250</Link> 
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        <Switch>
                            <Route path='/movielist/moviedetail/:id' component={MovieDetail}></Route>          
                            <Route path='/movielist/:movietype/:page?' component={Movie}></Route>
                        </Switch>
                        </Content>
                </Layout>
            </Layout>
        )
    }
}