import React from "react";
import style from "./index.css";

class Ptitle extends React.Component{
    render(){
        return(
            <div className={style.ptitle}>
                {this.props.content}
            </div>
        )
    }
}
export default Ptitle;