import React from 'react';
import style from "./index.css"
import {hashHistory} from 'react-router';
import TotalNavView from './totalNavView'

class TotalNav extends React.Component {

    checkedFn(flag) {
        console.log(hashHistory.getCurrentLocation().pathname)
        if (hashHistory.getCurrentLocation().pathname === flag) {
            return true
        }
    }

    getData() {
        for (let s in this.props.data) {
            this.props.data[s].checked = this.checkedFn(this.props.data[s].path)
        }
        return this.props.data
    }

    render() {

        return (
            <div className={style.wrap}>
                <div>
                    <TotalNavView data={this.getData()}/>
                </div>
            </div>
        )

    }
}

export default TotalNav;