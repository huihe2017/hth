import React from 'react';
import style from  "./index.css"
import TitValueBox from '../titValueBox';
import Input from '../../partnerReg/input';
import Title from '../../partnerReg/title';
import Tipdown from "../../partnerReg/tipDown";

class AccountOverview extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
	}
	render(){
        let data=[
            {
                key:1,
                value:"个人"
            },
            {
                key:2,
                value:"企业"
            },
            {
                key:3,
                value:"组织"
            }
        ]
		return(

			<div className={style.accover}>
                <div className={style.acheader}>
                    <div className={style.title}>
                        <Title content={"/账户总览"} color={"#3b3d40"}/>
                    </div>
                    <div className={style.himport}>
                        <div className={style.hileft}>
                            <Tipdown show={"搜用户"} data={data} ww={120}/>
                        </div>
                        <div className={style.hiright}>
                            <Input pla={"请输入MT4 ID查询"} search={true}/>
                        </div>
                    </div>
                </div>
                <div className={style.accontent}>
                    <TitValueBox tit={"代理姓名"}>
						<span className={style.appcontent}>
							福德宝投资有限公司
						</span>
                    </TitValueBox>
                    <TitValueBox tit={"客户总量"}>
						<span className={style.appcontent}>
							<span>1</span>（本月新增：<span>0</span>）
						</span>
                    </TitValueBox>
                    <TitValueBox tit={"本月返佣"}>
						<span className={style.appcontent}>
							<span>$0.00</span>（可用余额：<span>$0</span>）
						</span>
                    </TitValueBox>
                    <TitValueBox tit={"待出佣金额"}>
						<span className={style.appcontent}>
							<span>$0.00</span>（共<span>0</span>笔）
						</span>
                    </TitValueBox>
                    <TitValueBox tit={"客户活跃"}>
						<span className={style.appcontent}>
							<span>0.00%</span>的客户在近7天均在交易
						</span>
                    </TitValueBox>
                </div>
                <div className={style.accfooter}>
                    <button className={style.submit}>
                        申请出佣
                    </button>
                </div>
			</div>
			)
		}
}
export default AccountOverview;