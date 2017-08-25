import React, {Component} from 'react'
import RegForm from './regForm'
import LoginForm from './loginForm'
import RenderLayer from '../../components/renderLayer'
import Layer from '../layerR'

import style from './getAccount.css'

class GetAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: '',
            select: 'reg',
            reg: {
                qh: '',
                telephone: {value: '', vaild: false, error: '手机号码不能为空'},
                picCode: {value: '', vaild: false, error: '图形验证码不能为空'},
                numCode: {value: '', vaild: false, error: '验证码不能为空'},
                pwa: {value: '', vaild: false, error: '密码不能为空'}
            },
            login: {
                qh: '',
                telephone: {value: '', vaild: false, error: ''},
                picCode: {value: '', vaild: false, error: ''}
            }
        }
        this.onChange = this.onChange.bind(this)
        this.onChangeLogin = this.onChangeLogin.bind(this)

    }

    onChange(key, value) {
        this.state.reg[key] = value
        this.setState({reg: this.state.reg}, () => {
            console.log(this.state.reg)
        })
    }

    onChangeLogin(key, value) {
        this.state.login[key] = value
        this.setState({login: this.state.login}, () => {
            console.log(this.state.login)
        })
    }

    submitFn() {
        if (this.state.select === 'login') {

        } else {
            let reg = this.state.reg
            // if (reg.telephone.vaild && reg.numCode.vaild && reg.picCode.vaild && reg.pwa.vaild) {
            //     alert(111)
            // } else {
            //     alert(4444)
            // }
            for (let key in reg) {
                if (typeof reg[key] === 'object') {
                    if (!reg[key].vaild) {
                        this.setState({error: reg[key].error})
                        break
                    }
                }
            }
        }
    }

    render() {
        return (
            <div className={style.wrap}>
                <div className={style.wrap}>
                    <div className={style.logoWrap}><img className={style.logo} src={require('./logo.png')}/></div>
                </div>
                <div className={style.toggWrap}>
                    <div onTouchEnd={() => {
                        this.setState({select: 'login'})
                    }} className={this.state.select === 'login' ? style.checked : ''}>登录
                    </div>
                    <div onTouchEnd={() => {
                        this.setState({select: 'reg'})
                    }} className={this.state.select !== 'login' ? style.checked : ''}>注册
                    </div>
                </div>
                {
                    this.state.select === 'login' ? <LoginForm onChange={this.onChangeLogin}/> :
                        <RegForm onChange={this.onChange}/>
                }
                <div className={style.submitBtn} onClick={this.submitFn.bind(this)}>{this.state.select === 'login' ? '登录' : '立即注册'}</div>

                {
                    this.state.error ? <RenderLayer><Layer callback={() => {
                        this.setState({error: ''})
                    }} width="30" height="30" content={<div
                        style={{background: 'red'}}>{this.state.error}</div>}/></RenderLayer> : ''
                }


            </div>
        )
    }
}

export default GetAccount