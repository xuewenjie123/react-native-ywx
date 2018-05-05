import api from '../utils/request';

export function getTeamList(params,callback) {
  return api('servicerecord/getTeamList', {
    params: JSON.stringify(params)
  },callback);
}//获取全部小队信息
export function getTeamInfoById(params,callback) {
  return api('servicerecord/getTeamInfoById', {
    params: JSON.stringify(params)
  },callback);
}//获取小队详细信息

export function getTeamPersonList(params,callback) {
  return api('servicerecord/getTeamPersonList', {
    params: JSON.stringify(params)
  },callback);
}//获取小队成员信息

export function getTeamPersonInfo(params,callback) {
  return api('servicerecord/getTeamPersonInfo', {
    params: JSON.stringify(params)
  },callback);
}//获取小队成员信息
export function createServiceContactVo(params,callback) {
  return api('servicerecord/createServiceContactVo', {
    params: JSON.stringify(params)
  },callback);
}//报修单/问询单/意见建议单/投诉单创建
export function getEvaluateList(params,callback) {
  return api('servicerecord/getEvaluateList', {
    params: JSON.stringify(params)
  },callback);
}//全部评价

export function getDicValue(params,callback) {
  return api('com/getDicValue', {
    params: JSON.stringify(params)
  },callback);
}//投诉申请（投诉）

export function complaintConnectList(params,callback,callbackFail) {
  return api('repair/complaintConnectList', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}//投诉申请（投诉）
