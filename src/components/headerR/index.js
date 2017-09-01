import React, {Component} from 'react'
import SideBar from './sideBar'
import Login from '../login'
import Register from '../register'
import Layer from '../renderLayer'
import { Link } from 'react-router-dom';
import style from './header.css'

export default class Header extends Component {


    render() {
        return (
            <div>
                {/*<div className={this.state.isFixed ? (style.header + ' ' + style.fixed) : style.header}>*/}
                <div className= {this.props.otherStyle?( style.header + ' ' + style[this.props.position]+ ' ' + style.otherStyle):( style.header + ' ' + style[this.props.position])}>
                    <div className={style.logo}>
                        {
                            this.props.otherStyle?<Link to="/" ><img src={require("./logoO.png")}/></Link>:<Link to="/" ><img src={require("./logo.png")}/></Link>
                        }

                    </div>
                    <div className={style.headerRight}>
                        <a className={style.checked}>中文</a>
                        <a className="english">EN</a>
                        <a onClick={()=>{this.props.toggle(true)}} className={style.login}>&nbsp;&nbsp;&nbsp;&nbsp;登录</a>
                        <a onClick={()=>{this.props.toggle(false)}} className={style.login}>注册</a>
                        <a onMouseLeave={() => {
                            this.props.hideSideBar()
                        }} onMouseOver={() => {
                            this.props.showSideBar()
                        }} className={style.isPand}><i
                            className={this.props.isShowSideBar ? 'fa fa-list-ul fa-rotate-90' : 'fa fa-list-ul'}></i>
                            <SideBar show={this.props.isShowSideBar}/>
                        </a>
                    </div>
                </div>
                {this.props.isShowLogin?<Layer closeFn={this.props.hideLogin}><Login toReg={this.props.toggle.bind(this)} /></Layer>:''}
                {this.props.isShowReg?<Layer closeFn={this.props.hideReg}><Register toLogin={this.props.toggle.bind(this)} /></Layer>:''}
            </div>
        )
    }
}