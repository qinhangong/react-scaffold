import {INCREMENT,DECREMENT,INCREMENTASYNC,DECREMENTASYNC } from '../constants/counter';

export function increment(){
    return{
        type:INCREMENT,
    }
}

export function decrement(){
    return{
        type:DECREMENT,
    }
}
export function incrementAsync(){
    return{
        type:INCREMENTASYNC,
    }
}

export function decrementAsync(){
    return{
        type:DECREMENTASYNC,
    }
}