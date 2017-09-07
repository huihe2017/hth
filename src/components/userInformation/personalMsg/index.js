import React from 'react';
import style from "./index.css";
import Title from "../title/index";
import Webfile from "../webFile/index";
import Input from "../input/index";


class Personal extends React.Component {
    change(vaildMsg, name) {
        this.props.change(vaildMsg, 'personalMsg', name)
    }


    render() {

        let putword1 = ["点击上传人像面", "点击上传国徽面"];
        let tipword1 = [
            "1.文件为数码照片，请勿进行美化和修改，以免申请失败",
            "2.上传文件格式支持png，jpg和bmp",
            "3.文件大小不超过3MB，文件尺寸最小为200px*150px"
        ];


        console.log(this.props.data.email.state)
        return (
            <div className={style.personal}>
                <Title content={"/联络人信息【必填】"} color={"#5262ff"}/>
                <div className={style.perimport}>
                    <Input
                        st={'100%'}
                        lebal="nickname"
                        cla={this.props.data.nickname.state}
                        align={"top"}
                        pattern={/\S/}
                        pla={"ID昵称"}
                        tip={"ID昵称，限制8个中文字符，其他字符限制12个"}
                        val={this.props.data.nickname.value}
                        change={this.change.bind(this)}
                        firstEdit={this.props.data.nickname.firstEdit}
                    />
                    <Input
                        change={this.change.bind(this)}
                        pattern={/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/}
                        lebal="email"
                        st={'100%'}
                        cla={this.props.data.email.state}
                        align={"top"}
                        pla={"邮箱"}
                        val={this.props.data.email.value}
                        tip={"请输入正确格式邮箱信息"}
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
                        tip={"请填写15位一代身份证号或18位二代身份证号，同一个身份证号只能绑定一个海豚汇账号"}
                        firstEdit={this.props.data.sfz.firstEdit}
                    />
                    <Input
                        st={'100%'}
                        cla={this.props.data.name.state}
                        align={"top"}
                        pla={"姓名"}
                        val={this.props.data.name.value}
                        tip={"姓名需与身份证姓名一致"}
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
                        tip={"住址需与身份证住址一致"}
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

}

export default Personal;