import React from 'react';
import style from "./index.css";
import Input from "../../partnerReg/input"

class modifyPasswordView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={style.modifyPasswordView}>
                <div className={style.initial}>
                    <span>
                        初始密码
                    </span>
                    <div className={style.fpas}>
                        <Input
                            st={'100%'}
                            pla={"请输入密码"}
                            lebal="initialPassword"
                            pattern={/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/}
                            change={this.change.bind(this)}
                            pwa={true}
                            cla={this.props.initialPassword.state}
                            align={"bottom"}
                            tip={"请输入正确的密码"}
                            firstEdit={this.props.initialPassword.firstEdit}
                            id={"pass"}
                        />
                    </div>
                </div>
                <div className={style.initial}>
                    <span>
                        设置密码
                    </span>
                    <div className={style.fpas}>
                        <Input
                            st={'100%'}
                            pla={"请输入密码"}
                            lebal="setPassword"
                            pattern={/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/}
                            change={this.change.bind(this)}
                            pwa={true}
                            cla={this.props.setPassword.state}
                            id="pass1"
                            align={"bottom"}
                            tip={"请输入正确的密码"}
                            firstEdit={this.props.setPassword.firstEdit}

                        />
                    </div>
                </div>
                <div className={style.initial}>
                    <span>
                        确认密码
                    </span>
                    <div className={style.fpas}>
                        <Input
                            st={'100%'}
                            pla={"请再次输入密码"}
                            lebal="confirmPassword"
                            change={this.change.bind(this)}
                            pwa={true}
                            cla={this.props.confirmPassword.state}
                            align={"bottom"}
                            tip={"请保证两次密码输入相同"}

                            firstEdit={this.props.confirmPassword.firstEdit}
                        />
                    </div>
                </div>
                <div className={style.but}>
                    <button onClick={this.click.bind(this)}>
                        确认
                    </button>
                </div>
            </div>
        )

    }
    change(e,r){
        this.props.change(e,r)
    }
    click(){
        this.props.submit()
    }
}

export default modifyPasswordView;