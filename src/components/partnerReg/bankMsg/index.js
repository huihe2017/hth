import React from 'react';
import style from  "./index.css"
import Title from "../title/index";
import Webfile from "../webFile/index";
import Input from "../input/index";
import Tipdown from "../tipDown/index";
import Selectarea from "../selectArea/index";

class Bankmsg extends React.Component{

    render(){
        let putword1=["点击上传银行卡正面","点击上传银行卡反面"];
        let tipword1=[
            "1.文件为数码照片，请勿进行美化和修改，以免申请失败",
            "2.上传文件格式支持png，jpg和bmp",
            "3.文件大小不超过3MB，文件尺寸最小为200px*150px"
        ];
        let bank1=[
            {
                key:1,
                value:"中国人民银行"
            },
            {
                key:2,
                value:"中国建设银行"
            },
            {
                key:3,
                value:"中国农业银行"
            }
        ];
        return(
            <div className={style.personal} >
                <Title content={"/银行信息【必填】"} color={"#5262ff"}/>
                <div className={style.perimport}>
                    <Input st={'100%'} pla={"结算户名"} tip={"文案待定"}/>
                    <Input st={'100%'} pla={"结算卡号"} tip={"文案待定"}/>
                    <Tipdown show={"请选择银行"} data={bank1} ww={'100%'} tip={"文案待定"}/>
                    <Selectarea widthProv={160} widthCity={160} widthKhh={160} tip={"文案待定"}/>
                </div>
                <Webfile title={"上传银行卡照片"} putword={putword1} tipword={tipword1}/>
            </div>
        )
    }
}

export default Bankmsg;