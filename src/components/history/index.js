import React from "react";
import style from "./index.css";
import GridTable from '../ib/gridTable';

class History extends React.Component{
    render(){
        let data2=[
            {
                orderID:'23546321654',
                time:'2016/10/31 09:19:31',
                direction:'入金',
                money:'+$100.00',
                type:'网银支付',
                state:'正在进行'
            },{
                orderID:'23546321654',
                time:'2016/10/31 09:19:31',
                direction:'出金',
                money:'-$100.00',
                type:'微信支付',
                state:'已经完成'
            },{
                orderID:'23546321654',
                time:'2016/10/31 09:19:31',
                direction:'入金',
                money:'+$100.00',
                type:'支付宝支付',
                state:'入金失败'
            },{
                orderID:'23546321654',
                time:'2016/10/31 09:19:31',
                direction:'出金',
                money:'-$100.00',
                type:'网银支付',
                state:'出金失败'
            }
        ]
        return(
            <div className={style.history}>
                <div className={style.hcontent}>
                    <GridTable tit={[ '订单号', '时间', '方向','金额','途径','状态']} data={data2}/>
                </div>
            </div>
        )
    }
}

export default History;