import api from '../utils/request';
//我的积分
export function integralList(params,callback) {
  return api('integral/total', {
    params: JSON.stringify(params)
  },callback);
}//我的积分列表

export function detail(params,callback,callbackFail) {
  return api('integral/detail', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}//积分详情
