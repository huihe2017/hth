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
                <GridTable tit={['用户名', '用户名', '用户名', '用户名', '用户名']} data={{
                    value: [{
                        username: '用户名',
                        username: '用户名',
                        username: '用户名',
                        username: '用户名',
                        username: '用户名'
                    }, {
                        username: '用户名',
                        username: '用户名',
                        username: '用户名',
                        username: '用户名',
                        username: '用户名'
                    }]
                }}/>
            </div>
        )
    }
}

export default Ib;