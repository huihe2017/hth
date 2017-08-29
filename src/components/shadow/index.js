import React, {Component} from 'react'
import ReactDom from 'react-dom';
import style from './shadow.css'

class Shadow extends Component {
    componentDidMount() {
        this.refs['shadow'].style.width = document.body.offsetWidth + 'px'
        this.refs['shadow'].style.height = document.body.scrollHeight + 'px'
    }

    render() {
        return (
            <div onClick={this.props.closeHandle} ref={'shadow'} className={style.shadow}>
            </div>
        )
    }
}

export default Shadow