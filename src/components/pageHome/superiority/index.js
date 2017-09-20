import React from 'react';
import style from "./index.css";
import Support from "./superiority-part/index";

class Superiority extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            superiority:[
                {
                    "iconclass":"book",
                    "title":"资质合规",
                    "contentt":"",
                    "contentb":""
                },
                {
                    "iconclass":"right",
                    "title":"实力雄厚",
                    "contentt":"",
                    "contentb":""
                },
                {
                    "iconclass":"money",
                    "title":"佣金实惠",
                    "contentt":"",
                    "contentb":""
                }
            ]
        }
    }
    render(){
        return(
            <div className={style.superiority}>

                <div className={style.supcontent}>
                    {
                        this.state.superiority.map((v,i)=>{
                            return <Support  key={i}  data={v}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Superiority;