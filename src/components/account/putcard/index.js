import style from "./index.css";
import React from "react";

class Putcard extends React.Component{
    render(){
        return(
            <div className={style.putc}>
                <img src="" alt=""/>
                <div className={style.jia}>
                    <span></span>
                    <span></span>
                </div>
                <input type="file" name={this.props.namm} onChange={this.il.bind(this)}/>
                <div className={style.jiaput}>
                    {this.props.word}
                </div>
            </div>
        )
    }
    il(){
        this.props.ill(document.querySelector("input[name='"+this.props.namm+"']").value.length)
    }
}

export default Putcard;

