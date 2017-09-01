import React from 'react';
import style from  "./index.css";


class TabControl extends React.Component{

    render(){
        return(
            <div className={style.reportquery}>

                {
                    this.props.data.map((v,i)=>{
                        if(v.checked){
                            return (
                                <div className={style.naved}>
                                    {v.value}
                                </div>
                            )
                        }else {
                            return (
                                <div className={style.nav}>
                                    {v.value}
                                </div>
                            )
                        }
                    })
                }

            </div>
        )
    }
    change(e){
        this.props.changec(e)

    }
}

export default TabControl;