import React from 'react';
import style from "./index.css"
import TotalNav from './totalNav'
import {Route, Switch} from 'react-router-dom'
import AccountLink from './accountLink'
import ChildLink from './childLink'
import ReportQuery from './reportQuery'
import ApplyCommission from './applyCommission'
import AccountOverview from './accountOverview'

class Ib extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className={style.wrap}>
                <TotalNav data={[{
                    icon:"user-o",
                    value:"IB账号",
                    key:0
                },
                {
                    icon:"sign-out",
                    value:"申请出佣",
                    key:1
                },
                {
                    icon:"pencil-square-o",
                    value:"开户链接",
                    key:2
                },
                {
                    icon:"list-alt",
                    value:"子代理链接",
                    key:3
                },
                {
                    icon:"sliders",
                    value:"报表查询",
                    key:4
                },
                {
                    icon:"address-book-o",
                    value:"用户分组",
                    key:5
                }
                ]} />
        <div className={style.wrapDown} >
            <Switch>
                <Route path="/ib/applyCommission" component={ApplyCommission}/>
                <Route path="/ib/accountLink" component={AccountLink}/>
                <Route path="/ib/childLink" component={ChildLink}/>
                <Route path="/ib/reportQuery" component={ReportQuery}/>
                <Route path="/ib" component={AccountOverview}/>
            </Switch>
        </div>
    </div>
    )
    }


}

export default Ib;