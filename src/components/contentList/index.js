import React from 'react';
import style from './index.css'

class AboutUs extends React.Component{
    render(){
        return(
            <div className={style.contentlist}>
                {
                    this.props.data.map((v)=>{
                        return(
                            <div className={style.content}>
                                <div className={style.title}>
                                    <span>{v.title}</span>
                                </div>
                                <ul className={style.list}>
                                    {
                                        v.content.map((t)=>{
                                            return (
                                                <li className={style.item}>{this.red(t)}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    red(t){
        if(this.props.redw){
            let s = "利息";
            let reg = new RegExp("(" + s + ")",'g');
            let str = t;
            let newstr = str.replace(reg, `<i style='color: red'>$1</i>`);
            return newstr
        }else {
            return t
        }
    }
}

export default AboutUs