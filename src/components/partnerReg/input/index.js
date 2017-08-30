import React from 'react';
import style from "./index.css"

class FormItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cla:"default",
            search:this.props.search,
            dollar:this.props.unit,
            edit:this.props.edit||true,
            val:this.props.val||""
        }
    }
    render(){
        let dib={
            display:"block"
        };
        let din={
            display:"none"
        };

        return(
            <div className={style.inp} >
                <span className={style[this.state.cla]}>
                    {this.props.tip}
                </span>
                <div className={style.import}>
                    <input type={this.props.pwa?'password':'text'} placeholder={this.props.pla} onFocus={this.onfocus.bind(this)} onBlur={this.onbulr.bind(this)}  name={this.props.nn} className={style[this.state.cla+"1"]} value={this.state.val} disabled={this.state.edit?"":"disabled"}/>
                    <span className={style.dollar} style={this.state.dollar?dib:din}>
                        $
                    </span>
                    <span className={style.search} style={this.state.search?dib:din}>
                        <i className="fa fa-search fa-lg"></i>
                    </span>
                </div>
            </div>
        )
    }
    //失去焦点
    onbulr (){
        this.setState({
            cla:"error"
        },()=>{
            if(this.state.cla=="error"){


            }else {

                this.setState({
                    cla:"default"
                })
            }
        })

    }

    //获取焦点
    onfocus(){
        this.setState({
            cla:"isfocus"
        })
    }

}

export default FormItem;