import React from 'react';
import style from "./index.css"

class FormItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isFocus:false
        }
    }
    render(){
        let styless={
            border:'1px solid #5262ff',
            boxShadow:'0 0 5px 5px rgba(82,98,255,0.1)'
        };
        let stylesss={
            border:'1px solid #dfdce4',
            boxShadow:'0 0 5px 5px transparent'
        };
        var isff=false;
        return(
            <div className={style.inp} style={this.props.st}>
                <input type={this.props.tt} placeholder={this.props.pla} onFocus={this.onfocus.bind(this)} onBlur={this.onbulr.bind(this)}  name={this.props.nn} style={this.state.isFocus?styless:stylesss}/>
                <span className={style.tip}>

                </span>
            </div>
        )
    }
    //失去焦点
    onbulr (){
        this.setState({
            isFocus:false
        });
        console.log(document.querySelector("input[name='"+this.props.nn+"']").value)
        if((new RegExp(this.props.rex)).test(document.querySelector("input[name='"+this.props.nn+"']").value)){
            document.querySelector("input[name='"+this.props.nn+"']+span").innerHTML="";
        }else {
            document.querySelector("input[name='"+this.props.nn+"']+span").innerHTML="请输入正确格式";
        }
    }
    //获取焦点
    onfocus(){
        this.setState({
            isFocus:true
        });

    }
}

export default FormItem;