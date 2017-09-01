import React, {Component} from 'react'
import ReactDom from 'react-dom';
import Shadow from '../shadow'
import style from './index.css'

export default class RenderLayer extends Component {
    componentDidMount() {
        this.popup = document.createElement("div");
        document.body.appendChild(this.popup);
        this._renderLayer();
    }

    componentDidUpdate() {
        this._renderLayer();
    }

    componentWillUnmount() {
        ReactDom.unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
    }

    _renderLayer() {
        ReactDom.render(
            <Dom {...this.props} />,
            this.popup);
    }

    render() {
        return null;
    }
}

class Dom extends Component {
    componentDidMount() {
        this.refs['wrap'].style.position = 'fixed'
        this.refs['wrap'].style.top = '0px'
        let layerStyle = {
            width: this.refs['wrap'].offsetWidth,
            height: this.refs['wrap'].offsetHeight,
            top: '50%',
            left: '50%',
            marginLeft: -this.refs['wrap'].offsetWidth / 2,
            // marginTop: -this.refs['wrap'].offsetHeight / 2 + document.body.scrollTop,
            marginTop: -this.refs['wrap'].offsetHeight / 2,
            zIndex: 30,
            background: '#fff'
        }
        this.setState({
            layerStyle
        })
    }

    closeHandle() {
        this.props.closeFn()
    }

    render() {
        return (
            <div>
                <div ref="wrap"  style={this.state && this.state.layerStyle}>
                    {this.props.children}
                    {!this.props.close && this.props.children ?
                        <span onClick={this.closeHandle.bind(this)} className={style.close}>+</span> : ''}
                </div>
                <Shadow closeHandle={this.closeHandle.bind(this)}/>
            </div>
        )
    }
}