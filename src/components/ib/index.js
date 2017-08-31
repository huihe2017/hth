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
import TipDown from "../partnerReg/tipDown"
import Selphone from "../partnerReg/selPhone"


import Childlink from './childLink';

class Ib extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
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
        return (
            <div className={style.wrap}>
                <ApplyCommission/>
                <AccountOverview/>
                <Childlink/>
                <AccountLlink/>
                <ReportQuery/>
                <TipDown lebal="userSeach" show={"搜用户"} data={data} ww={120} change={this.alerte.bind(this)}/>
                <Selphone
                    lebal="phoneMsg"
                    change={this.alertee.bind(this)}
                    pattern={/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/}

                />
            </div>
        )
    }
    alerte(e){
        console.log(e)
    }
    alertee(e){
        console.log(e)
    }

}

export default Ib;