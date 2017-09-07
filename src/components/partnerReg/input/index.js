import React from 'react';
import style from "./index.css"
class FormItem extends React.Component{

    constructor(props){
        super(props);
        this.onchangeHandle = this.onchangeHandle.bind(this)
    }
    onchangeHandle(e){
        let v = e.target.value;
        let state = 'error';
        if(this.props.pattern){
            if(this.props.pattern.test(v)){
                state='default'
            }else {
                state='error';
            }
        }else if(this.props.iid=="repass"){
            console.log(v)
            if(document.querySelector("#pass").value){
                if(v!==document.querySelector("#pass").value){
                    state='error'
                }else {
                    state='default';
                }
            }
        }else if(this.props.iid=="repass1"){
            console.log(v)
            if(document.querySelector("#pass1").value){
                console.log(document.querySelector("#pass1").value)
                if(v!==document.querySelector("#pass1").value){
                    state='error'
                }else {
                    state='default';
                }
            }
        } else {
            state='isfocus';
        }
        this.props.change({value:v,state,firstEdit:false},this.props.lebal);
        if(this.props.la){
            this.props.la()
        }
    }
    render(){
        let dib={
            display:"block"
        };
        let din={
            display:"none"
        };

        this.props.firstEdit?(this.props.cla='default'):'';
        return(
            <div className={style.inp} >
                <span className={style[this.props.cla]+" "+style.ttip}>
                    {this.props.align=="top"?this.props.tip:""}
                </span>
                <div className={style.import}>
                    <input type={this.props.pwa?'password':'text'} placeholder={this.props.pla} onChange={this.onchangeHandle} name={this.props.nn} className={style[this.props.cla+"1"]} value={this.props.val} disabled={this.props.edit?"disabled":""} id={this.props.iid}/>
                    <span className={style.dollar} style={this.props.dollar?dib:din}>
                        $
                    </span>
                    <span className={style.search} style={this.props.search?dib:din}>
                        <i className="fa fa-search fa-lg"></i>
                    </span>
                </div>
                <span className={style[this.props.cla+"2"]+" "+style.btip}>
                    {this.props.align=="bottom"?this.props.tip:""}
                </span>
            </div>
        )
    }
}

export default FormItem;