import React from 'react';
import style from  "./index.css";
import Title from "../title/index";
import Webfile from "../webFile/index";
import Input from "../input/index";


class Company extends React.Component{
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
        let putword1=["点击上传营业执照"];
        let tipword1=[
            "1.文件为数码照片，请勿进行美化和修改，以免申请失败",
            "2.上传文件格式支持png，jpg和bmp",
            "3.文件大小不超过3MB，文件尺寸最小为200px*150px"
        ];
        return(
            <div className={style.personal} >
                <Title content={"/公司信息"}/>
                <div className={style.perimport}>
                    <Input st={'100%'} pla={"公司名"} tip={"文案待定"}/>
                    <Input st={'100%'} pla={"公司地址"} tip={"文案待定"}/>
                    <Input st={'100%'} pla={"统一公司信用代码"} tip={"文案待定"}/>

                    <Input st={'100%'} pla={"组织机构代码"} tip={"文案待定"}/>
                    <Input st={'100%'} pla={"法人"} tip={"文案待定"}/>
                </div>
                <div className={style.upfile}>
                    <Webfile title={"上传营业执照照片"} putword={putword1} tipword={tipword1}/>
                </div>


            </div>
        )

    }

}

export default Company;