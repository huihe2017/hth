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
            isringht:true,
        }
    }



    render(){
        let wid={
            width:this.props.ww,
        };
        let sss={
            display:"none"
        };
        let ss={
            display:"block"
        };
        let sc={
            color:"#3b3d40"
        };
        let ssc={
            color:"#dfdce4"
        };


        this.props.firstEdit?(this.props.cla='default'):''
        console.log(this.props.cla)
        return(
            <div className={style.prephone} >
                <span  className={style[this.props.cla]}>
                    {this.props.tip}
                </span>
                <div className={style.select}>
                    <div className={style[this.props.cla+"1"]+" "+style.sedphone} onClick={this.prePhone.bind(this)} style={wid}>
                        <span title={this.state.show} style={this.state.issshow?sc:ssc} className={style.show}>
                            {this.state.show}
                        </span>
                        <i className="fa fa-angle-down"></i>
                    </div>
                    <ul className={style.selphone} style={this.state.isShow?ss:sss}>
                        {
                            this.props.data.map((v,i)=>{
                                return <Prephone key={i} data={v} get={this.getNum.bind(this)} />
                            })
                        }
                    </ul>
                </div>

            </div>
        )
    }
    componentWillMount(){

        this.props.data.map((v,i)=>{
            if(v.checked){
                this.setState({
                    show:v.value[1],
                    issshow:true
                },()=>{return});
                if(this.props.change){
                    this.props.change("","",v.key)
                }
            }
        });
    }

    //点击切换电话前缀的显示状态
    prePhone(e){
        this.setState({
            isShow:true,
        },()=>{
            if(this.state.isShow){
                this.setState({
                    isShow:true,
                    cla:'isfocus'
                });

            } else {
                this.setState({
                    isShow:false,
                    cla:"default"

                });

            }
        })

    }

    //获取点击所得电话前缀，并恢复默认样式
    getNum(e,r){
        if(this.props.la){
            this.props.la()
        }
        this.setState({
            show:e,
            issshow:true,
            isShow:false,
            cla:'default'
        });
        if(this.props.change){
            let x={};
            x.value=r;
            this.props.change(x,this.props.lebal)
        }else

            this.flag=false;
    }




}

export default Tipdown;
