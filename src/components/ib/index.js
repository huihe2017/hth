import React from 'react';
import style from "./index.css"
import TitValueBox from './titValueBox'
import Input from '../partnerReg/input'
import Title from '../partnerReg/title'
import RadioButton from './radioButton'
import ApplyCommission from "./applyCommission";
import AccountOverview from "./accountOverview";
import GridTable from './gridTable'

class Ib extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.wrap}>
                <ApplyCommission/>
                <AccountOverview/>
                <GridTable tit={['账户名', '用户名', '激活时间', '激活结果']} data={
                    [
                        {
                            account:'Young',
                            username: '用户名',
                            time:'2016-10-31 09:19:31',
                            result:'成功'
                        },
                        {
                            account:'Young',
                            username: '用户名',
                            time:'2016-10-32 09:19:31',
                            result:'成功'
                        },
                        {
                            account:'Young',
                            username: '用户名',
                            time:'2016-10-33 09:19:31',
                            result:'成功'
                        },
                        {
                            account:'Young',
                            username: '用户名',
                            time:'2016-10-34 09:19:31',
                            result:'成功'
                        }
                    ]
                }/>
            </div>
        )
    }
}

export default Ib;