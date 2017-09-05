import React from 'react';
import style from "./index.css";
import Title from "../partnerReg/title";
import Input from "../partnerReg/input";


class AccountDepositView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    change(e){
        let obj={};
        obj.value=e.value;
        obj.firstEdit=false;
        obj.state='default';
        this.props.change(obj)
    }
    getCode(e){
        this.props.choceBankList(e)
    }
    submit(){
        this.props.submit()
    }
    render() {
        let ssw={
            color:"#f59294"
        };
        let ssr={
            color:"#3b3d40"
        };
        if(this.props.bankState){
            if(this.props.choceBank){

            }else {
                this.props.choceBank=true
            }
        }else {
            if(this.props.choceBank){
                this.props.choceBank=true
            }else {
                this.props.choceBank=false
            }
        }
        return (
            <div className={style.accountDepositView}>
                <div className={style.accheader}>
                    <div className={style.title}>
                        <Title content={"/入金金额"} color={"#3b3d40"}/>
                    </div>
                    <div className={style.inputc}>
                        <Input
                            pla="至少50美元"
                            dollar={true}
                            st={'100%'}
                            pattern={/\S/}
                            lebal="inputState"
                            change={this.change.bind(this)}
                            firstEdit={this.props.inputState.firstEdit}
                            cla={this.props.inputState.state}
                        />
                    </div>
                    <div className={style.tip}>
                    <span className={style.ttip}>
                        合人民币：<span>{this.props.rmb}</span>
                    </span>
                        <span className={style.btip}>
                        当前汇率：美元兑人民币 <span>{this.props.exchangeRate}</span>
                    </span>
                    </div>
                </div>
                <div className={style.acccontent}>
                    <div className={style.btitle}
                         style={this.props.choceBank?ssr:ssw}
                    >
                        选择银行网银支付
                    </div>
                    <ul className={style.banklist}>
                        {
                            this.props.banks.map((v,i)=>{
                                return <li onClick={this.getCode.bind(this,i)} title={v.name}>
                                    <img src={require(`${v.logo}`)}/>
                                </li>
                            })
                        }
                    </ul>
                    <span className={style.tipcontent}>
                        注：支持以上银行储蓄卡或信用卡，如有疑问请联系客服电话：400-9317-188
                    </span>
                    <div className={style.but}>
                          <button className={style.button} onClick={this.submit.bind(this)}>
                              确认充值
                          </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default AccountDepositView;