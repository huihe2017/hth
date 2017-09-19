import React from 'react';
import style from "./index.css";
import Title from "../../partnerReg/title/index";
import Webfile from "../../partnerReg/webFile/index";
import Input from "../../partnerReg/input/index";


class Personal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isBlock:false,
            showNum:60,
        }
    }
    change(vaildMsg, name) {
        this.props.change(vaildMsg, 'personalMsg', name)
    }


    render() {
        let sss={
            display:"none"
        };
        let ss={
            display:"block"
        };
        let putword1 = ["点击上传人像面", "点击上传国徽面"];
        let tipword1 = [
            "1.文件为数码照片，请勿进行美化和修改，以免申请失败",
            "2.上传文件格式支持png，jpg和bmp",
            "3.文件大小不超过3MB，文件尺寸最小为200px*150px"
        ];


        console.log(this.props.data.email.state)
        return (
            <div className={style.personal}>
                <Title content={"/联络人信息"} color={"#3b3d40"}/>
                <div className={style.perimport}>
                    <div className={style.phoneMsg}>
                        <div className={style.inp}>
                            <Input
                                change={this.change.bind(this)}
                                pattern={/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/}
                                lebal="regPhone"
                                st={'100%'}
                                cla={this.props.data.phone.state}
                                align={"top"}
                                pla={"手机验证码"}
                                tip={"请输入您绑定的手机号收到的验证码【必填】"}
                                firstEdit={this.props.data.phone.firstEdit}
                            />
                        </div>
                        <button onClick={this.state.isBlock?null:this.timeOut.bind(this)}>
                            <span  style={this.state.isBlock?sss:ss}>发送验证码</span>
                            <span style={this.state.isBlock?ss:sss}>
                                    <span>{this.state.showNum}</span>s后重新获取
                                </span>
                        </button>
                    </div>
                    <Input
                        change={this.change.bind(this)}
                        pattern={/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/}
                        lebal="email"
                        st={'100%'}
                        cla={this.props.data.email.state}
                        align={"top"}
                        pla={"邮箱"}
                        val={this.props.data.email.value}
                        tip={"请输入正确格式邮箱信息【必填】"}
                        firstEdit={this.props.data.email.firstEdit}
                    />
                    <Input
                        st={'100%'}
                        cla={this.props.data.sfz.state}
                        align={"top"}
                        pla={"身份证号"}
                        val={this.props.data.sfz.value}
                        lebal="sfz"
                        pattern={/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/}
                        change={this.change.bind(this)}
                        tip={"请填写15位一代身份证号或18位二代身份证号，同一个身份证号只能绑定一个海豚汇账号【必填】"}
                        firstEdit={this.props.data.sfz.firstEdit}
                    />
                    <Input
                        st={'100%'}
                        cla={this.props.data.name.state}
                        align={"top"}
                        pla={"姓名"}
                        val={this.props.data.name.value}
                        tip={"姓名需与身份证姓名一致【必填】"}
                        pattern={/\S/}
                        lebal="name"
                        change={this.change.bind(this)}
                        firstEdit={this.props.data.name.firstEdit}
                    />
                    <Input
                        st={'100%'}
                        cla={this.props.data.address.state}
                        align={"top"}
                        pla={"住址"}
                        val={this.props.data.address.value}
                        lebal="address"
                        change={this.change.bind(this)}
                        tip={"住址需与身份证住址一致【选填】"}
                        pattern={/\S/}
                        firstEdit={this.props.data.address.firstEdit}
                    />
                </div>
                <div className={style.upfile}>
                    <Webfile title={"上传身份证照片"} putword={putword1} tipword={tipword1}/>
                </div>


            </div>
        )

    }
    timeOut(){
        this.setState({
            isBlock:true
        },()=>{
            if(this.state.isBlock){
                let t1=setInterval(t11.bind(this) ,1000);
                function t11(){
                    this.setState({
                        showNum:this.state.showNum-1
                    })
                    if(this.state.showNum<=0){
                        this.setState({
                            isBlock:false,
                            showNum:60
                        })
                        clearInterval(t1);
                    }
                }
            }
        });
    }

}

export default Personal;