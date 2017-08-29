import React from 'react';
import style from "./index.css"
import TitValueBox from './titValueBox'
import Input from '../partnerReg/input'
import Title from '../partnerReg/title'


class Ib extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render()
    {
        return (
            <div className={style.wrap}>
                <br/><br/>
                <TitValueBox tit="交易类型" >
                    <div>中国银行</div>
                </TitValueBox>
                <Input pla="输入美元" unit={true} />
                <Input pla="输入MT4ID查询" search={true} />
                <Title color="#000" content="abeswgew" />
                <br/><br/>
            </div>
        )
    }
}

export default Ib;