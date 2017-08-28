import React from 'react';
import style from "./index.css"

class FormItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isFocus:false,
            sta:true,
            frc:{
                color:"#dfdce4",
                borderColor:"#dfdce4"
            }
        }
    }

    render(){
        return(
            <div className={style.inp} style={this.props.st}>
                <span style={this.state.frc}>
                    {this.props.tip}
                </span>
                <input type="text" placeholder={this.props.pla} onFocus={this.onfocus.bind(this)} onBlur={this.onbulr.bind(this)}  name={this.props.nn} style={this.state.frc}/>
            </div>
        )
    }
    //失去焦点
    onbulr (){
        this.setState({
            isFocus:false
        });
        if(this.state.sta){
            this.setState({
                frc:{
                    color:"#dfdce4",
                    borderColor:"#dfdce4"
                }
            })

        }else {
            this.setState({
                frc:{
                    color:"#f59294",
                    borderColor:"#f59294"
                }
            })
        }
    }

    //获取焦点
    onfocus(){
        this.setState({
            isFocus:true,
            frc:{
                color:"#5262ff",
                borderColor:"#5262ff"
            }
        })
    }

}

export default FormItem;