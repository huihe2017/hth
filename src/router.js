import React, {Component}from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import PageHome from './components/pageHome'

import './common.css'
import App from './components/app'
import GetAccount from  './components/getAccount'
import Account from './components/account'

class PageRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={PageHome} />

                </Route>
                <Route path="/getAccount" component={GetAccount}/>
                <Route path="/account" component={Account}/>

            </Router>
        )
    }
}
export default PageRouter