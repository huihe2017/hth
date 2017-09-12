import style from  "./index.css"
import React from 'react';
import SelectPhone from "../partnerReg/selPhone";
import Input from "../partnerReg/input";
import axios from 'axios'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            prephone:[
                {
                    "area":"中国大陆",
                    "num":"+86"
                },
                {
                    "area":"中国台湾",
                    "num":"+886"
                },
                {
                    "area":"中国澳门",
                    "num":"+853"
                }
            ],
            sednum:{
                num:"+86"
            },
            isShow:false,
            loginMsg:{
                loginUser: {
                    value: '',
                    state: 'error',
                    firstEdit: true
                },
                loginGraphics: {
                    value: '',
                    state: 'error',
                    firstEdit: true
                },
                loginPassword: {
                    value: '',
                    state: 'error',
                    firstEdit: true
                }
            }

        }
    }



    submitFn() {
        let loginMsg = this.state.loginMsg
        let flag = true
        for (let s in loginMsg) {
            loginMsg[s].firstEdit = false
            if(loginMsg[s].state === 'error'){
                flag = false;
            }
        }
        this.setState({loginMsg})

        if(!flag){
            return
        }
        console.log(this.state.loginMsg.loginUser.phone.value)
        let _this = this
        axios.post('http://47.91.236.245:3020/sign-in', {
            phone: this.state.loginMsg.loginUser.phone.value,
            password: this.state.loginMsg.loginPassword.value,
            agent:'web'

        })
            .then(function (response) {
                if(response.data.code === 0){
                    localStorage.userName = response.data.data.phone
                    localStorage.token = response.data.data.token
                    _this.props.login()
                }
            })
            .catch(function (error) {
                console.log(error);
            });





    }

    render(){
        let sss={
            display:"none"
        };
        let ss={
            display:"block"
        };
        return(
            <div className={style.llogin}  style={this.state.styless}>
                <div className={style.mmb} onClick={this.isshow.bind(this)} style={this.state.isShow?ss:sss}></div>
                <div className={style.llogincontent}>
                    <div className={style.llctitle}>
                        欢迎来到海豚汇、请登录
                    </div>
                    <div className={style.llcphone}>
                        <SelectPhone
                            lebal="loginUser"
                            change={this.change.bind(this)}
                            twidth={80}
                            iwidth={220}
                            pattern={/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/}
                            align={"bottom"}
                            tip={"请输入正确的手机号码"}
                            cla={this.state.loginMsg.loginUser.state}
                            firstEdit={this.state.loginMsg.loginUser.firstEdit}/>

                    </div>
                    <div className={style.llccaptcha}>
                        <Input
                            st={'100%'}
                            pla={"请输入图形验证码"}
                            lebal="loginGraphics"
                            change={this.change.bind(this)}
                            cla={this.state.loginMsg.loginGraphics.state}
                            align={"bottom"}
                            tip={"请输入正确的图形验证码"}
                            pattern={/\S/}
                            firstEdit={this.state.loginMsg.loginGraphics.firstEdit}
                        />
                        <div className={style.captcha}></div>
                    </div>

                    <div className={style.llcfirstmm}>
                        <Input
                            st={'100%'}
                            pla={"密码6-24位字母、数字、字符"}
                            lebal="loginPassword"
                            pattern={/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/}
                            change={this.change.bind(this)}
                            pwa={true}
                            cla={this.state.loginMsg.loginPassword.state}
                            align={"bottom"}
                            tip={"请输入正确的密码"}
                            firstEdit={this.state.loginMsg.loginPassword.firstEdit}
                        />
                        <a href="javascript:void (0);"  onClick={()=>{this.props.toFind(false)}}>忘记密码？</a>
                    </div>
                    <div className={style.llcsubmit}>
                        <input onClick={this.submitFn.bind(this)} type="button" value='马上登录'/>
                    </div>
                    <div className={style.gollogin}>
                        <span>
                            没有账户、<a href="javascript:void (0);" onClick={()=>{this.props.toReg(false)}} >注册账号</a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    off(){
        this.setState({
            styless:{
                display:"none"
            }
        })
    }

    prePhone(e){
        this.setState({
            isShow:true,
        },()=>{
            if(this.state.isShow){
                this.setState({
                    isShow:true,
                    border:{
                        border:"1px solid #5262ff",
                        boxShadow:"0 0 5px 5px rgba(82,98,255,0.1)"
                    }
                });
            } else {
                this.setState({
                    isShow:false,
                    border:{
                        border:"1px solid #dfdce4",
                        boxShadow:"0 0 5px 5px transparent"
                    }
                });
            }
        })
    }

    getNum(e){
        this.setState({
            sednum: {
                num: e
            },
            isShow:false,
            border:{
                border:"1px solid #dfdce4",
                boxShadow:"0 0 5px 5px transparent"
            }
        });
        this.flag=false;
    }
    isshow(){
        this.setState({
            isShow:false,
            border:{
                border:"1px solid #dfdce4",
                boxShadow:"0 0 5px 5px transparent"
            }
        })
    }
    change(vaildMsg, name) {

        this.state.loginMsg[name] = vaildMsg;
        this.setState({state: this.state});

    }



}

export default Login;