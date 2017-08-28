import React from 'react';
import style from "./index.css"

class FormItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cla:"default"
        }
    }
    render(){
        return(
            <div className={style.inp} style={this.props.st}>
                <span className={style[this.state.cla]}>
                    {this.props.tip}
                </span>
                <input type="text" placeholder={this.props.pla} onFocus={this.onfocus.bind(this)} onBlur={this.onbulr.bind(this)}  name={this.props.nn} className={style[this.state.cla]}/>
            </div>
        )
    }
    //失去焦点
    onbulr (){
        this.setState({
            cla:"error"
        },()=>{
            if(this.state.cla=="error"){


            }else {

                this.setState({
                    cla:"default"
                })
            }
        })

    }

    //获取焦点
    onfocus(){
        this.setState({
            cla:"isfocus"
        })
    }

}

export default FormItem;