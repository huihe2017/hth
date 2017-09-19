import React from "react";
import style from "./index.css";
import Personmsg from "./personalMsg/index";
import Bannkmsg from "./bankMsg/index";
import axios from 'axios'


class Partnerreg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            personalMsg: {
                phone:{
                    value: '',
                    state: 'error',
                    firstEdit: true
                },
                email: {
                    value: '1111@163.com',
                    state: 'error',
                    firstEdit: true
                },
                sfz: {
                    value: '',
                    state: 'error',
                    firstEdit: true
                },
                name: {
                    value: '飞机',
                    state: 'error',
                    firstEdit: true
                },
                address: {
                    value: '地球',
                    state: 'error',
                    firstEdit: true
                }
            },
            bankMsg: {
                accountUsername: {
                    value: '飞机',
                    state: 'error',
                    firstEdit: true
                },
                accountCard: {
                    value: '7984698436146987',
                    state: 'error',
                    firstEdit: true
                },
                bankChoce: {
                    value: '',
                    state: 'error',
                    firstEdit: true
                },
                bankChoceMsg: {
                    sheng: {
                        value: '',
                        state: 'error',
                        firstEdit: true
                    },
                    shi: {
                        value: '',
                        state: 'error',
                        firstEdit: true
                    },
                    khh: {
                        value: '',
                        state: 'error',
                        firstEdit: true
                    },
                    state: 'error',
                    firstEdit: true
                }
            },
            dynamics: {
                state:'waiting'
            }

        }
        this.change = this.change.bind(this)
    }

    change(vaildMsg, type, name) {
        this.state[type][name] = vaildMsg
        this.setState({state: this.state})
        console.log(this.state);
    }

    submitFn() {
        let personalMsg = this.state.personalMsg
        let bankMsg = this.state.bankMsg
        let flag = true
        for (let s in personalMsg) {
            if(personalMsg[s].value==""){
                personalMsg[s].firstEdit && (personalMsg[s].firstEdit = false)
                if(personalMsg[s].state === 'error'){
                    flag = false
                }
            }
        }
        for (let s in bankMsg) {
            if( bankMsg[s].value==""){
                bankMsg[s].firstEdit && (bankMsg[s].firstEdit = false)
                if(bankMsg[s].state === 'error'){
                    flag = false
                }
            }

        }
        this.setState({personalMsg})
        this.setState({bankMsg})
        if(flag){
            let _this = this
            axios.patch('http://47.91.236.245:8000/user/customer/'+localStorage.id, {
                nickname: _this.state.personalMsg.nickname.value,
                email:_this.state.personalMsg.email.value,
                realname:_this.state.personalMsg.name.value,
                address:_this.state.personalMsg.address.value
            }).then(function (response) {
                if (response.data.code === 0) {
                }
            }).catch(function (error) {
                console.log(error);
            });




        }else {
            return
        }
    }

    componentDidMount(){
        let _this = this
        axios.get('http://47.91.236.245:8000/user/customer/'+localStorage.id).then(function (response) {
            if (response.data.code === 0) {
                _this.state.personalMsg.nickname.value = response.data.data.nickname
                _this.state.personalMsg.email.value = response.data.data.email
                _this.state.personalMsg.name.value = response.data.data.realname
                _this.state.personalMsg.address.value = response.data.data.address
                _this.setState({state:_this.state})
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className={style.partreg}>
                <div className={style.part}>
                    <div className={style.state}>
                        {
                            <div className={style.statec}>
                                <img src={require('./images/'+this.state.dynamics.state+'.png')} alt=""/>
                                {
                                    this.statecontent(this.state.dynamics.state)
                                }

                            </div>
                        }
                    </div>
                    <Personmsg change={this.change} data={this.state.personalMsg}/>
                </div>
                <div className={style.part}>
                    <Bannkmsg change={this.change} data={this.state.bankMsg}/>
                </div>

                    <div className={style.but}>
                        <button onClick={this.submitFn.bind(this)} className={style.submit}>
                            提交
                        </button>
                    </div>

            </div>
        )
    }
    statecontent(e){
        if(e=="complete"){
            return <span style={{color:"#5262ff"}}>
                已通过审核，可出金
            </span>
        }else if(e=="unComplete"){
            return <span style={{color:"#f59294"}}>
                开户未完成，入金限额5000
            </span>
        }else if(e=="waiting"){
            return <span style={{color:"#fab001"}}>
                审核中，已提升入金额度
            </span>
        }else if(e=="imperfection"){
            return <span style={{color:"#656b6f"}}>
                资料不完善，如有疑问请联系客服：400-8530-050
            </span>
        }
    }
}

export default Partnerreg;