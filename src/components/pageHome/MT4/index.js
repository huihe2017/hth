import React from 'react';
import style from "./index.css";
import Downbutton from "./download-button/index";



class Mtdownload extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            button:[
                {
                    "iconclass":"fa fa-windows",
                    "download":"windows下载"
                },
                {
                    "iconclass":"fa fa-apple",
                    "download":"iOS下载"
                },
                {
                    "iconclass":"fa fa-android",
                    "download":"Android下载"
                }
                ]
        }
    }
    render(){
        return(
            <div className={style.mt4}>
                <div className={style.mt4title}>
                    MT4交易终端下载
                </div>
                <div className={style.mt4download}>
                    <a href="javascript:void (0);" className={style.mt4bg}>
                    </a>
                    <div className={style.downloadlist}>
                        {
                            this.state.button.map((v,i)=>{
                                return <Downbutton  key={i}  data={v}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Mtdownload;