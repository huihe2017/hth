import React from "react";
import style from "./index.css";
import {Link} from 'react-router-dom';
import {hashHistory} from 'react-router';

class PartnerEntry extends React.Component{
    render(){
        return(
            <div className={style.partnerEntry}>
                <div className={style.parenimg}>
                </div>
                <div className={style.parencon}>
                    <div className={style.lbut}>
                        <Link to="/partnerLogin">
                            <button className={(() => {
                            return this.checkedForPath('/partnerLogin')
                            })()}>已有账户，立即登录
                            </button>
                        </Link>
                    </div>
                    <div className={style.rbut}>
                        <Link to="/partnerReg">
                            <button className={(() => {
                            return this.checkedForPath('/partnerReg')
                            })()}>注册成为合伙人
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    checkedForPath(sidePath) {
        if (sidePath === hashHistory.getCurrentLocation().pathname) {//alert(22)
            return style.checked
        }
    }
}

export default PartnerEntry;