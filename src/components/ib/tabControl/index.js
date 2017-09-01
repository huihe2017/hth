import React from 'react';
import style from "./index.css";


class TabControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1
        }
    }

    handleClick(i) {
        this.setState({
            index: i
        })
    }

    render() {
        return (
            <div className={style.reportquery}>

                {
                    this.props.data.map((v, i) => {
                        return (
                            <div onClick={this.handleClick.bind(this, v.key)}
                                 className={style.nav + " " + ((this.state.index == v.key) ? style.active : '')}>
                                {v.value}
                            </div>
                        )
                    })
                }

            </div>
        )
    }

    change(e) {
        this.props.changec(e)

    }
}

export default TabControl;