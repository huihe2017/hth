import style from  "./index.css"
import React from 'react';
import Prephone from "./prephone/index";
import FormItem from "./input/index";

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
            isShow:false
        }
    }
    render(){

        return(
            <div className={style.llogin}  style={this.state.styless}>
                <div className={style.mmb}  style={this.state.isShow?ss:sss}></div>


                <div className={style.llogincontent}>
                    <div className={style.llctitle}>
                        欢迎来到海豚汇、请登录
                    </div>
                    <div className={style.llcphone}>
                        <div className={style.prephone}>
                            <div className={style.sedphone} onClick={this.prePhone.bind(this)} style={this.state.border}>
                                <span>{this.state.sednum.num}</span> <i className="fa fa-angle-down"></i>
                            </div>
                            <ul className={style.selphone} style={this.state.isShow?ss:sss}>
                                {
                                    this.state.prephone.map((v,i)=>{
                                        return <Prephone key={i} data={v} get={this.getNum.bind(this)} />
                                    })
                                }
                            </ul>
                        </div>
                        <FormItem
                        //rules={usernmerules}
                        tt={"text"} pla={"请输入手机账号登陆"} st={{width:'220px',float:'right'}} rex={/^1[3|4|5|8][0-9]\d{4,8}$/} nn={'phone'}/>

                    </div>
                    <div className={style.llccaptcha}>
                        <FormItem tt={"text"} pla={"请输入图形验证码"} nn={"ttx"} st={{width:'100%'}}  isf={this.state.isFocus} />
                        <div className={style.captcha}>

                        </div>
                    </div>

                    <div className={style.llcfirstmm}>
                        <FormItem tt={"password"} pla={"密码6-24位字母、数字、字符"} st={{width:'100%'}} rex={/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/} nn={'pas'}/>
                        <a href="javascript:void (0);">忘记密码？</a>
                    </div>
                    <div className={style.llcsubmit}>
                        <input type="button" value='马上登录'/>


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







}

export default Login;