import React, {Component} from 'react'
import style from './regForm.css'
import Toast from '../../toast'


class RegForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showQh: false,
            countdown: false
        }
    }

    onChange(key, rule, e) {
        let v = e.target.value
        let state = {
            value: v,
            vaild: true,
            error: ''
        }

        for (let i = 0; i < rule.length; i++) {
            if (typeof rule[i].pattern === 'function') {
                if (!rule[i].pattern(v)) {
                    state.vaild = false
                    state.error = rule[i].error
                    break
                }
            } else {
                if (!rule[i].pattern.test(v)) {
                    state.vaild = false
                    state.error = rule[i].error
                    break
                }
            }
        }


        this.props.onChange(key, state)
    }

    qhTouch(key, e) {
        e.stopPropagation()
        this.props.onChange(key, e.target.innerHTML)
    }

    getSmsCode() {
        if(this.state.countdown){
            return false
        }
        if (!this.props.telephone.vaild) {
            Toast({
                type: "msg",
                msg: this.props.telephone.error,
                duration: 2000
            })
            return false
        }
        if (!this.props.picCode.vaild) {
            Toast({
                type: "msg",
                msg: this.props.picCode.error,
                duration: 2000
            })
            return false
        }

        this.setState({countdown: true})

    }

    render() {
        if (this.state.countdown) {
            let seconds = 5
            this.inter = setInterval(() => {
                this.refs['countdown'].innerHTML = (seconds--)+'s'
                if(this.refs['countdown'].innerHTML === '-1s'){
                    clearInterval(this.inter)
                    this.refs['countdown'].innerHTML = '重新发送'
                    this.setState({countdown:false})
                }
            }, 1000)
        }else {
            clearInterval(this.inter)
        }
        return (
            <div className={style.wrap}>
                <div className={style.baseStyle + ' ' + style.telephone}>
                    <div onTouchEnd={() => {
                        this.setState({showQh: !this.state.showQh})
                    }} className={style.telephoneLeft}>
                        <span>+86</span><i className="fa fa-angle-down"></i>
                        <div></div>
                        <div
                            className={this.state.showQh ? style.telephoneLeftIn : style.telephoneLeftIn + ' ' + style.none}>
                            <div className={style.checked} onTouchEnd={this.qhTouch.bind(this, 'qh')}>中国台湾</div>
                            <div onTouchEnd={this.qhTouch.bind(this, 'qh')}>中国澳门</div>
                        </div>
                    </div>
                    <div className={style.telephoneRight}>
                        <input onChange={this.onChange.bind(this, 'telephone', [{
                                pattern: (value) => {
                                    return value.length > 0
                                },
                                error: '手机号码不能为空'
                            },
                                {
                                    pattern: /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
                                    error: '手机格式不正确'
                                }
                            ]
                        )} placeholder="请输入手机号码" className={style.telephoneInput}/>
                    </div>
                </div>
                <div className={style.baseStyle + ' ' + style.picCode}>
                    <input onChange={this.onChange.bind(this, 'picCode', [{
                            pattern: (value) => {
                                return value.length === 4
                            },
                            error: '请输入4位图形验证码'
                        }
                        ]
                    )} placeholder="请输入图形验证码"/>
                    <img src={require('../../getAccount/logo.png')}/>
                </div>
                <div className={style.baseStyle + ' ' + style.code}>
                    <input onChange={this.onChange.bind(this, 'numCode', [{
                        pattern: (value) => {
                            return value.length === 4
                        },
                        error: '请输入4位短信验证码'
                    }
                    ])} placeholder="请输入验证码"/>
                    <div ref="countdown" className={this.state.countdown?style.blue:''} onClick={this.getSmsCode.bind(this)}>获取验证码</div>
                </div>
                <div className={style.baseStyle + ' ' + style.pwa}>
                    <input onChange={this.onChange.bind(this, 'pwa', [{
                        pattern: (value) => {
                            return value.length >= 4 && value.length <= 20
                        },
                        error: '请输入6-20位密码'
                    }
                    ])} placeholder="请设置6-20位密码"/>
                </div>
            </div>

        )
    }
}

export default RegForm