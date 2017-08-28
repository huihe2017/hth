import React from "react";
import style from "./index.css";
import Prephone from "./downitem/index";

class Tipdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show:this.props.show,
            issshow:false,

            isShow:false,
            prephone:this.props.data,
            border:{
                width:this.props.ww,
                border:"1px solid #dfdce4",
                boxShadow:"0 0 5px 5px transparent"
            }
        }
    }
    render(){
        let sss={
            display:"none"
        };
        let ss={
            display:"block"
        };
        let sc={
            color:"#3b3d40",
        };
        let ssc={
            color:"#eef0ff",
        };
        return(
            <div className={style.prephone} >
                <div className={style.sedphone} onClick={this.prePhone.bind(this)} style={this.state.border}>
                    <span style={this.state.issshow?sc:ssc}>
                        {this.state.show}
                    </span>
                    <i className="fa fa-angle-down"></i>
                </div>
                <ul className={style.selphone}  style={this.state.isShow?ss:sss}>
                    {
                        this.state.prephone.map((v,i)=>{
                            return <Prephone key={i} data={v} get={this.getNum.bind(this)} />
                        })
                    }
                </ul>
            </div>
        )
    }

    //点击切换电话前缀的显示状态
    prePhone(e){
        this.setState({
            isShow:true,
        },()=>{
            if(this.state.isShow){
                this.setState({
                    isShow:true,
                    border:{
                        width:this.props.ww,
                        border:"1px solid #5262ff",
                        boxShadow:"0 0 5px 5px rgba(82,98,255,0.1)"
                    }
                });
            } else {
                this.setState({
                    isShow:false,
                    border:{
                        width:this.props.ww,
                        border:"1px solid #dfdce4",
                        boxShadow:"0 0 5px 5px transparent"
                    }
                });
            }
        })

    }
    //获取点击所得电话前缀，并恢复默认样式
    getNum(e){
        this.setState({
            show:e,
            issshow:true,
            isShow:false,
            border:{
                width:this.props.ww,
                border:"1px solid #dfdce4",
                boxShadow:"0 0 5px 5px transparent"
            }
        });
        this.flag=false;
    }
    componentWillMount(){
        this.state.prephone.map((v,i)=>{
            if(v.checked){
                this.setState({
                    show:v.value[1],
                    issshow:true
                },()=>{return});
            }
        });
    }


}

export default Tipdown;