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
            isringht:true,
            border:{
                width:this.props.ww,
                border:"1px solid #dfdce4",
                boxShadow:"0 0 5px 5px transparent",
                borderRadius:5
            }
        }
    }
    render(){
        let rig={
            color:"#dfdce4",
        };
        let error={
            color:"#f59294",
        };
        let err={

            width:this.props.ww,
            border:"1px solid #f59294",
        };
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
            color:"#dfdce4",
        };
        return(
            <div className={style.prephone} >

                <span style={this.state.isringht?rig:error}>
                    {this.props.tip}
                </span>
                <div className={style.select}>
                    <div className={style.sedphone} onClick={this.prePhone.bind(this)} style={this.state.isringht?this.state.border:err}>
                        <span title={this.state.show} style={this.state.issshow?sc:ssc}>
                            {this.state.show}
                        </span>
                        <i className="fa fa-angle-down"></i>
                    </div>
                    <ul className={style.selphone} style={this.state.isShow?ss:sss}>
                        {
                            this.state.prephone.map((v,i)=>{
                                return <Prephone key={i} data={v} get={this.getNum.bind(this)} />
                            })
                        }
                    </ul>
                </div>

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
                        boxShadow:"0 0 5px 5px rgba(82,98,255,0.1)",
                        borderRadius:"5px 5px 0 0"
                    }
                });
            } else {
                this.setState({
                    isShow:false,
                    border:{
                        width:this.props.ww,
                        border:"1px solid #dfdce4",
                        boxShadow:"0 0 5px 5px transparent",
                        borderRadius:5
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
                boxShadow:"0 0 5px 5px transparent",
                borderRadius:5
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


//40  120  60