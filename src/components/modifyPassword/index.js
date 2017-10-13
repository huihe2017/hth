import React from 'react';
import style from "./index.css"
import ModifyPasswordView from './modifyPasswordView'
import axios from 'axios'
import Toast from '../toast'



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
        let mpMsg = this.state;
        let flag=true
        for (let s in mpMsg) {
            mpMsg[s].firstEdit && (mpMsg[s].firstEdit = false)
        }
        this.setState({mpMsg})
        if(this.state.initialPassword.state !== 'error' && this.state.confirmPassword.state !== 'error' && this.state.setPassword.state !== 'error'){
            flag=true

        }
        if(!flag){
            return
        }
        if(flag){
            let _this = this
            axios.patch('http://47.91.236.245:8000/user/customer/'+ localStorage.id +'/password', {
                old_password : this.state.initialPassword.value,
                 new_password : this.state.setPassword.value
            })
                .then(function (response) {
                    if(response.data.code === 0){
                        Toast({
                            type: "msg",
                            msg: '已成功修改密码',
                            duration: 2000
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    change(obj,lebal){
        this.state[lebal] = obj;
        this.setState({state:this.state})
    }

    render() {
        return (
            <div className={style.modifyPassword}>
                <ModifyPasswordView
                    change={this.change.bind(this)}
                    submit={this.submitFn.bind(this)} {...this.state}/>
            </div>

        )

    }
}

export default modifyPassword;