import React from 'react';
import style from "./index.css"

class FormItem extends React.Component{
    constructor(props){
        super(props);
        this.onchangeHandle = this.onchangeHandle.bind(this)
    }
    onchangeHandle(e){

        let v = e.target.value
        let state = 'error';
        console.log(v)
        if(this.props.pattern){
            this.props.pattern.test(v)?(state='default'):''
        }else {
            state='isfocus'
        }

        this.props.change({value:v,state,firstEdit:false},this.props.lebal)
        if(this.props.la){
            this.props.la()
        }else {

        }
    }
    render(){
        let dib={
            display:"block"
        };
        let din={
            display:"none"
        };
        this.props.firstEdit?(this.props.cla='default'):''
        return(
            <div className={style.inp} >
                <span className={style[this.props.cla]}>
                    {this.props.tip}
                </span>
                <div className={style.import}>
                    <input type={this.props.pwa?'password':'text'} placeholder={this.props.pla} onChange={this.onchangeHandle} onFocus={this.onfocus.bind(this)} onBlur={this.onbulr.bind(this)}  name={this.props.nn} className={style[this.props.cla+"1"]} value={this.props.val} disabled={this.props.edit?"disabled":""}/>
                    <span className={style.dollar} style={this.props.dollar?dib:din}>
                        $
                    </span>
                    <span className={style.search} style={this.props.search?dib:din}>
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