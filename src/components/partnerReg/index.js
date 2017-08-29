import React from "react";
import style from "./index.css";
import Personmsg from "./personalMsg/index";
import Bannkmsg from "./bankMsg/index";
import Companymsg from "./companyMsg/index";

//40  120  60
class Partnerreg extends React.Component{
    render(){
        return(
            <div className={style.partreg}>
                <div className={style.avatar}>
                    <input type="file"/>
                </div>
                <div className={style.part}>
                    <Personmsg/>
                </div>
                <div className={style.part}>
                   <Bannkmsg/>
                </div>
                <div className={style.part}>
                    <Companymsg/>
                </div>
                <div className={style.prfooter}>
                    <span className={style.protocol}>
                    提交申请即表示您已阅读并同意 <a href="javascript:void (0);">《海豚汇服务协议》</a>
                </span>
                    <button className={style.submit}>
                        提交申请
                    </button>
                </div>


            </div>
        )
    }
}

export default Partnerreg;