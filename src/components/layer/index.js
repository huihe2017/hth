import React, {Component} from 'react'
import Shadow from '../shadow'

import style from './layer.css'

class Layer extends Component {

    componentDidMount(){

    }

    render() {
        console.log(document.documentElement.scrollHeight)
        let layerStyle = {
            width: this.props.width,
            height: this.props.height,
            top:'50%',
            left:'50%',
            marginLeft: -this.props.width / 2,
            marginTop: -this.props.height / 2 + document.body.scrollTop
        }

        return (
            <div>
                <Shadow callback={this.props.callback} />
                <div className={style.layer} style={layerStyle}>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default Layer