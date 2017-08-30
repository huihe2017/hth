import React from 'react';
import style from  "./index.css";
import Input from '../../partnerReg/input';
import Title from '../../partnerReg/title';
import GridTable from '../gridTable';
import TitValueBox from '../titValueBox';
import Tipdown from "../../partnerReg/tipDown";
import TabControl from "../tabControl";
import TipDown from '../../partnerReg/tipDown'



class ReportQuery extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        let data1=[
            {
                key:1,
                value:"用户资料",
                checked:true
            },
            {
                key:2,
                value:"持仓记录"
            },
            {
                key:3,
                value:"平仓记录"
            },
            {
                key:4,
                value:"出入金记录"
            },
            {
                key:5,
                value:"出佣记录"
            },
            {
                key:6,
                value:"返佣记录"
            }
            ]
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
        ];
        let data2=[
            {
                account:'Young',                                            user:'Young',
                name: '用户名',
                time:'2016-10-31 09:19:31',
                phone:'11206496461',
                email:'1984948651@163.com',
                type:'forex',
                jin:'0'
            },
            {
                account:'Young',                                            user:'Young',
                name: '用户名',
                time:'2016-10-31 09:19:31',
                phone:'11206496461',
                email:'1984948651@163.com',
                type:'forex',
                jin:'0'
            },
            {
                account:'Young',                                            user:'Young',
                name: '用户名',
                time:'2016-10-31 09:19:31',
                phone:'11206496461',
                email:'1984948651@163.com',
                type:'forex',
                jin:'0'
            },
            {
                account:'Young',                                            user:'Young',
                name: '用户名',
                time:'2016-10-31 09:19:31',
                phone:'11206496461',
                email:'1984948651@163.com',
                type:'forex',
                jin:'0'
            }
        ]
        return(
            <div className={style.reportquery}>
                <div className={style.acheader}>
                    <div className={style.title}>
                        <Title content={"/报表查询"} color={"#3b3d40"}/>
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
                <TabControl data={data1}/>
                <div className={style.appcc+" "+style.clearfloat}>
                    <div className={style.creat}>
                        <TitValueBox tit={"激活时间"} wid={100}>

                        </TitValueBox>
                    </div>
                    <div className={style.total}>
                        <TitValueBox tit={"账号名称"} wid={100}>
                            <div className={style.linput}>
                                <TipDown data={data} show={"请选择用户组"} ww={260}/>
                            </div>
                            <div className={style.butt}>
                                <button>
                                    查询
                                </button>
                            </div>
                        </TitValueBox>
                    </div>
                </div>
                <div className={style.gtbale}>
                    <GridTable tit={[ '用户名', '账户名', '姓名','开户时间','联系电话','邮箱','平台类型','尽值']} data={data2}/>
                    <div className={style.accfooter}>
                        <button className={style.submit}>
                            导出Excel
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default ReportQuery;