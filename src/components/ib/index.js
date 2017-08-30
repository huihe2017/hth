import React from 'react';
import style from "./index.css"
import TitValueBox from './titValueBox'
import Input from '../partnerReg/input'
import Title from '../partnerReg/title'
import RadioButton from './radioButton'
import ApplyCommission from "./applyCommission";
import AccountOverview from "./accountOverview";
import AccountLlink from "./accountLink";
import ReportQuery from "./reportQuery";


import Childlink from './childLink';

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
                <Childlink/>
                <AccountLlink/>
                <ReportQuery/>
            </div>
        )
    }
}

export default Ib;