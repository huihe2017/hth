import React from 'react';
import style from "./index.css"
import TotalNav from './totalNav'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AccountLink from './AccountLink'
import ChildLink from './ChildLink'
import ReportQuery from './ReportQuery'
import ApplyCommission from './ApplyCommission'
import AccountOverview from './accountOverview';
import TabControl from './tabControl'

class Ib extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let navdata=[
            {
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
        ];
        let data1=[
            {
                key:1,
                value:"用户资料"
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
        return (
            <div className={style.wrap}>
                <TotalNav data={this.props.navdata?this.props.navdata:navdata}/>
                <TabControl data={data1}/>
                <Router>
                    <div>
                        <Route path="/ib" component={AccountOverview}/>
                        <Route path="/ib/applyCommission" component={ApplyCommission}/>
                        <Route path="/ib/accountLink" component={AccountLink}/>
                        <Route path="/ib/childLink" component={ChildLink}/>
                        <Route path="/ib/reportQuery" component={ReportQuery}/>
                    </div>
                </Router>
            </div>
        )
    }


}

export default Ib;

/*
*
* {
                    this.props.data.map((v,i)=>{

                        return (
                            <div  onClick={this.handleClick.bind(this,v.key)} className={style.nav+" "+((this.state.index == v.key)?style.active:'')}>
                                 {v.value}
                            </div>
                            )
                    })
                }
* */