import React from "react";
import style from "./index.css";

class PartnerEntry extends React.Component{
    render(){
        return(
            <div className={style.partnerEntry}>
                <div className={style.parenimg}>
                </div>
                <div className={style.parencon}>
                    <div className={style.lbut}>
                        <button>
                            已有账户，立即注册
                        </button>
                    </div>
                    <div className={style.rbut}>
                        <button>
                            注册成为合伙人
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PartnerEntry;