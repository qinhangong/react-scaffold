import { INCREMENT,DECREMENT} from '../constants/counter';
import { delay } from 'redux-saga';
import { put, call,takeEvery } from 'redux-saga/effects';

function* incrementAsync() {
    yield call(delay, 1000);
    yield put({ type: INCREMENT });
}

function* decrementAsync() {
    yield call(delay, 1000);
    yield put({ type: DECREMENT });
}


export  function* watchIncrementAsync() {
    yield takeEvery('INCREMENTASYNC', incrementAsync);
    yield takeEvery('DECREMENTASYNC', decrementAsync);
}