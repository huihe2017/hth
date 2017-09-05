import React from 'react';
import style from "./index.css"
import ModifyPasswordView from './modifyPasswordView'

class modifyPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialPassword: {
                firstEdit: true,
                value: '',
                state: 'error'
            },
            setPassword: {
                firstEdit: true,
                value: '',
                state: 'error'
            },
            confirmPassword: {
                firstEdit: true,
                value: '',
                state: 'error'
            },
        }
    }

    submitFn(){
        if(this.state.initialPassword.state !== 'error' && this.state.confirmPassword.state !== 'error' && this.state.setPassword.state !== 'error'){
            alert('修改成功')
        }
    }

    change(obj,lebal){
        this.state[lebal] = obj;
        this.setState({state:this.state})
    }

    render() {

        return (
            <ModifyPasswordView change={this.change.bind(this)} submit={this.submitFn.bind(this)} {...this.state}></ModifyPasswordView>
        )

    }
}

export default modifyPassword;