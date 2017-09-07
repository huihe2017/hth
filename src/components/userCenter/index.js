import React from 'react';
import style from  "./index.css"

import {Route, Switch} from 'react-router-dom'

import UserCenterHead from '../userCenterHead'
import TotalNav from '../ib/totalNav'
import AccountDeposit from '../accountDeposit'
import AccountWithdraw from '../accountWithdraw'
import ModifyPassword from '../modifyPassword'

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
                                value: "账户入金",
                                path: '/userCenter'
                            },
                            {
                                icon: "sign-out",
                                value: "账户出金",
                                path: '/userCenter/accountWithdraw'
                            },
                            {
                                icon: "pencil-square-o",
                                value: "用户资料",
                                path: '/ib/accountLink'
                            },
                            {
                                icon: "list-alt",
                                value: "更改密码",
                                path: '/userCenter/modifyPassword'
                            }
                        ]} />
					</div>
                    <div>
                        <Switch>
                            <Route path="/userCenter/modifyPassword" component={ModifyPassword}/>\
                            <Route path="/userCenter/accountWithdraw" component={AccountWithdraw}/>
                            <Route path="/userCenter" component={AccountDeposit}/>
                        </Switch>
                    </div>
				</div>
			)

		}
}
export default UserCenter;