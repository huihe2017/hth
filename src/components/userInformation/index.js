import React from "react";
import style from "./index.css";
import Personmsg from "./personalMsg/index";
import Bannkmsg from "./bankMsg/index";

//40  120  60
class Partnerreg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            personalMsg: {
                nickname:{
                    value: '大大大大飞机',
                    state: 'error',
                    firstEdit: true
                },
                email: {
                    value: 'dafeiji@163.com',
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
                }
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
            alert('提交成功')
        }else {
            return
        }
    }

    render() {
        return (
            <div className={style.partreg}>
                <div className={style.avatar}>
                    <input type="file"/>
                </div>
                <div className={style.part}>
                    <Personmsg change={this.change} data={this.state.personalMsg}/>
                </div>
                <div className={style.part}>
                    <Bannkmsg change={this.change} data={this.state.bankMsg}/>
                </div>


                    <button onClick={this.submitFn.bind(this)} className={style.submit}>
                        提交
                    </button>



            </div>
        )
    }
}

export default Partnerreg;