import React from "react";
import style from "./index.css"

class QrCode extends React.Component{
    constructor(props){
        super(props);
        this.state={
            styles:{
                display:"block"
            }
        }
    }

    render(){
        return(
            <div className={style.qc} style={this.state.styles}>
                <div className={style.off} onClick={this.off.bind(this)}>

                </div>
                <div className={style.header}>
                    请扫描二维码进行开户
                </div>
                <div className={style.qrimg}>

                </div>
                <div className={style.tip}>
                    注：使用手机扫描二维码，开户操作将在手机上进行
                </div>
            </div>
        )
    }
    off(){
        this.setState({
            styles:{
                display:"none"
            }
        })
    }
}

export default QrCode;