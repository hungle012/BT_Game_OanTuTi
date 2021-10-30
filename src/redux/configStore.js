import { combineReducers, createStore } from "redux";
import BTOanTuTiReducer from './BTOanTuTiReducer'
// reducer: Khai báo state, gán lại giá trị cho state và render lại UI 
const rootReducer = combineReducers({
    // Chứa các reducer
    // Chứa cá state của ứng dụng
    BTOanTuTiReducer
});

export const store = createStore(rootReducer);