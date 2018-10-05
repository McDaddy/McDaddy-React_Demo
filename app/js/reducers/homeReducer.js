/**
 *  homeReducer reducer
 */
import update from 'immutability-helper';
// Import Action Types
import * as types from '../actions/constants';

const investmentList = [{title: '京渤随享盈', rate: '15.50', desc: '历史年化收益率'},
{title: '年年盈', rate: '5.10', desc: '综合年化收益率', feature: '理财推荐'},
{title: '建信养老飞益鑫', rate: '4.72', desc: '近7日年化收益'},
{title: '小白基金', rate: '4.50', desc: '近7日年化收益', feature:'超短期'}];

const initialState = {
  investmentList:[]
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_MENU:
      return update(state, {'investmentList': {$set: investmentList}});
    default:
      return state;
  }
}

export default homeReducer;
