import React from 'react';
import HeaderR from './headerView'
import style from "./index.css"
import { hashHistory } from 'react-router';


class TitValueBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position:'relative',
            otherStyle:true,
            isShowReg:false,
            isShowLogin:false,
            isShowSideBar: false,
            userName:'',
            isLogin:false
        }
        this.hideLogin = this.hideLogin.bind(this)
        this.hideReg = this.hideReg.bind(this)
        this.toggle = this.toggle.bind(this)
        this.hideSideBar = this.hideSideBar.bind(this)
        this.showSideBar = this.showSideBar.bind(this)
        this.choceType = this.choceType.bind(this)

    }

    login(){
        this.state.isLogin = true
        this.state.isShowReg = false
        this.state.isShowLogin = false

        this.setState({
            state: this.state
        })
    }

    signOut(){
        this.setState({
            isLogin:false
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
    toggle(flag){

        let state = this.state
        state.isShowLogin = flag
        state.isShowReg = !flag
        this.setState({state:state});
    }

    hideSideBar(){
        this.setState({isShowSideBar:false});
    }

    showSideBar(){
        this.setState({isShowSideBar:true});
    }

    componentWillReceiveProps(){
        this.setState({isShowSideBar: false})

        if(hashHistory.getCurrentLocation().pathname !== '/'){
            this.setState({position: 'relative'})
            this.setState({otherStyle: true})
            window.onscroll = null
            return true
        }else {
            if(!window.onscroll){
                this.choceType()
                return true
            }
        }
        return true
    }

    componentWillMount(){
        this.choceType()

    }

    choceType(){
        if(hashHistory.getCurrentLocation().pathname === '/'){
            this.setState({position: 'absolute'})
            this.setState({otherStyle: false})
            let dance = document.body.clientWidth * 0.46
            let danceCopy = dance
            window.onscroll = null
            window.onscroll = (e) => {
                //console.log(e)
                //console.log(document.body.scrollTop)
                if (document.body.scrollTop < danceCopy) {
                    this.setState({position: 'absolute'})
                    this.setState({otherStyle: false})
                    return false
                }console.log(document.body.scrollTop - dance)
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

    componentWillUnmount(){

    }

    render() {
        return (
            <HeaderR login={this.login.bind(this)} {...this.state} hideLogin={this.hideLogin} hideReg={this.hideReg}  toggle={this.toggle} hideSideBar={this.hideSideBar} showSideBar={this.showSideBar} />
        )
    }
}

export default TitValueBox;