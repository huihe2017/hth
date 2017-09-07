import React from "react";
import style from "./index.css";

class Ptitle extends React.Component{
    render(){
        let styles={
            color:this.props.color
        }
        return(
            <div className={style.ptitle} style={styles}>
                {this.props.content}
            </div>
        )
    }
}
export default Ptitle;