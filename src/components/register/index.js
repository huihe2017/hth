import style from  "./index.css"
import React from 'react';
import SelectPhone from "../partnerReg/selPhone";
import Input from "../partnerReg/input";

class Register extends React.Component{
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
            showNum:60,
            isShow:false,
            isytu:true,
            isBlock:false,
            regMsg:{
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

    submitFn() {
        let regMsg = this.state.regMsg
        let flag = true
        for (let s in regMsg) {
            regMsg[s].firstEdit && (regMsg[s].firstEdit = false)
            if(regMsg[s].state === 'error'){
                flag = false
            }
        }

        this.setState({regMsg})
        if(flag){
            alert('提交成功')
        }
    }
    render(){
        let sss={
            display:"none"
        };
        let ss={
            display:"block"
        };
        return(
            <div className={style.login} style={this.state.styless}>
                <div className={style.mmb} onClick={this.isshow.bind(this)} style={this.state.isShow?ss:sss}></div>
                <div className={style.logincontent}>
                    <div className={style.lctitle}>
                        注册海豚汇账号
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
                            <button name="regm" onClick={this.state.isBlock?null:this.timeOut.bind(this)} style={this.state.regMsg.regMsg.istu?{color:"#3b3d40"}:{color:"#fff"}} disabled={this.state.regMsg.regMsg.istu?'':'disabled'}>
                                <span  style={this.state.isBlock?sss:ss}>发送短信验证码</span>
                                <span style={this.state.isBlock?ss:sss}>
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
                            id={"pass"}
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
                            align={"bottom"}
                            tip={"请保证两次密码输入相同"}
                            firstEdit={this.state.regMsg.regRepassword.firstEdit}

                        />
                    </div>
                    <div className={style.lcsubmit}>
                        <button onClick={this.submitFn.bind(this)}>
                            完成注册并登录
                        </button>
                    </div>
                    <div className={style.gologin}>
                        <span>
                            已有账户、<a onClick={()=>{this.props.toLogin(true)}} href="javascript:void (0);">直接登陆</a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    change(vaildMsg, name) {
        if(name=="regGraphics"){
            if(vaildMsg.state=="default"&&this.state.regMsg.regUser.state=="default"){
                this.setState({
                    regMsg:{
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
                            istu: true
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
                });
            }else if(vaildMsg.state=="error"){
                this.setState({
                    regMsg:{
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
                })
            }
        }

        if(name=="regMsg"){
            if(this.state.regMsg.regMsg.istu){
                this.state.regMsg[name] = {...vaildMsg,istu: true};
            }
        }else {
            this.state.regMsg[name] = vaildMsg;
        }

        this.setState({state: this.state});

    }
    off(){
        this.setState({
            styless:{
                display:"none"
            }
        })
    }
    //点击切换电话前缀的显示状态
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
    //获取点击所得电话前缀，并恢复默认样式
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


    //短信验证计时器
    timeOut(){
        this.setState({
            isBlock:true
        },()=>{
            if(this.state.isBlock){
                let t1=setInterval(t11.bind(this) ,1000);
                function t11(){
                    this.setState({
                        showNum:this.state.showNum-1
                    })
                    if(this.state.showNum<=0){
                        this.setState({
                            isBlock:false,
                            showNum:60
                        })
                        clearInterval(t1);
                    }
                }
            }
        });
    }
}

export default Register;

