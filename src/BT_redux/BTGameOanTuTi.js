import React, { Component } from 'react'
import './BTGameOanTuTi.css'
import Computer from './Computer'
import KetQuaGame from './KetQuaGame'
import Player from './Player'
import { connect } from 'react-redux'


class BTGameOanTuTi extends Component {
    render() {
        return (
            <div className="container-fluid bg-game">
                <div className="row pt-3">
                    <div className="col-3">
                        <Player />
                    </div>
                    <div className="col-6">
                        <KetQuaGame />
                        <button onClick={() => {

                            let count = 0;
                            let ranDomComItem = setInterval(() => {
                                const action = {
                                    type: 'PLAY'
                                }
                                count++;
                                this.props.dispatch(action);
                                if (count >= 10) {
                                    clearInterval(ranDomComItem);
                                    const action = {
                                        type: 'KET_QUA',

                                    }
                                    this.props.dispatch(action);
                                    
                                }
                            }, 100)

                        }} className="btn btn-success mt-4">Play</button>
                    </div>
                    <div className="col-3">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(BTGameOanTuTi)