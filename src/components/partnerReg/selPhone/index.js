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
            key:1
        }, {
            value:["中国香港","+886"],
            key:2,
            checked:true
        }, {
            value:["中国台湾","+853"],
            key:3,

        }]
        this.props.firstEdit?(this.props.cla='default'):'';
        return(
            <div className={style.selphone} style={this.props.st}>
                <span className={style[this.props.cla]}>
                    联络人姓名需与身份证姓名一致
                </span>
                <div className={style.conimport}>
                    <Tipdown lebal={"qh"} change={this.tchange.bind(this)} data={data2} ww={100}/>
                    <Input firstEdit={this.props.firstEdit} pla={"联络电话"} ww={400} pattern={this.props.pattern} cla={this.props.cla} sta={this.state.cla} jug={this.isfoucs.bind(this)} change={this.ichange.bind(this)} la={this.zchagne.bind(this)}/>
                </div>

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