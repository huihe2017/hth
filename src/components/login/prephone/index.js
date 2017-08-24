import style from  "./index.css"
import React from 'react';

class Prephone extends React.Component{
    render(){
        return(
            <li onClick={this.selected.bind(this,this.props.data.num)} >
                {this.props.data.area} <span>{this.props.data.num}</span>
            </li>
        )
    }

    selected(e){
        this.props.get(e)

    }
}

export default Prephone;