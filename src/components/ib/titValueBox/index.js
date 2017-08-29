import React from 'react';
import style from "./index.css"


class TitValueBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={style.titbox}>
                <span className={style.title}>
                    {this.props.tit+" :"}
                </span>
                <div className={style.titval}>
                    {
                        React.Children.map(this.props.children, function (child) {
                            return <li>{child}</li>;
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TitValueBox;