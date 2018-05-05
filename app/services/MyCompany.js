import api from '../utils/request';
//所在单位接口

export function positionList(params,callback,callbackFail) {
  return api('account/positionList', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}//所在单位列表

export function addUserPosition(params,callback) {
  return api('account/addUserPosition', {
    params: JSON.stringify(params)
  },callback);
}//添加地址

export function getProjectsByCityId(params,callback) {
  return api('account/getProjectsByCityId', {
    params: JSON.stringify(params)
  },callback);
}//所在单位-项目列表

export function getBuildingsByProjectId(params,callback) {
  return api('account/getBuildingsByProjectId', {
    params: JSON.stringify(params)
  },callback);
}//所在单位-建筑列表


export function getRoomsByBuildingId(params,callback) {
  return api('account/getRoomsByBuildingId', {
    params: JSON.stringify(params)
  },callback);
}//所在单位-房屋列表

export function setDefault(params,callback) {
  return api('account/setDefault', {
    params: JSON.stringify(params)
  },callback);
}//设为默认
export function delUserPosition(params,callback) {
  return api('account/delUserPosition', {
    params: JSON.stringify(params)
  },callback);
}//删除地址
