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
                    "contentt":"香港证监会认可持牌发团",
                    "contentb":"持有第1/2/4/9类拍照"
                },
                {
                    "iconclass":"right",
                    "title":"实力雄厚",
                    "contentt":"位居香港券商top5%行列",
                    "contentb":"腾讯、经纬、红衫连续重金投资"
                },
                {
                    "iconclass":"money",
                    "title":"佣金实惠",
                    "contentt":"港股佣金最低至0",
                    "contentb":"美股佣金低至$0.01/股"
                }
            ]
        }
    }
    render(){
        return(
            <div className={style.superiority}>
                <div className={style.suptop}>
                    <a href="javascript:void (0);" className={style.linkus}>
                        <i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp; 联系客服
                    </a>
                </div>
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