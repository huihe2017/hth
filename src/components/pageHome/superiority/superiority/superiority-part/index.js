import React from 'react';
import style from "./index.css";


class Support extends React.Component{
    render(){
        return(
            <a href="javascript:void (0);" className={style.superiorityport}>
                <div className={style.suppicon}>
                    <img src={require(`./images/${this.props.data.iconclass}.png`)} alt=""/>
                </div>
                <div className={style.suppfont}>
                    <div className={style.suppftitle}>
                        {this.props.data.title}
                    </div>
                    <div className={style.suppfcontent}>
                        {this.props.data.contentt}
                        <span>
                             {this.props.data.contentb}
                        </span>
                    </div>
                </div>
            </a>
        )
    }
}

export default Support;