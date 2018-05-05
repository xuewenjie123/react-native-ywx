import api from '../utils/request';
//我的订单
export function orderList(params,callback) {
  return api('order/list', {
    params: JSON.stringify(params)
  },callback);
}//我的订单列表

export function detail(params,callback) {
  return api('order/detail', {
    params: JSON.stringify(params)
  },callback);
}//订单详情

export function evaluate(params,callback) {
  return api('order/evaluate', {
    params: JSON.stringify(params)
  },callback);
}//评价详情

export function deleteOrder(params,callback) {
  return api('order/delete', {
    params: JSON.stringify(params)
  },callback);
}//评价详情
