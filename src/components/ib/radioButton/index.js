import React from 'react';
import style from  "./index.css"


class RadioButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
	}
	render(){
		return(
			<div className={style.buttongrounp}>
				{
					this.props.data.map((v,i)=>{
						if(v.checked){
                            return <span className={style.checked}>{v.value}</span>
						}else {
                            return <span>{v.value}</span>
						}
					})
				}
			</div>
		)
	}


}
export default RadioButton;