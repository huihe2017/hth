import React from 'react';
import style from "./index.css"


class TitValueBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.wrap}></div>
        )
    }
}

export default TitValueBox;