import React from 'react';
import style from "./index.css"
import {Link} from 'react-router'

class TotalNav extends React.Component {

    render() {

        return (
            <div className={style.wrap}>
                <ul>
                    {this.props.data.map((v) => {//alert(v.path)
                        return (
                            <Link to={v.path} >
                                <li className={style.nav + " " + (( v.checked) ? style.active : '')}>
                                    <span className={"fa fa-" + v.icon}></span>
                                    {v.value}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        )

    }
}

export default TotalNav;