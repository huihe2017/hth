import React from 'react';
import style from "./index.css"


class TotalNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }
    handleClick(i) {
        this.setState({
            index: i
        })
    }
    render() {
        console.log(this.state.index)
        return (
            <div className={style.totalnav}>
                <ul>
                    {this.props.data.map((v)=>{
                        return <li onClick={this.handleClick.bind(this,v.key)} className={style.nav+" "+((this.state.index == v.key)?style.active:'')}>
                            <span className={"fa fa-"+v.icon}></span>
                            {v.value}
                        </li>
                    })}
                </ul>
            </div>
        )

    }
}

export default TotalNav;