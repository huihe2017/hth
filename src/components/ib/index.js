import React from 'react';
import style from "./index.css"
import TitValueBox from './titValueBox'
import Input from '../partnerReg/input'
import Title from '../partnerReg/title'
import RadioButton from './radioButton'
import ApplyCommission from "./applyCommission"

class Ib extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.wrap}>
                <ApplyCommission/>
                {/*<br/><br/>*/}
                {/*<TitValueBox tit="交易类型">*/}
                    {/*<div>中国银行</div>*/}
                {/*</TitValueBox>*/}
                {/*<Input pla="输入美元" unit={true}/>*/}
                {/*<Input pla="输入MT4ID查询" search={true}/>*/}
                {/*<Input pwa={true} />*/}
                {/*<Title color="#000" content="abeswgew"/>*/}
                {/*<RadioButton data={[{key: 1, value: '人民币', checked: true}, {key: 2, value: '美国'}]}/>*/}
                {/*<br/><br/>*/}
            </div>
        )
    }
}

export default Ib;