import React from 'react';
import style from "./index.css"
import TotalNav from './totalNav'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AccountLink from './AccountLink'
import ChildLink from './ChildLink'
import ReportQuery from './ReportQuery'
import ApplyCommission from './ApplyCommission'
import AccountOverview from './accountOverview'

class Ib extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className={style.wrap}>
                <TotalNav/>
                <Router>
                    <div>
                        <Route path="/ib" component={AccountOverview}/>
                        <Route path="/ib/applyCommission" component={ApplyCommission}/>
                        <Route path="/ib/accountLink" component={AccountLink}/>
                        <Route path="/ib/childLink" component={ChildLink}/>
                        <Route path="/ib/reportQuery" component={ReportQuery}/>
                    </div>
                </Router>
            </div>
        )
    }


}

export default Ib;