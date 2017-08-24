import React, {Component} from 'react'
import SideBar from './sideBar'
import RenderLayer from '../renderLayer'
import Layer from '../layer'
import Login from '../login'
import Register from '../register'

import style from './header.css'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowSideBar: false,
            isShowLogin: false,
            isShowReg:false,
            isFixed:false
        }
        this.showLogin = this.showLogin.bind(this)
        this.hideLogin = this.hideLogin.bind(this)
        this.hideReg = this.hideReg.bind(this)
        this.showReg = this.showReg.bind(this)
    }

    componentDidMount() {
        let dance = document.body.clientWidth * 0.46
        let danceCopy = dance

        window.onscroll = (e) => {
            //console.log(e)
            //console.log(document.body.scrollTop)
            if (document.body.scrollTop < danceCopy) {
                this.setState({isFixed:false})
                return false
            }
            if (document.body.scrollTop - dance < 0) {
                this.setState({isFixed:true})
            } else {
                this.setState({isFixed:false})
            }
            dance = document.body.scrollTop
        }
    }

    showLogin() {
        this.setState({isShowLogin: true}, () => {

        })

    }

    showReg() {
        this.setState({isShowReg: true}, () => {

        })

    }

    hideLogin() {
        this.setState({isShowLogin: false}, () => {

        })

    }

    hideReg() {
        this.setState({isShowReg: false}, () => {

        })

    }

    render() {
        return (
            <div>
                <div  className={this.state.isFixed?(style.header+' '+style.fixed):style.header}>
                    <div className={style.logo}>
                        <img src={require("./logo.png")}/>
                    </div>
                    <div className={style.headerRight}>
                        <a className={style.checked}>中文</a>
                        <a className="english">EN</a>
                        <a onClick={this.showLogin} className={style.login}>&nbsp;&nbsp;&nbsp;&nbsp;登录</a>
                        <a onClick={this.showReg} className={style.login}>注册</a>
                        <a onMouseLeave={() => {
                            this.setState({isShowSideBar: false})
                        }} onMouseOver={() => {
                            this.setState({isShowSideBar: true})
                        }} className={style.isPand}><i
                            className={this.state.isShowSideBar ? 'fa fa-list-ul fa-rotate-90' : 'fa fa-list-ul'}></i>
                            <SideBar show={this.state.isShowSideBar}/>
                        </a>
                    </div>
                </div>
                {this.state.isShowLogin ? <RenderLayer><Layer content={<Login/>} callback={this.hideLogin} width="520" height="520" /></RenderLayer> : ''}
                {this.state.isShowReg ? <RenderLayer><Layer content={<Register/>} callback={this.hideReg} width="520" height="520" /></RenderLayer> : ''}

            </div>
        )
    }
}