import React, { Component } from 'react'
import { connect } from 'react-redux'


class Computer extends Component {
    render() {

        let keyframe = `@keyframes randomItem${Date.now()}{
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0px;}
          }`

        return (
            <div className="playGame">
                <style>
                    {keyframe}
                </style>
                <div className="choice" style={{position:'relative',overflow:'hidden'}}>
                    <img style={{
                        transform: 'rotateY(180deg)',
                        left: '0',
                        position: 'absolute',
                        animation: `randomItem${Date.now()} 0.5s`
                    }} className="img-fluid" src={this.props.computer.hinhAnh} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img width="200px" src="./img/game_oan_tu_ti/playerComputer.png" alt="" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.BTOanTuTiReducer.computer
    }
}


export default connect(mapStateToProps)(Computer)