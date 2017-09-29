import React from 'react';
import style from "./index.css"
import UserCenterHeadView from './userCenterHeadView'
import axios from 'axios'


class UserCenterHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portrait: 'http://img1.tgbusdata.cn/v2/thumb/jpg/NkRCMiw2NDAsMTAwLDQsMywxLC0xLDAscms1MA==/u/wow.tgbus.com/UploadFiles_2396/201605/20160530094443812.jpg',
            userName: '水色丹青',
            phone: localStorage.userName.split(' '),
            //phone: ['86', '13725565878'],
            MT4user: 6666666,
            floating: 44,
            status:0,
            worth: 33,
            balance: 444,
            dynamics:[
                {
                    state:'complete',
                    content:'完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成完成'
                },
                {
                    state:'unComplete',
                    content:'未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成未完成'
                },
                {
                    state:'waiting',
                    content:'等待完成等待完成等待完成等待完等待完成等待完成等待完成等待完成等待完成等待完成等待完成等待完成成'
                },
                {
                    state:'news',
                    content:'新闻动态新闻动态新闻动态新闻动态'
                }
            ],
            userdata:{
                state:'default',
                value:"大大大大飞机"
            }
        }
    }

    binding() {
        alert(10)
    }
    change(vaildMsg, name) {
        this.state[name] = vaildMsg
        this.setState({state: this.state})
        console.log(this.state.userdata);
    }
    submitFn() {
        let userdata = this.state.userdata
        let flag = true
        for (let s in userdata) {
            if(userdata.state === 'error'){
                flag = false
            }
        }
        this.setState({userdata})
        if(!flag){
            return
        }
        if(flag){
            alert('提交成功')
        }else {
            return
        }
    }
    componentDidMount(){
        let _this = this
        axios.get('http://47.91.236.245:8000/user/customer/'+localStorage.id).then(function (response) {
            if (response.data.code === 0) {
                _this.state.userName = response.data.data.nickname
                _this.state.openingTime = response.data.data.open_time
                _this.setState({state:_this.state})
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <UserCenterHeadView handle={this.binding} {...this.state} submitFn={this.submitFn.bind(this)} change={this.change.bind(this)}/>
        )

    }
}

export default UserCenterHead;