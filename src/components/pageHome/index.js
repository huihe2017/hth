import React, {Component} from 'react'
import MT4 from './MT4'
import Partner from './partner'
import Superiority from './superiority'
import PageTable from './pageTable'
import Button from '../button'
import RenderLayer from '../renderLayer'
import Layer from '../layer'
import QRcode from '../QRcode'

import style from './pageHome.css'

class PageHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showTwoDimension: false
        }
    }

    render() {
        return (
            <div>
                <div className={style.bannerWrap}>
                    <div><img className={style.bannerImg} src={require('./banner.jpg')}/></div>
                    <div className={style.PageTableDiv}>
                        <PageTable/>
                    </div>
                    <div className={style.bottom}>
                        <Button onClick={() => {
                            this.setState({showTwoDimension: true})
                        }} itcon={<i className="fa fa-windows"></i>} value="立即开户" large/>
                        {
                            this.state.showTwoDimension ? <RenderLayer><Layer content={<QRcode/>} callback={() => {
                                this.setState({showTwoDimension: false})
                            }} width="320" height="320"/></RenderLayer> : ''
                        }

                    </div>
                </div>
                <Superiority/>
                <MT4/>
                <Partner/>
            </div>
        )
    }
}

export default PageHome