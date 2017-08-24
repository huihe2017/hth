import React, {Component} from 'react'
import ReactDom from 'react-dom';
import style from './renderLayer.css'


export default class RenderLayer extends Component{
    componentDidMount(){
        this.popup = document.createElement("div");
        document.body.appendChild(this.popup);
        this._renderLayer();
    }
    componentDidUpdate() {
        this._renderLayer();
    }
    componentWillUnmount(){
        ReactDom.unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
    }
    _renderLayer(){
        ReactDom.render(this.props.children, this.popup);
    }
    render(){
        return null;
    }
}