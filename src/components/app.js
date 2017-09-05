import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import { hashHistory } from 'react-router'
import Footer from './footer'
import PageHome from './pageHome'
import PartnerReg from './partnerReg'
import Ib from './ib'
import PartnerLogin from './partnerLogin'
import HeadRR from './header'
import AccountDeposit from './accountDeposit'

export default class App extends Component {
    render() {
        return (
            <div style={{background:(hashHistory.getCurrentLocation().pathname !== '/')?'#f5f5f6':''}}>
                {/*<Header/>*/}
                <HeadRR/>
                    <div>
                        <Switch>
                            <Route path="/accountDeposit" component={AccountDeposit}/>
                            <Route path="/partnerReg" component={PartnerReg}/>
                            <Route path="/ib" component={Ib}/>
                            <Route path="/partnerLogin" component={PartnerLogin}/>
                            <Route path="/" component={PageHome}/>
                        </Switch>
                    </div>
                <Footer/>
            </div>

        )
    }
}