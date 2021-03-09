import {actionCreators } from './actions';
import * as types from './types';

describe('test action', ()=>{
    it('test addCounter action', ()=>{
        const expectedAction ={
            type: types.ADD_COUNTER
        }
        expect(actionCreators.addCounter()).toEqual(expectedAction)
    })
    it('test subCounter action', ()=>{
        const expectedAction ={
            type: types.SUB_COUNTER
        }
        expect(actionCreators.subCounter()).toEqual(expectedAction)
    })
    it('test zeroCounter action', ()=>{
        const expectedAction ={
            type: types.ZERO_COUNTER
        }
        expect(actionCreators.zeroCounter()).toEqual(expectedAction)
    })
})