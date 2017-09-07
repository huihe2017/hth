import React from 'react';
import style from  "./index.css"
import Input from "../input/index";
import Tipdown from "../tipDown/index"

let sheng={};
let shi={};
let khh={};

class Selectarea extends React.Component{
    render(){
        let bank1=[
            {
                key:1,
                value:"中国人民银行"
            },
            {
                key:2,
                value:"中国建设银行"
            },
            {
                key:3,
                value:"中国农业银行啊"
            },
         {
             key:2,
                 value:"中国建设银行"
         },
        {
            key:3,
                value:"中国农业银行啊啊"
        }
        ];
        let w={
            width:this.props.widthKhh
        }
        return(
            <div className={style.selarea} >
                <span>
                    {this.props.tip}
                </span>
                <div className={style.perimport+' '+style.clearfloat}>
                    <div className={style.sheng}>
                        <Tipdown
                            show={"请选择省份"}
                            data={bank1}
                            ww={this.props.widthProv}
                            change={this.shengchange.bind(this)}
                            la={this.zchagne.bind(this)}
                            firstEdit1={this.props.firstEdit1}
                        />
                    </div>
                    <div className={style.shi}>
                        <Tipdown show={"请选择市区"} data={bank1} ww={this.props.widthCity}  change={this.shichange.bind(this)} la={this.zchagne.bind(this)} firstEdit1={this.props.firstEdit2}/>
                    </div>
                    <div className={style.hang} style={w}>
                        <Input pla={"开户行"}  firstEdit={this.props.firstEdi3} change={this.khhchange.bind(this)} la={this.zchagne.bind(this)}/>
                    </div>
                </div>
            </div>
        )

    }

    shengchange(e,t,i){
        sheng=e||{
            value:i
        };
        sheng.state="default"
    }
    shichange(e,t,i){
        shi=e||{
            value:i
        };
        shi.state="default"
    }
    khhchange(e){
        khh=e;

    }

    zchagne(e,r){
        let area={};
        area.sheng=sheng;
        area.shi=shi;
        area.khh={value:khh.value};
        if(sheng.state=="default"&&shi.state=="default"&&khh.state!="error"){
            area.state = "default";
        }else {
            area.state = "error";
        }
        this.props.change(area,this.props.lebal)
    }

}

export default Selectarea;