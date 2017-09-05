import React from 'react';
import style from "./index.css"
import UserCenterHeadView from './userCenterHeadView'


class UserCenterHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portrait: 'http://img1.tgbusdata.cn/v2/thumb/jpg/NkRCMiw2NDAsMTAwLDQsMywxLC0xLDAscms1MA==/u/wow.tgbus.com/UploadFiles_2396/201605/20160530094443812.jpg',
            userName: '嘎嘎',
            phone: ['86', '13725565878'],
            openingTime: 364747474745,
            floating: 44,
            worth: 33,
            balance: 444
        }
    }

    binding() {
        alert(10)
    }

    render() {

        return (
            <UserCenterHeadView handle={this.binding} {...this.state} />
        )

    }
}

export default UserCenterHead;