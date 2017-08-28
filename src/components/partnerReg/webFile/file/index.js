import style from "./index.css";
import React from "react";

class Putcard extends React.Component{
    render(){
        return(
            <div className={style.putc}>
                <img src="" alt=""/>

                <input type="file"/>
                <div className={style.jiaput}>
                    {this.props.word}
                </div>
            </div>
        )
    }

}

export default Putcard;

