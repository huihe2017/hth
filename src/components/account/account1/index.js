import React from "react";
import style from "./index.css";
import Putcard from "./putcard/index"

class Account extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ss:false,
            ll:0,
            lll:0
        }
    }

    render(){
        return(
            <div className={style.account}>
                <header className={style.mheader}>
                    <div className={style.IDcard}>
                        1上传身份证
                    </div>
                    <div className={style.bankcard}>
                        2上传银行卡
                    </div>
                </header>
                <section className={style.mcontent}>
                    <Putcard word="点击上传身份证人相面" ill={this.ill1.bind(this)} namm="zheng"/>
                    <Putcard word="点击上传身份证国徽面" ill={this.ill2.bind(this)} namm="fan"/>
                </section>
                <section className={style.subbutton}>
                    <button onTouchStart={this.panduan.bind(this)}>
                        确认上传
                    </button>
                </section>
                <section className={style.hint}>
                    <header className={style.hinth}>
                        温馨提示：
                    </header>
                    <section className={style.hintc}>
                        <p>建议拍摄角度保持垂直，避免倾斜过大造成图像变形。</p>
                        <p>请提交银行卡原件的正/反两面彩色图片，不要提供黑白图片或复印件。</p>
                        <p>建议银行卡照片保持完整，避免裁剪边角框，有污迹，划痕或折痕。</p>
                        <p>银行卡图片中的文字，号码尽量清晰可辨，建议不要涂改或在名字和卡号文字上加水印。</p>
                    </section>
                </section>
            </div>
        )
    }

    ill1(e){
        this.setState({
            ll:e
        });
    }
    ill2(e){
        this.setState({
            lll:e
        });
    }
    panduan(){
        if(this.state.ll>0&&this.state.lll>0){
            this.setState({
                ss:true
            },()=>{
                if(this.state.ss){
                    this.props.putt();
                }else {
                    alert("请上传身份证照片")
                }
            })
        }else {
            alert("请上传身份证照片")
        }
    }
}

export default Account;