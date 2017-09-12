import React from 'react';
import style from "./index.css";
import Title from "../../partnerReg/title";
import Input from "../../partnerReg/input";


class AccountWithdrawView extends React.Component{
    change(e,r){
        this.props.change(e,r)
    }
	render(){
        return(
            <div className={style.accountWithdrawView}>
                <div className={style.tcontent}>
                    <div className={style.tctitle}>
                        <Title content="/出金金额" color="#3b3d40"/>
                    </div>
                    <div className={style.tccontent}>
                        <div className={style.input}>
                            <Input
                                st={'100%'}
                                pla={"请输入出金金额，不得超过余额"}
                                dollar={true}
                                lebal="withdrawInput"
                                change={this.change.bind(this)}
                                cla={this.props.withdrawInput.state}
                                val={this.props.withdrawInput.value}
                                align={"bottom"}
                                tip={"请输入正确的图形验证码"}
                                pattern={/\S/}
                                firstEdit={this.props.withdrawInput.firstEdit}
                            />
                        </div>
                        <div className={style.withdraw}>
                            <button onClick={this.click.bind(this)}>
                                全部出金
                            </button>
                        </div>
                        <div className={style.ttip}>
                            <ul className={style.tltip}>
                                <li>
                                    合人民币：
                                    <span>
                                        {this.props.rmb}
                                    </span>
                                </li>
                                <li>
                                    当前汇率：美元兑人民币
                                    <span>
                                        &nbsp;{this.props.exchangeRate}
                                    </span>
                                </li>
                            </ul>
                            <ul className={style.ttbank}>
                                <li>
                                    出金账户
                                </li>
                                <li>
                                    {this.props.withdrawMsg.name}&nbsp;
                                    </li>
                                <li>
                                    {this.props.withdrawMsg.card}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.bcontent}>
                    <div className={style.tctitle}>
                        <Title content="/支付密码" color="#3b3d40"/>
                    </div>
                    <div className={style.tccontent}>
                        <div className={style.input}>
                            <Input
                                st={'100%'}
                                pla={"请输入支付密码"}
                                lebal="pwd"
                                change={this.change.bind(this)}
                                cla={this.props.pwd.state}
                                pwa={true}
                                align={"bottom"}
                                tip={"请输入正确的图形验证码"}
                                pattern={/\S/}
                                firstEdit={this.props.pwd.firstEdit}
                            />
                        </div>
                        <div className={style.ttip}>
                            <ul className={style.tltip}>
                                <li>
                                    <a href="javascript:void (0)" onClick={()=>{this.props.toFind(false)}}>
                                        忘记密码？
                                    </a>
                                </li>
                                <li>
                                    注：支付密码与登陆密码一致，出金过程中遇到问题需要帮助，请联系客服电话400-8530-050

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.but}>
                    <button onClick={this.countersign.bind(this)}>
                        确认出金
                    </button>
                </div>
            </div>
        )

    }
    click(){
	    this.props.getAll()
    }
    countersign(){
        this.props.submitFn()
    }
}
export default AccountWithdrawView;