import React from 'react';
import style from "./index.css";
import Input from "../input/index";
import Tipdown from "../tipDown/index";

class Selphone extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cla:this.props.cla
        }
    }

    render(){
        let data2 =  [{
            value:["中国大陆","+86"],
            key:1
        }, {
            value:["中国香港","+886"],
            key:2,
            checked:true
        }, {
            value:["中国台湾","+853"],
            key:3,

        }]
        this.props.firstEdit?(this.props.cla='default'):''
        return(
            <div className={style.selphone} style={this.props.st}>
                <span className={style[this.props.cla]}>
                    联络人姓名需与身份证姓名一致
                </span>
                <div className={style.conimport}>
                    <Tipdown data={data2} ww={100}/>
                    <Input firstEdit={this.props.firstEdit} pla={"联络电话"} ww={400} pattern={this.props.pattern} cla={this.props.cla} sta={this.state.cla} jug={this.isfoucs.bind(this)}/>
                </div>

            </div>
        )
    }

    //获取焦点
    isfoucs(e){
        this.setState({
            cla:e
        })
    }

}

export default Selphone;