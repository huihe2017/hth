import React from 'react';
import style from "./index.css";
import Partnerpart from "./partnerport/index"

class Partner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            partner:[
                {
                    "imgurl":"WEB-02",
                },
                {
                    "imgurl":"WEB-03",
                },
                {
                    "imgurl":"WEB-04",
                },
                {
                    "imgurl":"WEB-05",
                },
                {
                    "imgurl":"WEB-06",
                },
                {
                    "imgurl":"WEB-07",
                },

            ]
        }
    }
    render(){
        return(
            <div className={style.partner}>
                <div className={style.partnercon}>
                    <div className={style.pctitle}>
                        合作伙伴  /
                    </div>
                    <div className={style.pccontent}>
                        {
                            this.state.partner.map((v,i)=>{
                                return <Partnerpart key={i} data={v}/>
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default Partner;