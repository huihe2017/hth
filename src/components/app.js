import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import PageHome from './pageHome'
import PartnerReg from './partnerReg'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Route path="/" exact  component={PageHome}/>
                <Route path="/partnerReg" component={PartnerReg}/>
                <Footer/>
            </div>

        )
    }
}