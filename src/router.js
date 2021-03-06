import React, {Component} from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import './common.css'
import App from './components/app'
import GetAccount from './components/getAccount'
import Account from './components/account'

import  AccountLink from './components/ib/accountLink'


class PageRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/getAccount" component={GetAccount}/>
                        <Route path="/account" component={Account}/>
                        <Route path="/" component={App}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default PageRouter