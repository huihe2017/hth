import React from 'react';
import style from  "./index.css"
import AccountWithdrawView from './accountWithdrawView'
import Layer from '../renderLayer/index'
import Register from '../register/index'

class AccountWithdraw extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShowFind:false,
            withdrawInput:{
            	firstEdit:true,
				state:'error',
				value:''
			},
            rmb: 0,
            exchangeRate: 6.597000,
            withdrawMsg:{
                card:'2634654653737347',
                name:'工商银行'
            },
            isShowHand:false,
            allWithdraw:2546,
            pwd:{
                firstEdit:true,
                state:'error',
                value:''
            }
        }
	}

	getAll(){

    	this.setState({
            withdrawInput:{
                value:this.state.allWithdraw,
                firstEdit:false,
                state:'default'
            },
            rmb:this.state.allWithdraw*this.state.exchangeRate
    	})
	}

	render(){
		return(
			<div className={style.accountWithdraw}>
                <AccountWithdrawView
                    change={this.withdrawChange.bind(this)}
                    {...this.state}
                    getAll={this.getAll.bind(this)}
                    submitFn={this.submitFn.bind(this)}
                    toFind={this.toggle.bind(this)}
                    className={style.wrap}
                />
            {this.state.isShowFind ?
                        <Layer closeFn={this.hideFind.bind(this)}><Register title={"忘记密码"} hid={true}/></Layer> : ''}
            </div>
        )
	}
    toggle(){
        this.setState({isShowFind: true}, () => {
        })
    }
    hideFind(){
        this.setState({isShowFind: false}, () => {
        })
    }
    withdrawChange(obj,lebal) {
        this.state[lebal] = obj
        this.setState({
            state: this.state
        }, () => {
            this.setState({rmb: this.state.withdrawInput.value * this.state.exchangeRate})
        })
    }

    submitFn(){
        let flag=true;
        if(this.state.withdrawInput.firstEdit === true){
            this.state.withdrawInput.firstEdit = false
            this.setState({state: this.state})
        }
        if(this.state.pwd.firstEdit === true){
            this.state.pwd.firstEdit = false
            this.setState({state: this.state})
        }

        if(this.state.withdrawInput.state === 'error'){
            flag=false
        }
        if(this.state.pwd.state === 'error'){
            flag=false
        }
        if(flag){
            alert('出金'+this.state.withdrawInput.value)
        }else {
            return
        }

    }

}
export default AccountWithdraw;