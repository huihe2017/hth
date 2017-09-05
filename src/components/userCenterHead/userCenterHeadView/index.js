import React from 'react';
import style from  "./index.css"


class userCenterHeadView extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
	}
	render(){
            let imgurl= ""
			return(
				<div className={style.userCenterHeadView}>
                    <div className={style.userchvheader}>
                        <div className={style.avatar}>
                            <img src={this.props.portrait?this.props.portrait:require('../../partnerReg/images/avatar-default.png')} alt=""/>
                        </div>
                        <div className={style.userhc}>
                            <div className={style.userhch}>
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
                            <div className={style.userhcc}>
                                <div>
                                    出金绑定银行卡：
                                    <a href="javascript:void (0);">去绑定</a>
                                <div/>
                                <div>
                                    出户时间：{this.props.openingTime}

                                </div>



                                </div>
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
			)

		}
}
export default userCenterHeadView;