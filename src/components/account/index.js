import React from 'react';
import ReactDOM from 'react-dom';
import Account1 from "./account1/index";
import Account2 from "./account2/index";
import Account3 from "./account3/index";
import style from  "./index.css";

class Account extends React.Component{
    constructor(props){
        super(props);
        this.state={
        	issPut:false,
            isyPut:false
        }
    }
	render(){
		return(
			<div className={style.content}>
				{this.step()}
			</div>
		)
	}
    ppt1(){
        if(!this.state.issPut){
            this.setState({
                issPut:true
            })
        }
	}
    ppt2(){
        if(!this.state.isyPut){
            this.setState({
                isyPut:true
            })
        }
    }
	step(){
		if(this.state.issPut){
            if(this.state.isyPut){
                return <Account3/>
            }
            return <Account2 putt={this.ppt2.bind(this)}/>
		}

        	return <Account1 putt={this.ppt1.bind(this)}/>
	}

}

export default Account;

