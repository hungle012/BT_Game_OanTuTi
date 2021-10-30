const stateDefault = {
    datCuocArr: [
        { ma: 'keo', hinhAnh: './img/game_oan_tu_ti/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/game_oan_tu_ti/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/game_oan_tu_ti/bao.png', datCuoc: false }
    ],
    ketQua: "Bạn thắng rồi :D",
    soTranThang: 0,
    tongSoTran: 0,
    computer: { ma: 'keo', hinhAnh: './img/game_oan_tu_ti/keo.png' },
}


const BTOanTuTiReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'CHON_ITEM': {
            // reset mảng
            let datCuocArrUpdate = [...state.datCuocArr];
            datCuocArrUpdate = datCuocArrUpdate.map((item,index) => {
                if (item.ma === action.maCuoc) {
                    return {...item,datCuoc:true}
                }
                return {...item,datCuoc:false}
            });
            // console.log(datCuocArrUpdate);
            state.datCuocArr = datCuocArrUpdate;
            return {...state}
        }
        case 'PLAY': {
            
            let randomNum = Math.floor(Math.random() * 3);
            let randomItem = state.datCuocArr[randomNum]

            state.computer = randomItem;

            return {...state}
        }
        case 'KET_QUA': {
            state.tongSoTran += 1;

            let player = state.datCuocArr.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Bạn hoà rồi :('
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Bạn thua SML T-T'
                    } else {
                        state.ketQua = 'Bạn thắng rồi :D'
                        state.soTranThang += 1;
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Bạn thắng rồi :D'
                        state.soTranThang += 1;
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Bạn hoà rồi :('
                    } else {
                        state.ketQua = 'Bạn thua SML T-T'
                    }
                    break;
                case 'bao': 
                if (computer.ma === 'keo') {
                    state.ketQua = 'Bạn thua SML T-T'
                } else if (computer.ma === 'bua') {
                    state.ketQua = 'Bạn thắng rồi :D'
                    state.soTranThang += 1;
                } else {
                    state.ketQua = 'Bạn hoà rồi :('
                }
                break;    
                default:
                    state.soTranThang += 1;
                    state.ketQua = 'Bạn thắng rồi :D'
            }

            return {...state}

        }

        default:
            return { ...state }
    }
}

export default BTOanTuTiReducer;