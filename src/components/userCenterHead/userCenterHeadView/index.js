import React from 'react';
import style from  "./index.css"
import Input from "../../partnerReg/input"


class userCenterHeadView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShow:false,

        }
	}
    // getTime(e){
    //     let now=new Date(e);
    //     return   [now.getFullYear(),now.getMonth()+1,now.getDate()].join("-")+" "+[now.getHours(),now.getMinutes()].join(":");
    // }
    showdata(e){
        if(e.length==0){
            return (
                <img src={require('./images/none.png')} alt="" className={style.none}/>
            )
        }else {


        }

    }
    change(vaildMsg, name) {
        console.log(vaildMsg)
        this.props.change(vaildMsg,name)
    }
    submitFn() {
        this.props.submitFn()
    }
    redact(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
	render(){
            let imgurl= "";

			return(
				<div className={style.userCenterHeadView}>
                    <div className={style.userCHl}>
                        <span className={style.userCHlt}>
                            基本资料
                        </span>
                        <div className={style.userchvheader}>
                            <a href="javascript:void (0);" onClick={this.redact.bind(this)} className={style.redact}>
                                <span hidden={!this.state.isShow}>编辑信息</span>
                                <span hidden={this.state.isShow} onClick={this.submitFn.bind(this)}>保存信息</span>
                            </a>
                            <div className={style.avatar}>
                                <img src={this.props.portrait?this.props.portrait:require('../../partnerReg/images/avatar-default.png')} alt=""/>
                                <div className={style.shade} hidden={this.state.isShow}>
                                    <input type="file" className={style.file}/>
                                    点击上传
                                </div>
                            </div>
                            div.use
                            <div className={style.userhc}>
                                <div className={style.userhch} hidden={!this.state.isShow}>
                                    <div className={style.username}>
                                        {this.props.userName}
                                    </div>
                                    <div className={style.userphone}>
                                        {
                                            this.props.phone.map((v)=>{
                                                return (
                                                    <span>{v}&nbsp;</span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className={style.userhcc} hidden={!this.state.isShow}>
                                    <div>
                                        出金绑定银行卡：
                                        <a href="javascript:void (0);">去绑定</a>
                                    </div>
                                    <div>
                                        MT4平台账号：{this.props.MT4user}
                                    </div>
                                </div>
                                <div className={style.userr} hidden={this.state.isShow}>
                                    <Input
                                        st={'100%'}
                                        cla={this.props.userdata.state}
                                        align={"top"}
                                        pla={"昵称"}
                                        val={this.props.userdata.value}
                                        tip={"ID昵称，限制8个中文字符，其他字符限制12个"}
                                        pattern={/^[\u4e00-\u9fa5a-zA-Z0-9]{2,20}$/}
                                        lebal="userdata"
                                        change={this.change.bind(this)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={style.userchvfooter}>
                            <div className={style.floating}>
                                <div className={style.money}>
                                    ${this.props.floating}
                                </div>
                                <div className={style.top}>
                                    浮动盈亏
                                </div>
                            </div>
                            <div className={style.worth}>
                                <div className={style.money}>
                                    ${this.props.worth}
                                </div>
                                <div className={style.top}>
                                    净值
                                </div>
                            </div>
                            <div className={style.balance}>
                                <div className={style.money}>
                                    ${this.props.balance}
                                </div>
                                <div className={style.top}>
                                    余额
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.userCHr}>
                       <span className={style.userCHlt}>
                            一月内资讯记录
                        </span>
                        <div className={style.userCHrc}>
                            {
                                this.props.dynamics.length==0?(
                                <img src={require('./images/none.png')} alt="" className={style.none}/>
                                ):(this.props.dynamics.map((v)=>{
                                    return (
                                        <div className={style.item+" "+style.clearfloat}>
                                            <div className={style.state}>
                                                <img src={require(`./images/${v.state}.png`)} alt=""/>
                                            </div>
                                            <span>
                            {v.content}
                        </span>
                                        </div>
                                    )
                                }))
                            }
                        </div>
                    </div>
                </div>
			)
    }
}
export default userCenterHeadView;