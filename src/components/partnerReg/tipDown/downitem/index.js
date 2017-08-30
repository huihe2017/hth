import style from  "./index.css"
import React from 'react';

class Prephone extends React.Component{
    render(){
        return(
            <li className={style.li} onClick={this.selected.bind(this,this.props.data.value)}>
                {
                    this.isarray()
                }
            </li>
        )
    }

    isarray(){
        if(this.props.data.value instanceof Array){
            return(<div>
                <span>{this.props.data.value[0]}</span>
                <span>{this.props.data.value[1]}</span>
            </div>)
        }
        return <span>{this.props.data.value}</span>
    }
    selected(e){
        let ww;
        if(this.props.data.value instanceof Array){
            this.props.get(e[1],this.props.data.key)
        }else {
            this.props.get(e,this.props.data.key)
        }
    }
}

export default Prephone;