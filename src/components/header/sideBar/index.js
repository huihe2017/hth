import React, {Component} from 'react'
import Layer from '../../renderLayer'

import Shadow from '../../shadow'

import style from './sideBar.css'

class SideBar extends Component {


    render() {
        let isHide = this.props.show ? '' : style.hide

        return (
            <div>
                <div className={style.sideBar + ' ' + isHide}>
                    <div className={style.checked}>首页</div>
                    <div>产品交易</div>
                    <div>交易平台</div>
                    <div>关于海豚汇</div>
                    <div>合伙人计划</div>
                    <div>海豚学院</div>
                    <div>个人中心</div>

                </div>
                {this.props.show?<Layer></Layer>:''}

            </div>
        )
    }
}

export default SideBar