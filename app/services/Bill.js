import { delay } from '../utils';
import api from '../utils/request';

export function mybill(params, callback, callbackFail) {
  return api('repair/my/bill', {
    params: JSON.stringify(params)
  }, callback, callbackFail);
} //我的账单

export function chargesdetails(params, callback, callbackFail) {
  return api('repair/msf', {
    params: JSON.stringify(params)
  }, callback, callbackFail);
} //费用明细

export function workorderstate(params, callback, callbackFail) {
  return api('repair/msf', {
    params: JSON.stringify(params)
  }, callback, callbackFail);
} //工单状态