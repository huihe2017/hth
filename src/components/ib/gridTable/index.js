import React from 'react';
import style from  "./index.css"


class GridTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
	}
	render(){
        let wid={
            width:960/this.props.tit.length
        };
		return(
			<div className={style.gridtable} >
                <table >
                    <thead>
                        <tr>
                            {
                                this.props.tit.map((v)=>{
                                    return <td style={wid}>{v}</td>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                            {
                                this.props.data.map((v,i)=>{
                                    return this.foreach(v)

                                })
                            }
                    </tbody>
                </table>
			</div>
		)
	}
	foreach(e){
        let dom = [];
	    for(let i in e){
            dom.push(<td>{e[i]}</td>)
        }
        return <tr>{dom}</tr>
    }

}
export default GridTable;