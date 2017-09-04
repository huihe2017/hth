import React from 'react';
import style from "./index.css";
import Input from "../input/index";
import Tipdown from "../tipDown/index";

let qh={};
let ph={};

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
            key:1,
            checked:true
        }, {
            value:["中国香港","+886"],
            key:2
        }, {
            value:["中国台湾","+853"],
            key:3,

        }];
        let ss={
            left: this.props.twidth+20,
            width:this.props.iwidth
        }
        let tip="";
        this.props.firstEdit?(this.props.cla='default'):'';
        return(
            <div className={style.selphone+" "+style.clearfloat} style={this.props.st}>
                <span className={style[this.props.cla]+" "+style.ttip}>
                    {this.props.ttip}
                </span>
                <div className={style.conimport}>
                    <div className={style.tipd}>
                        <Tipdown lebal={"qh"} change={this.tchange.bind(this)} data={data2} ww={this.props.twidth}/>
                    </div>
                    <div className={style.inpu} style={ss}>
                        <Input firstEdit={this.props.firstEdit} pla={"手机号"} ww={this.props.iwidth} pattern={this.props.pattern} cla={this.props.cla} sta={this.state.cla} jug={this.isfoucs.bind(this)} change={this.ichange.bind(this)} la={this.zchagne.bind(this)} align={this.props.align} tip={this.props.tip}/>
                    </div>

                </div>
                <span className={style[this.props.cla]+"1 "+style.btip}>
                    {this.props.cla=="error"?tip:""}
                </span>
            </div>
        )
    }

    tchange(e,t,i){
        qh=e||{
            value:i
        };
    }
    ichange(e){
        ph=e;
    }
    zchagne(e,r){
        let phone={};
        phone.qh=qh;
        phone.phone=ph;
        phone.state = ph.state;
        phone.firstEdit=false;
        this.props.change(phone,this.props.lebal)
    }

    //获取焦点
    isfoucs(e){
        this.setState({
            cla:e
        })
    }

}

export default Selphone;