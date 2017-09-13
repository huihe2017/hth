import React, {Component} from 'react'
import style from './pageTable.css'
import axios from 'axios'

class PageTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
        this.getData = this.getData.bind(this)
    }

    getData() {
        let _this = this
        axios.get('http://feed.betanovo.com:9081/v1/lp/ticks_standard')
            .then(function (response) {
                console.log(response)
                _this.setState({data: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getData()
        this.interval = setInterval(this.getData, 1000)


    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    getDom(data) {
        let dom = []
        for (let s in data) {
            if (s === 'EURUSD' || s === 'GBPUSD'|| s === 'GBPJPY'|| s === 'USDJPY'|| s === 'EURGBP'|| s === 'EURJPY'|| s === 'AUDUSD'|| s === 'USDCHF'|| s === 'USDCAD'|| s === 'NZDUSD') {
                let all = parseFloat(Math.abs(data[s][2] - data[s][1]).toFixed(8)) + parseFloat(data[s][2]) + parseFloat(data[s][1])
                all = all.toFixed(5)
                dom.push(
                    <tr>
                        <td>{s}</td>
                        <td>{Math.abs(data[s][2] - data[s][1]).toFixed(8)}</td>
                        <td>{all}</td>
                        <td>{data[s][2]}</td>
                        <td>{data[s][1]}</td>
                    </tr>
                )
            }
        }
        return dom
    }

    render() {
        return (
            <div className={style.wrap}>
                <div className={style.tit}>外汇即时报价</div>
                <table className={style.table}>
                    <tr>
                        <th>品种</th>
                        <th>点差</th>
                        <th>总量</th>
                        <th>入金率</th>
                        <th>出金率</th>
                    </tr>
                    {
                        this.getDom(this.state.data)
                    }

                </table>
            </div>
        )
    }
}

export default PageTable