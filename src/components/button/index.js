import React, {Component} from 'react'
import style from './button.css'

class Button extends Component {


    render() {
        let buttonStyle;
        if (this.props.solid) {
            buttonStyle = {
                border: '1px solid #fff',
                background: 'rgba(255,0,255,0)'

            }
        }
        if (this.props.large) {
            buttonStyle = {
                ...buttonStyle,
                width: 200,
                height: 60,
                lineHeight: '60px'
            }
            if (this.props.icon) {
                buttonStyle = {
                    ...buttonStyle,
                    paddingLeft: 60

                }
            }
        }

        return (
            <a onClick={this.props.onClick} style={buttonStyle}
               className={style.button}>
                {this.props.icon}
                {this.props.value}
            </a>
        )
    }
}

export default Button