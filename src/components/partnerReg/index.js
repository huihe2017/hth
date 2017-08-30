import React from "react";
import style from "./index.css";
import Personmsg from "./personalMsg/index";
import Bannkmsg from "./bankMsg/index";
import Companymsg from "./companyMsg/index";

//40  120  60
class Partnerreg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            personalMsg: {
                email: {
                    value: '',
                    state: 'error',
                    firstEdit:true
                },
                userName: {
                    value: '',
                    state: 'error',
                    firstEdit:true
                },
                contactPerson: {
                    value: '',
                    state: 'error',
                    firstEdit:true
                },
                phoneMsg: {
                    phone: {
                        value: '',
                        state: 'error'
                    },
                    qh: {
                        value: ''
                    }
                },
                sfz: {
                    value: '',
                    state: 'error',
                    firstEdit:true
                }
            },
            bankMsg: {
                settlementAccount: {
                    value: '',
                    state: 'error',
                    firstEdit:true
                },
                settlementCardNumber: {
                    value: '',
                    state: 'error',
                    firstEdit:true
                },
                bankChoce: {
                    value: '',
                    state: 'error'
                },
                bankChoceMsg: {
                    sheng: {
                        value: '',
                        state: 'error'
                    },
                    shi: {
                        value: '',
                        state: 'error'
                    },
                    khh: {
                        value: '',
                        state: 'error'
                    },
                }
            },
            companyMsg: {
                companyName: {
                    value: '',
                    state: 'default'
                },
                companyAddress: {
                    value: '',
                    state: 'default'
                },
                companyCode: {
                    value: '',
                    state: 'default'
                },
                companyGrunp: {
                    value: '',
                    state: 'default'
                },
                companyBoss: {
                    value: '',
                    state: 'default'
                }

            }

        }
        this.change = this.change.bind(this)
    }
    change(vaildMsg,type,name){
        this.state[type][name] = vaildMsg
        this.setState({state:this.state})
        console.log(this.state);
    }
    render() {
        return (
            <div className={style.partreg}>
                <div className={style.avatar}>
                    <input type="file"/>
                </div>
                <div className={style.part}>
                    <Personmsg change={this.change} data = {this.state.personalMsg} />
                </div>
                <div className={style.part}>
                    <Bannkmsg change={this.change} data = {this.state.bankMsg}  />
                </div>
                <div className={style.part}>
                    <Companymsg change={this.change} data = {this.state.companyMsg} />
                </div>
                <div className={style.prfooter}>
                    <span className={style.protocol}>
                    提交申请即表示您已阅读并同意 <a href="javascript:void (0);">《海豚汇服务协议》</a>
                </span>
                    <button className={style.submit}>
                        提交申请
                    </button>
                </div>


            </div>
        )
    }
}

export default Partnerreg;