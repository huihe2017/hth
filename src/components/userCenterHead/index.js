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
            openingTime: 1504586278838,
            floating: 44,
            worth: 33,
            balance: 444,
            dynamics:[
                {
                    state:'complete',
                    content:'完成完成完成完成完成完成'
                },
                {
                    state:'unComplete',
                    content:'未完成未完成未完成未完成未完成'
                },
                {
                    state:'waiting',
                    content:'等待完成等待完成等待完成等待完成'
                },
                {
                    state:'news',
                    content:'新闻动态新闻动态新闻动态新闻动态'
                }
            ]
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