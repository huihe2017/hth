import React from 'react'
import style from "./index.css"
import PersonalMsg from './personalMsg'


class PartnerReg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div>
                <br/><br/>
                <PersonalMsg/>
                <br/><br/>
            </div>
        )

    }

}

export default PartnerReg