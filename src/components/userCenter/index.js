import React from 'react';
import style from  "./index.css"

import UserCenterHead from '../userCenterHead'
import TotalNav from '../ib/totalNav'

class UserCenter extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
	}
	render(){

			return(
				<div  className={style.wrap} >
					<div>
						<UserCenterHead/>
					</div>
					<div>
						<TotalNav data={[
                            {
                                icon: "user-o",
                                value: "IB账号",
                                path: '/ib'
                            },
                            {
                                icon: "sign-out",
                                value: "申请出佣",
                                path: '/ib/applyCommission'
                            },
                            {
                                icon: "pencil-square-o",
                                value: "开户链接",
                                path: '/ib/accountLink'
                            },
                            {
                                icon: "list-alt",
                                value: "子代理链接",
                                path: '/ib/childLink'
                            }
                        ]} />
					</div>
				</div>
			)

		}
}
export default UserCenter;