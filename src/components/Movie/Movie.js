import React from  'react'

//antd中的加载组件
import { Spin, Alert } from 'antd';
//card 组件
import { Card } from 'antd';
const { Meta } = Card;
//rate 组件
import {Rate} from 'antd';


export default class Movie extends  React.Component{
    constructor(props){
        super(props)

        //初始的数据状态
        this.state = {
            isloading:true,
            //存放movielist数据
            moviedata:{}
        }
    }


    render(){
        // jsx中可以写if else
        if(this.state.isloading){
            return (
                <Spin tip="Loading...">
                    <Alert
                        message="友情提示"
                        description="数据正在加载."
                        type="info"
                    />
                </Spin>
            )
        }
        return(
            <div style={{ display: 'flex' ,flexWrap: 'wrap'}}>
                {
                    this.state.moviedata.subjects.map(item=>{
                        return(
                            <Card style={{textAlign:"center",width:200,margin:'0 20px 20px 0'}} bodyStyle={{padding:'10px 0'}} 
                            onClick = {()=>{this.getDetail(item.id)}}
                            key=""> 
                                <div className="custom-image">
                                    <img alt="example" width="100" height="150" src={item.images.small} />
                                </div>
                                <div className="custom-card">
                                    <h3>
                                        {item.title}
                                    </h3>
                                    <p>
                                        电影类型:{item.genres.join(',')}    
                                    </p>
                                    <p>
                                        上映年份:{item.year}    
                                    </p>
                                    < Rate disabled allowHalf defaultValue = {
                                        (item.rating.stars) / 10
                                    }
                                    />
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
        )
        
    }

    //跳转到详情页面
    getDetail(id){
        this.props.history.push('/movie/moviedetail/'+id)
    }

    //发送请求
    componentDidMount(){
        //只执行一次
        console.log("componentDidMount",this.props.match.params.movietype);
        //es6 的字符串模板
        const url = `api/movie/${this.props.match.params.movietype}`
        this.fetchMovie(url)
    }

    //路由参数的改变  通过this.props来监控
    componentWillReceiveProps(nextProps){
        //该钩子函数 在props改变时触发
        console.log('componentWillReceiveProps', nextProps.match.params.movietype);
        const url = `api/movie/${nextProps.match.params.movietype}`
        this.fetchMovie(url)
    }


    //封装 fetch获数据
    fetchMovie(url){
        this.setState({
            isloading:true
        })
        fetch(url)
            .then(function (response) {
                //将相应数据 转化为json对象  返回一个promise对象
                return response.json()
            })
            .then(data=> {
                console.log(data);
                this.setState({
                    isloading:false,
                    moviedata:data
                })
            })
    }
}