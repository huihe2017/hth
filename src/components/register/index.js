import style from  "./index.css"
import React from 'react';
import Prephone from "./prephone/index";
import FormItem from "./input/index";

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
            isBlock:false
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
            <div className={style.login} style={this.state.styless}>
                <div className={style.mmb} onClick={this.isshow.bind(this)} style={this.state.isShow?ss:sss}></div>
                <div className={style.off} onClick={this.off.bind(this)}>
                    <span></span>
                    <span></span>
                </div>
                <div className={style.logincontent}>
                    <div className={style.lctitle}>
                        注册海豚汇账号
                    </div>
                    <div className={style.lcphone}>
                        <div className={style.prephone}>
                            <div className={style.sedphone} onClick={this.prePhone.bind(this)} style={this.state.border}>
                                <span>{this.state.sednum.num}</span> <i className="fa fa-angle-down"></i>
                            </div>
                            <ul className={style.selphone}  style={this.state.isShow?ss:sss}>
                                {
                                    this.state.prephone.map((v,i)=>{
                                        return <Prephone key={i} data={v} get={this.getNum.bind(this)} />
                                    })
                                }
                            </ul>
                        </div>
                        <FormItem
                        //rules={usernmerules}
                        tt={"text"} pla={"请输入手机号"} st={{width:'220px',float:'right'}} rex={/^1[3|4|5|8][0-9]\d{4,8}$/} nn={'rphone'}/>

                    </div>
                    <div className={style.lccaptcha}>
                        <FormItem tt={"text"} pla={"请输入图形验证码"} nn={"tx"} st={{width:'100%'}}  isf={this.state.isFocus} />
                        <div className={style.captcha}>

                        </div>
                    </div>
                    <div className={style.lcmessage}>
                        <FormItem tt={"text"} pla={"请输入短信验证码"} nn={"dx"} st={{width:'100%',float:'left'}}/>
                        <div className={style.butt}>
                            <button name="regm" onClick={this.state.isBlock?null:this.timeOut.bind(this)} style={this.state.istu?{color:"#fff"}:{color:"#3b3d40"}}>
                                <span  style={this.state.isBlock?sss:ss}>发送短信验证码</span>
                                <span style={this.state.isBlock?ss:sss}>
                                    <span>{this.state.showNum}</span>s后重新获取
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className={style.lcfirstmm}>
                        <FormItem tt={"password"} pla={"密码6-24位字母、数字、字符"} st={{width:'100%'}} rex={/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/} nn={'pas1'}/>
                    </div>
                    <div className={style.lcregmm}>
                        <FormItem tt={"password"} pla={"请再次输入密码"} st={{width:'100%'}} nn={'pas2'}/>
                    </div>
                    <div className={style.lcsubmit}>
                        <button >
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

    // regmm(){
    //     console.log(document.querySelector("input[name='pas1']").value);
    //     console.log(document.querySelector("input[name='pas2']").value);
    //     if((document.querySelector("input[name='pas1']").value==document.querySelector("input[name='pas2']").value)){
    //
    //     }else {
    //         document.querySelector("input[name='pas2']+span").innerHTML="两次输入密码不同"
    //     }
    // }
}

export default Register;

