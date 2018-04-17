import React from 'react'

import { Button, Icon, Spin, Alert } from 'antd';
export default class MovieDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isloading: true,
            data: {}
        }
    }
    
    //等组件加载完了 再调用该钩子函数
    componentDidMount() {
        fetch('/api/movie/subject/' + this.props.match.params.id)
            .then(resp =>  resp.json() )
            .then(data => {
                this.setState({
                    isloading: false,
                    data: data
                })
            })

    }
    render(){
        if(this.state.isloading){
            return(
                <Spin tip="Loading...">
                    <Alert
                        message="友情提示"
                        description="数据正在加载."
                        type="info"
                    />
                </Spin>
            )
        }
        const data = this.state.data

        return(
            <div>
                <Button type="primary" onClick={()=>{this.props.history.go(-1)}}>
                    <Icon type="left" />返回电影列表
                </Button>
                <h1>{data.title}</h1>
                <div style={{textAlign:'center'}}>
                    <img src={data.images.large} alt=""/>
                </div>
                <div>
                    <p>主要演员</p>
                    <ul style={{display:'flex'}}>
                        {
                            data.casts.map(item =>{
                                return(
                                    <li key={item.id} style={{ textAlign: 'center', marginRight: 20 }}>
                                        <img src={item.avatars.small} alt={item.alt} width="100px"/>
                                        <p>{item.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div>
                        <p>剧情介绍:</p>
                        <p style={{textIndent:'2em'}}>
                            {data.summary}
                        </p>
                    </div>     
                </div>
            </div>
        )
    }


  
}