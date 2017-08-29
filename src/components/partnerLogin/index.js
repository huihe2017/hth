import React from 'react';
import style from  "./index.css"

import Login from '../login'


class PartnerLogin extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
	}
	render(){

			return(
				<div className={style.wrap} >
					<Login/>
				</div>
			)

		}
}
export default PartnerLogin;