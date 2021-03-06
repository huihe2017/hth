import React from 'react'
import style from "./index.css"
import AccountDepositView from '../accountDepositView'

class AccountDeposit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            depositCount: 0,
            inputState: {
                value:"",
                firstEdit: true,
                state: 'error'
            },
            rmb: 0,
            exchangeRate: 6.597000,
            choceBank:'',
            cla:'error',
            bankState:true,
            banks: [
                    {
                        name: '中国银行',
                        code: '0',
                        logo: './images/0.png'
                    },
                    {
                        name: '中国银行',
                        code: '1',
                        logo: './images/1.png'
                    },
                    {
                        name: '中国银行',
                        code: '2',
                        logo: './images/2.png'
                    },
                    {
                        name: '中国银行',
                        code: '3',
                        logo: './images/3.png'
                    },
                    {
                        name: '中国银行',
                        code: '4',
                        logo: './images/4.png'
                    },
                    {
                        name: '中国银行',
                        code: '5',
                        logo: './images/5.png'
                    },
                    {
                        name: '中国银行',
                        code: '6',
                        logo: './images/6.png'
                    },
                    {
                        name: '中国银行',
                        code: '7',
                        logo: './images/7.png'
                    },
                    {
                        name: '中国银行',
                        code: '8',
                        logo: './images/8.png'
                    },
                    {
                        name: '中国银行',
                        code: '9',
                        logo: './images/9.png'
                    },
                    {
                        name: '中国银行',
                        code: '10',
                        logo: './images/10.png'
                    },
                    {
                        name: '中国银行',
                        code: '11',
                        logo: './images/11.png'
                    },
                    {
                        name: '中国银行',
                        code: '12',
                        logo: './images/12.png'
                    },
                    {
                        name: '中国银行',
                        code: '13',
                        logo: './images/13.png'
                    },
                    {
                        name: '中国银行',
                        code: '14',
                        logo: './images/14.png'
                    },
                    {
                        name: '中国银行',
                        code: '15',
                        logo: './images/15.png'
                    },
                    {
                        name: '中国银行',
                        code: '16',
                        logo: './images/16.png'
                    }

                ]
        }
    }

    submitFn() {
        console.log(this.state.inputState.value)
        if (this.state.inputState.value !== '') {
            if(this.state.choceBank){
                alert('成功入金' + this.state.depositCount+ '///' + this.state.choceBank)
            }else {
                this.setState({
                    bankState:false,
                    inputState: {
                        value:"",
                        firstEdit: false,
                        state: 'default'
                    },
                })
            }
        }else {
            this.setState({
                inputState: {
                    value:"",
                    firstEdit: false,
                    state: 'error'
                }
            })
            if(!this.state.choceBank){
                this.setState({
                    bankState:false
                })
            }
        }
    }

    depositChange(obj) {
        this.setState({
            inputState: obj
        }, () => {
            if (obj.state !== 'error') {
                this.setState({rmb: obj.value * this.state.exchangeRate})
                this.setState({depositCount: obj.value})
            }
        })

    }

    choceBank(code){
        this.setState({
            choceBank: code,
            bankState:false,
            cla:'default'
        })
    }

    render() {
        return (
            <div className={style.accountDeposit}>
                <AccountDepositView
                    choceBankList={this.choceBank.bind(this)}
                    submit={this.submitFn.bind(this)}
                    change={this.depositChange.bind(this)}
                    {...this.state}
                />
            </div>

        )

    }
}

export default AccountDeposit;