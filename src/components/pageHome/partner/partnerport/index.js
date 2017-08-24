import React from 'react';
import style from "./index.css";

class Partnerpart extends React.Component{
    render(){
        return(
            <div className={style.buddy}>
                <img src={require(`./images/${this.props.data.imgurl}.png`)} alt=""/>

            </div>
        )
    }
}

export default Partnerpart;