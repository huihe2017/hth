import React from 'react';
import style from "./index.css"
import UserCenterHeadView from './userCenterHeadView'


class UserCenterHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portrait: 'http://xxxxx.jpg',
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