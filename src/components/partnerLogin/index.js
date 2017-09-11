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
				<div className={style.parlogin} >
					<div className={style.content}>
						<Login/>
					</div>
				</div>
			)

		}
}
export default PartnerLogin;