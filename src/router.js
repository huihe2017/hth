import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './common.css'
import App from './components/app'
import GetAccount from './components/getAccount'
import Account from './components/account'

class PageRouter extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Route path="/getAccount" component={GetAccount}/>
                    <Route path="/account" component={Account}/>
                    <Route path="/"   component={App}/>
                </div>
            </Router>
        )
    }
}

export default PageRouter