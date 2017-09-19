import React, {Component} from 'react'

import {Route, Switch} from 'react-router-dom'
import { hashHistory } from 'react-router'
import Footer from './footer'
import PageHome from './pageHome'
import PartnerReg from './partnerReg'
import Ib from './ib'
import PartnerLogin from './partnerLogin'
import Header from './header'
import UserCenter from './userCenter'
import AboutUs from './aboutUs'
import DealTerrace from './dealTerrace'
import ProductDeal from './productDeal'
import DolphinSchool from './dolphinSchool'
import PartnerEntry from './partnerEntry'

export default class App extends Component {
    render() {
        return (
            <div style={{background:(hashHistory.getCurrentLocation().pathname !== '/')?'#f5f5f6':''}}>
                {/*<Header/>*/}
                <Header/>
                    <div style={{paddingBottom:'20px'}}>
                        <Switch>
                            <Route path="/aboutUs" component={AboutUs}/>
                            <Route path="/dealTerrace" component={DealTerrace}/>
                            <Route path="/productDeal" component={ProductDeal}/>
                            <Route path="/dolphinSchool" component={DolphinSchool}/>
                            <Route path="/partnerReg" component={PartnerReg}/>
                            <Route path="/partnerEntry" component={PartnerEntry}/>
                            <Route path="/ib" component={Ib}/>
                            <Route path="/partnerLogin" component={PartnerLogin}/>
                            <Route path="/userCenter" component={UserCenter}/>
                            <Route path="/" component={PageHome}/>
                        </Switch>
                    </div>
                <Footer/>
            </div>

        )
    }
}