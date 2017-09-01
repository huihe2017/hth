import React from 'react';
import style from "./index.css"
import {hashHistory} from 'react-router';
import TotalNavView from './totalNavView'

class TotalNav extends React.Component {

    checkedFn(flag) {console.log(hashHistory.getCurrentLocation().pathname)
        if (hashHistory.getCurrentLocation().pathname === flag) {
            return true
        }
    }

    getData(){
        return [
            {
                icon: "user-o",
                value: "IB账号",
                path:'/ib',
                checked: this.checkedFn('/ib')
            },
            {
                icon: "sign-out",
                value: "申请出佣",
                path:'/ib/applyCommission',
                checked: this.checkedFn('/ib/applyCommission')
            },
            {
                icon: "pencil-square-o",
                value: "开户链接",
                path:'/ib/accountLink',
                checked: this.checkedFn('/ib/accountLink')
            },
            {
                icon: "list-alt",
                value: "子代理链接",
                path:'/ib/childLink',
                checked: this.checkedFn('/ib/childLink')
            },
            {
                icon: "sliders",
                value: "报表查询",
                path:'/ib/reportQuery',
                checked: this.checkedFn('/ib/reportQuery')
            },
            {
                icon: "address-book-o",
                value: "用户分组",
                path:'/ib/accountOverview',
                checked: this.checkedFn('/ib/accountOverview')
            }
        ]
    }

    render() {

        return (
            <div className={style.wrap}>
                <TotalNavView data = {this.getData()} />
            </div>
        )

    }
}

export default TotalNav;