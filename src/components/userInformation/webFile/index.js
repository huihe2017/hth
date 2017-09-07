import React from "react";
import Putcard from "./file/index";
import style from "./index.css";

class Upload extends React.Component{
    render(){
        return(
            <div className={style.upload}>
                <div className={style.title}>
                    {this.props.title}
                </div>
                <div className={style.uploader}>
                    {
                        this.props.putword.map((v,i)=>{
                           return <Putcard word={v}/>
                        })
                    }
                </div>
                <div className={style.tip}>
                    {
                        this.props.tipword.map((v,i)=>{
                            return <p>{v}</p>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Upload;
