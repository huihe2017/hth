import React from 'react';
import style from  "./index.css";
import Title from "../title/index";
import Webfile from "../webFile/index";
import Input from "../input/index";
import Selphone from "../selPhone/index"


class Personal extends React.Component{
    render(){
        let data1=[{
            value:["中国大陆","+86"],
            key:1
        }, {
            value:["中国香港","+886"],
            key:2,
            checked:true
        }, {
            value:["中国台湾","+853"],
            key:3,

        }];
        let putword1=["点击上传人像面","点击上传国徽面"];
        let tipword1=[
            "1.文件为数码照片，请勿进行美化和修改，以免申请失败",
            "2.上传文件格式支持png，jpg和bmp",
            "3.文件大小不超过3MB，文件尺寸最小为200px*150px"
        ];
        return(
            <div className={style.personal} >
                <Title content={"/联络人信息"} color={"#5262ff"}/>
                <div className={style.perimport}>
                    <Input st={'100%'} pla={"邮箱"} tip={"联络人姓名需与身份证姓名一致"}/>
                    <Input st={'100%'} pla={"账号名"} tip={"文案待定"}/>
                    <Input st={'100%'} pla={"联络人"} tip={"联络人姓名需与身份证姓名一致"}/>
                    <Selphone/>
                    <Input st={'100%'} pla={"身份证号"} tip={"请填写15位一代身份证号或18位二代身份证号，同一个身份证号只能绑定一个海豚汇账号"}/>
                </div>
                <div className={style.upfile}>
                    <Webfile title={"上传身份证照片"} putword={putword1} tipword={tipword1}/>
                </div>


            </div>
        )

    }

}

export default Personal;