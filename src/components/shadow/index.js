import React, {Component} from 'react'
import style from './shadow.css'

class Shadow extends Component {
    componentDidMount() {
        this.refs['shadow'].style.width = document.body.offsetWidth + 'px'
        this.refs['shadow'].style.height = document.body.scrollHeight + 'px'
    }

    render() {
        return (
            <div onClick={this.props.callback} ref={'shadow'} className={style.shadow}>


            </div>
        )
    }
}

export default Shadow