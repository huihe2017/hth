import style from "./index.css"
import React from 'react';
import SelectPhone from "../partnerReg/selPhone";
import Input from "../partnerReg/input";
import axios from "axios"
import Layer from '../renderLayer'
import Toast from '../toast'

 axios.defaults.withCredentials = true
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            prephone: [
                {
                    "area": "中国大陆",
                    "num": "+86"
                },
                {
                    "area": "中国台湾",
                    "num": "+886"
                },
                {
                    "area": "中国澳门",
                    "num": "+853"
                }
            ],
            sednum: {
                num: "+86"
            },
            showNum: 60,
            isShow: false,
            img: <img onClick={(e) => {
                e.target.src = 'http://47.91.236.245:4030/user/image-captcha?tm=' + Math.random()
            }} style={{height: 40, width: 150}}
                      src={"http://47.91.236.245:4030/user/image-captcha?tm=" + Math.random()}/>,
            isytu: true,
            isBlock: false,
            regMsg: {
                regUser: {
                    value: '',
                    state: 'error',
                    firstEdit: true
                },
                regGraphics: {
                    value: '',
                    state: 'error',
                    firstEdit: true
                },
                regMsg: {
                    value: '',
                    state: 'error',
                    firstEdit: true,
                    istu: false
                },
                regPassword: {
                    value: '',
                    state: 'error',
                    firstEdit: true
                },
                regRepassword: {
                    value: '',
                    state: 'error',
                    firstEdit: true
                }
            }
        }
    }

    submitFn() {//alert(localStorage)
        //localStorage.userName = 'fbgreb'
        // this.props.login()

        let regMsg = this.state.regMsg
        let flag = true
        for (let s in regMsg) {
            regMsg[s].firstEdit && (regMsg[s].firstEdit = false)
            if (regMsg[s].state === 'error') {
                flag = false
            }
        }

        this.setState({regMsg})
        if (!flag) {
            return
        }
        this.setState({loading: true})
        let _this = this

        if(this.props.hid){
            axios.put('http://47.91.236.245:4030/user/customer/reset-password', {
                phone: this.state.regMsg.regUser.phone.value,
                password: this.state.regMsg.regPassword.value,
                sms_captcha: this.state.regMsg.regMsg.value

            })
                .then(function (response) {
                    console.log(response);
                    if (response.code === '0') {
                        _this.toLogin()
                    }else{
                        _this.setState({loading: false})
                        Toast({
                            type: "msg",
                            msg: response.msg,
                            duration: 2000
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            return false
        }



        axios.post('http://47.91.236.245:4030/user/customer', {
            phone: this.state.regMsg.regUser.phone.value,
            password: this.state.regMsg.regPassword.value,
            sms_captcha: this.state.regMsg.regMsg.value

        })
            .then(function (response) {
                console.log(response);
                if (this.props.toLogin) {
                    this.props.toLogin(true)
                }
                if (response.code === '0') {
                    _this.toLogin()
                }else{
                    _this.setState({loading: false})
                    Toast({
                        type: "msg",
                        msg: response.msg,
                        duration: 2000
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    toLogin() {
        let _this = this
        axios.post('http://47.91.236.245:4030/sign-in', {
            phone: this.state.regMsg.regUser.phone.value,
            password: this.state.regMsg.regPassword.value,
            image_captcha: this.state.regMsg.regGraphics.value

        })
            .then(function (response) {
                if (response.data.code === 0) {
                    localStorage.userName = response.data.data.phone
                    localStorage.token = response.data.data.token
                    _this.props.login()
                    _this.setState({loading: false})
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        let sss = {
            display: "none"
        };
        let ss = {
            display: "block"
        };
        return (
            <div className={style.login}>
                <div className={style.mmb} onClick={this.isshow.bind(this)} style={this.state.isShow ? ss : sss}></div>
                <div className={style.logincontent}>
                    <div className={style.lctitle}>
                        {this.props.title}
                    </div>
                    <div className={style.llcphone}>
                        <SelectPhone
                            lebal="regUser"
                            change={this.change.bind(this)}
                            twidth={80}
                            iwidth={220}
                            pattern={/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/}
                            cla={this.state.regMsg.regUser.state}
                            align={"bottom"}
                            tip={"请输入正确的手机号码"}
                            firstEdit={this.state.regMsg.regUser.firstEdit}/>

                    </div>
                    <div className={style.lccaptcha}>
                        <Input
                            st={'100%'}
                            pla={"图形验证码"}
                            pattern={/\S/}
                            lebal="regGraphics"
                            change={this.change.bind(this)}
                            cla={this.state.regMsg.regGraphics.state}
                            align={"bottom"}
                            tip={"请输入正确的验证码"}
                            firstEdit={this.state.regMsg.regGraphics.firstEdit}
                        />
                        <div className={style.captcha}>
                            {this.state.img}
                            {/*<img onClick={(e)=>{e.target.src = 'http://47.91.236.245:4030/user/image-captcha?tm='+Math.random()} } style={{height:40,width:150}} src={"http://47.91.236.245:4030/user/image-captcha?tm="+Math.random()} />*/}
                        </div>
                    </div>
                    <div className={style.lcmessage}>
                        <Input
                            st={'100%'}
                            pla={"短信验证码"}
                            pattern={/\S/}
                            lebal="regMsg"
                            change={this.change.bind(this)}
                            cla={this.state.regMsg.regMsg.state}
                            align={"bottom"}
                            tip={"请输入正确的验证码"}
                            firstEdit={this.state.regMsg.regMsg.firstEdit}
                        />
                        <div className={style.butt}>
                            <button name="regm" onClick={this.state.isBlock ? null : this.timeOut.bind(this)}
                                    style={this.state.regMsg.regMsg.istu ? {color: "#3b3d40"} : {color: "#fff"}}
                                    disabled={this.state.regMsg.regMsg.istu ? '' : 'disabled'}>
                                <span style={this.state.isBlock ? sss : ss}>发送短信验证码</span>
                                <span style={this.state.isBlock ? ss : sss}>
                                    <span>{this.state.showNum}</span>s后重新获取
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className={style.llcfirstmm}>
                        <Input
                            st={'100%'}
                            pla={"请输入密码"}
                            lebal="regPassword"
                            pattern={/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/}
                            change={this.change.bind(this)}
                            pwa={true}
                            cla={this.state.regMsg.regPassword.state}
                            align={"bottom"}
                            tip={"请输入正确的密码"}
                            firstEdit={this.state.regMsg.regPassword.firstEdit}
                            iid={"pass"}
                        />

                    </div>
                    <div className={style.llcfirstmm}>
                        <Input
                            st={'100%'}
                            pla={"请再次输入密码"}
                            lebal="regRepassword"
                            change={this.change.bind(this)}
                            pwa={true}
                            cla={this.state.regMsg.regRepassword.state}
                            iid="repass"
                            align={"bottom"}
                            tip={"请保证两次密码输入相同"}
                            firstEdit={this.state.regMsg.regRepassword.firstEdit}

                        />
                    </div>
                    <div className={style.lcsubmit}>
                        <button onClick={this.submitFn.bind(this)}>
                            {this.props.butword}
                        </button>
                    </div>
                    <div className={style.gologin} hidden={this.props.hid}>
                        <span>
                            已有账户、<a onClick={() => {
                            this.props.toLogin(true)
                        }} href="javascript:void (0);">直接登陆</a>
                        </span>
                    </div>
                </div>
                {
                    this.state.loading ? <Layer tip close={true} shadowIndex="100"><i style={{color: '#ccc'}}
                                                                                      className="fa fa-spinner fa-pulse"></i></Layer> : ''
                }
            </div>
        )
    }

    change(vaildMsg, name) {
        if (name == "regGraphics") {
            if (vaildMsg.state == "default") {
                if (this.state.regMsg.regUser.state == "default") {
                    this.state.regMsg.regMsg.istu = true
                } else {
                    this.state.regMsg.regMsg.istu = false
                }
                this.setState({
                    state: this.state
                });
            } else if (vaildMsg.state == "error") {
                if (this.state.regMsg.regUser.state == "default") {
                    this.state.regMsg.regMsg.istu = false
                } else {
                    this.state.regMsg.regMsg.istu = false

                }

            }
        }

        if (name == "regMsg") {
            console.log(this.state.regMsg.regMsg.istu)

            if (this.state.regMsg.regMsg.istu) {
                this.state.regMsg[name] = {...vaildMsg, istu: true};
            }

        } else {
            this.state.regMsg[name] = vaildMsg;
        }
        console.log(this.state)
        this.setState({state: this.state});


    }

    //点击切换电话前缀的显示状态
    prePhone(e) {
        this.setState({
            isShow: true,
        }, () => {
            if (this.state.isShow) {
                this.setState({
                    isShow: true,
                    border: {
                        border: "1px solid #5262ff",
                        boxShadow: "0 0 5px 5px rgba(82,98,255,0.1)"
                    }
                });
            } else {
                this.setState({
                    isShow: false,
                    border: {
                        border: "1px solid #dfdce4",
                        boxShadow: "0 0 5px 5px transparent"
                    }
                });
            }
        })

    }

    //获取点击所得电话前缀，并恢复默认样式
    getNum(e) {
        this.setState({
            sednum: {
                num: e
            },
            isShow: false,
            border: {
                border: "1px solid #dfdce4",
                boxShadow: "0 0 5px 5px transparent"
            }
        });
        this.flag = false;
    }

    isshow() {
        this.setState({
            isShow: false,
            border: {
                border: "1px solid #dfdce4",
                boxShadow: "0 0 5px 5px transparent"
            }
        })
    }


    //短信验证计时器
    timeOut() {
        this.setState({
            isBlock: true
        }, () => {
            if (this.state.isBlock) {

                axios.post('http://47.91.236.245:4030/user/sms-captcha', {
                    phone: this.state.regMsg.regUser.phone.value,
                    image_captcha: this.state.regMsg.regGraphics.value,
                    business:!this.props.hid?'REGISTER':'FIND_PASSWORD'

                })
                    .then(function (response) {
                        console.log(response);
                        if(response.code === '0'){
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });


                let t1 = setInterval(t11.bind(this), 1000);

                function t11() {
                    this.setState({
                        showNum: this.state.showNum - 1
                    })
                    if (this.state.showNum <= 0) {
                        this.setState({
                            isBlock: false,
                            showNum: 60
                        })
                        clearInterval(t1);
                    }
                }
            }
        });
    }
}

export default Register;

