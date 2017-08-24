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
        // var usernmerules: [
        //     {
        //         pattern: function (value) {
        //             return value.length > 0;
        //         },
        //         error: '请输入用户名'
        //     },
        //     {
        //         pattern: /^.{1,4}$/,
        //         error: '用户名最多4个字符'
        //     }
        // ]
        let sss={
            display:"none"
        };
        let ss={
            display:"block"
        };
        return(
            <div className={style.llogin}  style={this.state.styless}>
                <div className={style.mmb} onClick={this.isshow.bind(this)} style={this.state.isShow?ss:sss}></div>

                <div className={style.off} onClick={this.off.bind(this)}>
                    <span></span>
                    <span></span>
                </div>
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
                            没有账户、<a href="javascript:void (0);">注册账号</a>
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



}

export default Login;