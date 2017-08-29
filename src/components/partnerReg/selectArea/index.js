import React from 'react';
import style from  "./index.css"
import Input from "../input/index";
import Tipdown from "../tipDown/index"

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
            width:this.props.width3
        }
        return(
            <div className={style.selarea} >
                <span>
                    {this.props.tip}
                </span>
                <div className={style.perimport+' '+style.clearfloat}>
                    <div className={style.sheng}>
                        <Tipdown show={"请选择省份"} data={bank1} ww={this.props.width1}/>
                    </div>
                    <div className={style.shi}>
                        <Tipdown show={"请选择市区"} data={bank1} ww={this.props.width2}/>
                    </div>
                    <div className={style.hang} style={w}>
                        <Input pla={"开户行"} />
                    </div>


                </div>
            </div>
        )

    }

}

export default Selectarea;