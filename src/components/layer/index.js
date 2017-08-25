import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Shadow from '../shadow'
import style from './layer.css'

export default (params) => {
    params = {...params, ...{close: true}}
    let popup = document.createElement("div");
    document.body.appendChild(popup);

    class Dom extends Component {
        componentDidMount() {
            this.refs['wrap'].style.position = 'absolute'
            let layerStyle = {
                position: 'absolute',
                width: this.refs['wrap'].offsetWidth,
                height: this.refs['wrap'].offsetHeight,
                top: '50%',
                left: '50%',
                marginLeft: -this.refs['wrap'].offsetWidth / 2,
                marginTop: -this.refs['wrap'].offsetHeight / 2 + document.body.scrollTop,
                zIndex: 2,
                background: '#fff'
            }
            this.setState({
                layerStyle
            })
        }

        closeHandle() {
            ReactDOM.unmountComponentAtNode(popup);
            document.body.removeChild(popup);
        }

        render() {
            return (
                <div>
                    <div ref="wrap" style={this.state && this.state.layerStyle}>
                        {params.content}
                        {params.close ?
                            <span onClick={this.closeHandle.bind(this)} className={style.close}>+</span> : ''}
                    </div>
                    <Shadow closeHandle={this.closeHandle}/>
                </div>
            )
        }
    }

    ReactDOM.render(<Dom/>, popup);
}