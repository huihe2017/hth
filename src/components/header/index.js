import React, {Component} from 'react'
import SideBar from './sideBar'
import Login from '../login'
import Register from '../register'
import Layer from '../renderLayer'
import { browserHistory } from 'react-router';
import style from './header.css'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShowSideBar: false,
            isShowLogin: false,
            isShowReg: false,
            // isFixed: false,
            isFixedAbled:false,
            position:'relative',
            otherStyle:false
        }
        this.hideLogin = this.hideLogin.bind(this)
        this.hideReg = this.hideReg.bind(this)
    }

    componentDidMount() {
        if(browserHistory.getCurrentLocation().pathname === '/'){
            this.setState({position: 'absolute'})
            this.setState({isFixedAbled: true})
        }
        if(browserHistory.getCurrentLocation().pathname === '/'){
            let dance = document.body.clientWidth * 0.46
            let danceCopy = dance

            window.onscroll = (e) => {
                //console.log(e)
                //console.log(document.body.scrollTop)
                if (document.body.scrollTop < danceCopy) {
                    this.setState({position: 'absolute'})
                    this.setState({otherStyle: false})
                    return false
                }
                if (document.body.scrollTop - dance < 0) {
                    this.setState({position: 'fixed'})
                    this.setState({otherStyle: true})
                } else {
                    this.setState({position: 'absolute'})
                    this.setState({otherStyle: false})
                }
                dance = document.body.scrollTop
            }
        }


    }

    hideLogin() {
        this.setState({isShowLogin: false}, () => {
        })
    }

    hideReg() {
        this.setState({isShowReg: false}, () => {
        })
    }
    toggle(flag){

        let state = this.state
        state.isShowLogin = flag
        state.isShowReg = !flag
        this.setState({state:state});
    }
    render() {
        // if(this.state.isShowLogin){
        //     Layer({content:<Login toReg={this.toggle.bind(this)} />})
        // }
        // if(this.state.isShowReg){
        //     Layer({content:<Register  toLogin={this.toggle.bind(this)} />})
        // }
        return (
            <div>
                {/*<div className={this.state.isFixed ? (style.header + ' ' + style.fixed) : style.header}>*/}
                <div className= {this.state.otherStyle?( style.header + ' ' + style[this.state.position]+ ' ' + style.otherStyle):( style.header + ' ' + style[this.state.position])}>
                    <div className={style.logo}>
                        {
                            this.state.otherStyle?<img src={require("./logoO.png")}/>:<img src={require("./logo.png")}/>
                        }

                    </div>
                    <div className={style.headerRight}>
                        <a className={style.checked}>中文</a>
                        <a className="english">EN</a>
                        <a onClick={()=>{this.toggle(true)}} className={style.login}>&nbsp;&nbsp;&nbsp;&nbsp;登录</a>
                        <a onClick={()=>{this.toggle(false)}} className={style.login}>注册</a>
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
                {this.state.isShowLogin?<Layer closeFn={this.hideLogin}><Login toReg={this.toggle.bind(this)} /></Layer>:''}
                {this.state.isShowReg?<Layer closeFn={this.hideReg}><Register toLogin={this.toggle.bind(this)} /></Layer>:''}
            </div>
        )
    }
}