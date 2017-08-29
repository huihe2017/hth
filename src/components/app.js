import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import PageHome from './pageHome'
import PartnerReg from './partnerReg'
import Ib from './ib'
import PartnerLogin from './partnerLogin'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Route path="/" exact  component={PageHome}/>
                <Route path="/partnerReg" component={PartnerReg}/>
                <Route path="/ib" component={Ib}/>
                <Route path="/partnerLogin" component={PartnerLogin}/>
                <Footer/>
            </div>

        )
    }
}