import React from 'react';
import style from "./index.css";

class Downbutton extends React.Component{
    render(){
        return(
            <a href="javascript:void (0);" className={style.downbutton}>
                <i className={this.props.data.iconclass}></i>
                <span>{this.props.data.download}</span>
            </a>

        )}
}

export default Downbutton;