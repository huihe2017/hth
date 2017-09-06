import React from 'react';
import style from  "./index.css"
import AccountWithdrawView from './accountWithdrawView'

class AccountWithdraw extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            withdrawInput:{
            	firstEdit:true,
				state:'error',
				value:''
			},
            rmb: 0,
            exchangeRate: 6.597000,
            withdrawMsg:{
                card:'2634654653737347',
                logo:'',
                name:''
            },
            allWithdraw:2355,
            pwd:{
                firstEdit:true,
                state:'error',
                value:''
            }

        }
	}

	getAll(){
    	this.state.withdrawInput.value = this.state.allWithdraw
    	this.setState({state:this.state})
	}

    withdrawChange(obj) {
        this.setState({
            withdrawInput: obj
        }, () => {
            if (obj.state !== 'error') {
                this.setState({rmb: obj.value * this.state.exchangeRate})
            }
        })

    }

    submitFn(){
		if(this.state.withdrawInput.firstEdit === true){
            this.state.withdrawInput.firstEdit === false
            this.setState({state: this.state})
			return false
		}
        if(this.state.pwd.firstEdit === true){
            this.state.pwd.firstEdit === false
            this.setState({state: this.state})
            return false
        }
		if(this.state.withdrawInput.state === 'error'){
            return false
		}
        if(this.state.pwd.state === 'error'){
            return false
        }

        alert('出金'+this.state.withdrawInput.value)

	}

	render(){

			return(
				<AccountWithdrawView change={this.withdrawChange.bind(this)}  {...this.state} getAll={this.getAll.bind(this)} submitFn={this.submitFn.bind(this)} className={style.wrap} ></AccountWithdrawView>
			)

		}
}
export default AccountWithdraw;