import React, {Component} from 'react'
import style from './loginForm.css'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showQh: false
        }
    }

    onChange(key, rule, e) {
        let v = e.target.value
        let state = {
            value: v,
            vaild: true,
            error: ''
        }

        // rule.map((value)=>{alert(1);
        //     if(typeof value.pattern  === 'function')
        //     {
        //         if(!value.pattern(v)){
        //             state.vaild = false
        //             state.error = value.error
        //             return false
        //         }
        //     }else{
        //         if(!value.pattern.test(v)){
        //             state.vaild = false
        //             state.error = value.error
        //             return false
        //         }
        //     }
        // })

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
        //alert(e.target.innerHTML)
        this.props.onChange(key, e.target.innerHTML)
    }

    render() {
        return (
            <div className={style.wrap}>
                <div className={style.telephone}>
                    <div onTouchEnd={() => {
                        this.setState({showQh: !this.state.showQh})
                    }} className={style.telephoneLeft}>
                        +86<i className="fa fa-angle-down"></i>
                        <div
                            className={this.state.showQh ? style.telephoneLeftIn : style.telephoneLeftIn + ' ' + style.none}>
                            <div onTouchEnd={this.qhTouch.bind(this, 'qh')}>weghwh</div>
                            <div onTouchEnd={this.qhTouch.bind(this, 'qh')}>dgnjtgfjrtf</div>
                            <div onTouchEnd={this.qhTouch.bind(this, 'qh')}>wgrewyh</div>
                            <div onTouchEnd={this.qhTouch.bind(this, 'qh')}>rjrtjr</div>
                            <div onTouchEnd={this.qhTouch.bind(this, 'qh')}>ejrtj</div>
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
                    <div>
                        <input onChange={this.onChange.bind(this, 'picCode')} placeholder="请输入图形验证码"/>
                    </div>
                    <div>
                        <input onChange={this.onChange.bind(this, 'pwa')} placeholder="请输入密码"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm