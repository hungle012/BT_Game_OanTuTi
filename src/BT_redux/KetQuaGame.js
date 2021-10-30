import React, { Component } from 'react'
import { connect } from 'react-redux'


class KetQuaGame extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-danger mb-2">
                    {this.props.ketQua}
                </div>
                <div className="display-4 text-success mb-2">
                    Số trận thắng:
                    <span className="text-warning"> {this.props.soTranThang}</span>
                </div>
                <div className="display-4 text-success mb-2">
                    Tổng số trận chơi:
                    <span className="text-warning"> {this.props.tongSoTran}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.BTOanTuTiReducer.ketQua,
        soTranThang: state.BTOanTuTiReducer.soTranThang,
        tongSoTran: state.BTOanTuTiReducer.tongSoTran
    }
}


export default connect(mapStateToProps)(KetQuaGame)