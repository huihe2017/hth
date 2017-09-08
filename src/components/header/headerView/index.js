import React, {Component} from 'react'
import SideBar from './sideBar/index'
import Login from '../../login/index'
import Register from '../../register/index'
import Layer from '../../renderLayer/index'
import {Link} from 'react-router-dom';
import style from './header.css'

export default class Header extends Component {


    render() {
        return (
            <div>
                {/*<div className={this.state.isFixed ? (style.header + ' ' + style.fixed) : style.header}>*/}
                <div
                    className={this.props.otherStyle ? ( style.header + ' ' + style[this.props.position] + ' ' + style.otherStyle) : ( style.header + ' ' + style[this.props.position])}>
                    <div className={style.logo}>
                        {
                            this.props.otherStyle ? <Link to="/"><img src={require("./logoO.png")}/></Link> :
                                <Link to="/"><img src={require("./logo.png")}/></Link>
                        }

                    </div>
                    <div className={style.headerRight}>
                        <a className={style.checked} style={{display: 'none'}}>中文</a>
                        <a className="english" style={{display: 'none'}}>EN</a>
                        <a onClick={() => {
                            if(this.props.isLogin){
                                ''
                            }else{
                                this.props.toggle(true)
                            }
                        }} className={style.login}>{this.props.isLogin ? localStorage.userName : '登录'}</a>
                        <a onClick={() => {
                            if(this.props.isLogin){
                                this.props.signOut()
                            }else{
                                this.props.toggle(false)
                            }

                        }} className={style.login}>{this.props.isLogin ? '退出' : '注册'}</a>
                        <a onMouseLeave={() => {
                            this.props.hideSideBar()
                        }} onMouseOver={() => {
                            this.props.showSideBar()
                        }} className={style.isPand}><i
                            className={this.props.isShowSideBar ? 'fa fa-list-ul fa-rotate-90' : 'fa fa-list-ul'}></i>
                            <SideBar userCenterClick={this.props.toggle.bind(this)} show={this.props.isShowSideBar}/>
                        </a>
                    </div>
                </div>
                {this.props.isShowLogin ?
                    <Layer closeFn={this.props.hideLogin}><Login login={this.props.login} toReg={this.props.toggle.bind(this)}/></Layer> : ''}
                {this.props.isShowReg ?
                    <Layer closeFn={this.props.hideReg}><Register login={this.props.login} toLogin={this.props.toggle.bind(this)}/></Layer> : ''}
            </div>
        )
    }
}