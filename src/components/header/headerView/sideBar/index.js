import React, {Component} from 'react'
import Layer from '../../../renderLayer/index'
import {Link} from 'react-router-dom'
import style from './sideBar.css'

class SideBar extends Component {


    render() {
        let isHide = this.props.show ? '' : style.hide

        return (
            <div>
                <div className={style.sideBar + ' ' + isHide}>
                    <Link to="/"><div className={style.checked}>首页</div></Link>
                    <div>产品交易</div>
                    <div>交易平台</div>
                    <div>关于海豚汇</div>
                    <div>合伙人计划</div>
                    <div>海豚学院</div>
                    <div>个人中心</div>
                    <Link to="/ib"><div>代理系统</div></Link>
                    <Link to="/partnerReg"><div>合伙人注册</div></Link>
                    <Link to="/partnerLogin"><div>合伙人登录</div></Link>


                </div>
                {this.props.show?<Layer></Layer>:''}

            </div>
        )
    }
}

export default SideBar