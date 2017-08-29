import React from 'react';
import style from  "./index.css"
import Input from "../input/index";
import Tipdown from "../tipDown/index"

class Selectarea extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           tip:"文案待定"
        }
    }
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
        return(
            <div className={style.selarea} >
                <span>
                    {this.state.tip}
                </span>
                <div className={style.perimport}>
                    <div className={style.sheng}>
                        <Tipdown show={"请选择省份"} data={bank1} ww={160}/>
                    </div>
                    <div className={style.shi}>
                        <Tipdown show={"请选择市区"} data={bank1} ww={160}/>
                    </div>
                    <div className={style.hang}>
                        <Input pla={"开户行"} />
                    </div>


                </div>
            </div>
        )

    }

}

export default Selectarea;