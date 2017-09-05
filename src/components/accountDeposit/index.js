import React from 'react'
import style from "./index.css"
import AccountDepositView from '../accountDepositView'

class AccountDeposit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            depositCount: 0,
            inputState: {
                firstEdit: ture,
                state: 'error'
            },
            rmb: 0,
            exchangeRate: 6.597000,
            choceBank:'',
            bankState:true,
            banks:
                [
                    {
                        name: '中国银行',
                        code: '1',
                        logo: './xxx.jpg'
                    },
                    {
                        name: '中国银行',
                        code: '1',
                        logo: './xxx.jpg'
                    },
                    {
                        name: '中国银行',
                        code: '1',
                        logo: './xxx.jpg'
                    },
                    {
                        name: '中国银行',
                        code: '1',
                        logo: './xxx.jpg'
                    },
                    {
                        name: '中国银行',
                        code: '1',
                        logo: './xxx.jpg'
                    }
                ]


        }
    }

    submitFn() {
        if (this.state.inputState.state !== 'error') {
            if(this.state.choceBank){
                alert('成功入金' + this.state.depositCount+ '///' + this.state.choceBank)
            }else {
                this.setState({bankState:false})
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
        this.setState({choceBank: code})
    }

    render() {

        return (
            <AccountDepositView choceBank{this.choceBank.bind(this)} submit={this.submitFn.bind(this)}
                                change={this.depositChange.bind(this)} {...this.state}></AccountDepositView>
        )

    }
}

export default AccountDeposit;