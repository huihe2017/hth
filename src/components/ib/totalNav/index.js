import React from 'react';
import style from "./index.css"
import {hashHistory} from 'react-router';
import TotalNavView from './totalNavView'

class TotalNav extends React.Component {

    checkedFn(flag) {
        console.log(hashHistory.getCurrentLocation().pathname)
        if (hashHistory.getCurrentLocation().pathname === flag) {
            return true
        }
    }

    getData() {

        this.props || (this.props = {})
        this.props.data || (this.props.data = [
            {
                icon: "user-o",
                value: "IB账号",
                path: '/ib'
            },
            {
                icon: "sign-out",
                value: "申请出佣",
                path: '/ib/applyCommission'
            },
            {
                icon: "pencil-square-o",
                value: "开户链接",
                path: '/ib/accountLink'
            },
            {
                icon: "list-alt",
                value: "子代理链接",
                path: '/ib/childLink'
            },
            {
                icon: "sliders",
                value: "报表查询",
                path: '/ib/reportQuery'
            },
            {
                icon: "address-book-o",
                value: "用户分组",
                path: '/ib/accountOverview'
            }
        ])

        for (let s in this.props.data) {
            this.props.data[s].checked = this.checkedFn(this.props.data[s].path)
        }
        console.log(this.props.data)
        return this.props.data
    }

    render() {

        return (
            <div className={style.wrap}>
                <TotalNavView data={this.getData()}/>
            </div>
        )

    }
}

export default TotalNav;