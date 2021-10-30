import React, { Component } from 'react'
import { connect } from 'react-redux'



class Player extends Component {
    render() {
        // console.log(this.props.datCuocArr);
        return (
            <div className="playGame">
                <div className="choice">
                    <img className="img-fluid" src={this.props.datCuocArr.find((item) => item.datCuoc === true).hinhAnh} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img width="200px" src="./img/game_oan_tu_ti/player.png" alt="" />

                <div className="row">
                    {this.props.datCuocArr.map((item, index) => {
                        // xét giá trị
                        let border = {};
                        if (item.datCuoc) {
                            border = { border: '3px solid red' }
                        }

                        return <div className="col-4" key={index}>
                            <button onClick={() => {
                                const action = {
                                    type: 'CHON_ITEM',
                                    maCuoc: item.ma
                                }
                                this.props.dispatch(action)
                            }} style={border} className="btnItem">
                                <img className="img-fluid" src={item.hinhAnh} alt="" />
                            </button>
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        datCuocArr: state.BTOanTuTiReducer.datCuocArr
    }
}


export default connect(mapStateToProps)(Player)