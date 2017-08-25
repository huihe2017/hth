import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import PageHome from './pageHome'


export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Route path="/" component={PageHome}/>
                <Footer/>
            </div>

        )
    }
}