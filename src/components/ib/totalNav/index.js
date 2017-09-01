import React from 'react';
import style from "./index.css"


class xxxxx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className={style.wrap}>
                <ul>
                    <li><a>IB账号</a></li>
                    <li><a>申请出佣</a></li>
                    <li><a>开户链接</a></li>
                    <li><a>子代理链接</a></li>
                    <li><a>报表查询</a></li>
                    <li><a>用户分组</a></li>
                </ul>
            </div>
        )

    }
}

export default xxxxx;