import React from 'react';
import style from  "./index.css";
import Input from '../../partnerReg/input';
import Title from '../../partnerReg/title';
import GridTable from '../gridTable';
import TitValueBox from '../titValueBox';


class AccountLlink extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked:true
        }
	}
	render(){
			return(
				<div className={style.applycom} >
					<div className={style.ftitle}>
						<Title content={"/开户链接"} color={"#3b3d40"}/>
					</div>
                    <div className={style.appcc}>
                        <TitValueBox tit={"传统开户"} wid={100}>
                            <div className={style.importc}>
                                <div className={style.input}>
                                    <Input val="https://github.com/ruanyf/react-demos" edit={true}/>
                                </div>
                                <div className={style.butt}>
                                    <button>
                                        复制到剪切板
                                    </button>
                                </div>
                            </div>
                        </TitValueBox>
                        <TitValueBox tit={"快速开户"} wid={100}>
                            <div className={style.importc}>
                                <div className={style.input}>
                                    <Input val="https://github.com/ruanyf/react-demos" edit={true}/>
                                </div>
                                <div className={style.butt}>
                                    <button>
                                        复制到剪切板
                                    </button>
                                </div>
                            </div>
                        </TitValueBox>
                    </div>
                    <div className={style.ltitle}>
                        <Title content={"/子代理"} color={"#3b3d40"}/>
                    </div>
                    <div className={style.appcc}>
                        <div className={style.creat}>
                            <TitValueBox tit={"开户时间"} wid={100}>

                            </TitValueBox>
                        </div>
                        <div className={style.total}>
                            <TitValueBox tit={"所属用户组"} wid={100}>
                                <div className={style.linput}>
                                    <Input pla={"请输入完整的MT4账号"}/>
                                </div>
                                <div className={style.butt}>
                                    <button>
                                        查询
                                    </button>
                                </div>
                            </TitValueBox>
                        </div>

                    </div>
                    <div className={style.table}>
                        <GridTable tit={['账户名', '用户名', '激活时间', '激活结果','激活结果']} data={
                            [
                                {
                                    account:'Young',
                                    username: '用户名',
                                    time:'2016-10-31 09:19:31',
                                    time2:'2016-10-31 09:19:31',
                                    result:'成功'
                                },
                                {
                                    account:'Young',
                                    username: '用户名',
                                    time:'2016-10-32 09:19:31',
                                    time2:'2016-10-31 09:19:31',
                                    result:'成功'
                                },
                                {
                                    account:'Young',
                                    username: '用户名',
                                    time:'2016-10-33 09:19:31',
                                    time2:'2016-10-31 09:19:31',
                                    result:'成功'
                                },
                                {
                                    account:'Young',
                                    username: '用户名',
                                    time:'2016-10-34 09:19:31',
                                    time2:'2016-10-31 09:19:31',
                                    result:'成功'
                                },
                                {
                                    account:'Young',
                                    username: '用户名',
                                    time:'2016-10-34 09:19:31',
                                    time2:'2016-10-31 09:19:31',
                                    result:'成功'
                                }
                            ]
                        }/>
                    </div>

                    <div className={style.accfooter}>
                        <button className={style.submit}>
                            导出Excel
                        </button>
                    </div>

				</div>
			)
		}



}
export default AccountLlink;
