import React from 'react';
import style from  "./index.css";
import TitValueBox from '../titValueBox';
import Input from '../../partnerReg/input';
import Title from '../../partnerReg/title';
import RadioButton from '../radioButton';
import Selectarea from '../../partnerReg/selectArea';


class ApplyCommission extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked:true
        }
	}
	render(){
			return(
				<div className={style.applycom} >
					<div className={style.title}>
						<Title content={"/申请出佣"} color={"#3b3d40"}/>
					</div>
                    <div className={style.appcc}>
                        <TitValueBox tit={"交易类型"}>
                            <div className={style.buttong}>
                                <RadioButton data={[{key: 1, value: '出佣到银行卡', checked: true}, {key: 2, value: '内部转账'}]}/>
                            </div>
                        </TitValueBox>
                        <TitValueBox tit={"IB账号"}>
						<span className={style.appcontent}>
							6835
						</span>
                        </TitValueBox>
                        <TitValueBox tit={"IB户名"}>
						<span className={style.appcontent}>
							福德宝投资有限公司
						</span>
                        </TitValueBox>
                        <TitValueBox tit={"账户货币"}>
						<span className={style.appcontent}>
							USD
						</span>
                        </TitValueBox>
                        <TitValueBox tit={"出佣金额"}>
                            <div className={style.inputc}>
                                <Input pla="至少10美元" unit={true}/>
                            </div>
                            <button className={style.outmoney}>
                                全部转出
                            </button>
                        </TitValueBox>
                        <TitValueBox tit={"账户货币"}>
						<span className={style.appcontent}>
							$0
						</span>
                        </TitValueBox>
                        <TitValueBox tit={"交易类型"}>
                            <div className={style.buttong}>
                                <RadioButton data={[{key: 1, value: '人民币', checked: true}, {key: 2, value: '美金'}]}/>
                            </div>
                            <div className={style.apptip}>
                                <span>注</span>：人民币出金，汇款费用有Fromax承担 <br/>
                                <span>2017-08-28 07：48：27</span>转换汇率 美元：人民币 <span>6.5654</span>汇率以实际汇款日为准
                            </div>
                        </TitValueBox>
                        <TitValueBox tit={"出佣金额"}>
                            <div className={style.inputc}>
                                <Input pla="至少10美元"/>
                            </div>
                        </TitValueBox>
                        <TitValueBox tit={"开户行网点"}>
                            <div className={style.martop}>
                                <Selectarea width1={240} width2={240} width3={120} />
                            </div>
                        </TitValueBox>
                        <TitValueBox tit={"银行账号"}>
						<span className={style.appcontent}>
							2395**********1883
						</span>
                        </TitValueBox>
                        <TitValueBox tit={"收款人姓名"}>
						<span className={style.appcontent}>
							福德宝投资有限公司
						</span>
                        </TitValueBox>
                        <TitValueBox tit={"银行SwiftCode"}>
						<span className={style.appcontent}>
							HASEHKHH
						</span>
                        </TitValueBox>
                        <TitValueBox tit={"输入密码"}>
                            <div className={style.psd}>
                                <Input pwa={true} />
                            </div>
                        </TitValueBox>
                    </div>
                    <div className={style.tip}>
                        <i className={this.state.checked?'fa fa-check-square':'fa fa-square-o'} onClick={this.changec.bind(this)}></i>
                        <span>
                            在适当情况下，海豚汇投资有限公司（Dolphinforex）所持有关客户的所有通讯及资料均可向执法机关及监管机构披露并接受检查。   <br/>
                            此外，客户同意遵守所有适用防止洗钱及反恐融资法例，包括但不限于要求取得或提供充分语气，以了解可能有客户所代表与海豚汇订立任何交易的任何人士身份
                        </span>
                    </div>

                        <button className={style.submit}>
                            提交
                        </button>


				</div>
			)
		}
		changec(){
            this.setState({
                checked:!this.state.checked
            })
        }
}
export default ApplyCommission;

//20   48  48  60  40