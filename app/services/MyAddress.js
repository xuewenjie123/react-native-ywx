import api from '../utils/request';
//我的地址接口

export function queryAddressList(params,callback,callbackFail) {
  return api('address/list', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}//地址列表

export function addUserAddress(params,callback) {
  return api('address/addUserAddress', {
    params: JSON.stringify(params)
  },callback);
}//添加地址

export function getAddressById(params,callback) {
  return api('address/getAddressById', {
    params: JSON.stringify(params)
  },callback);
}//通过ID查询地址

export function updateAddress(params,callback) {
  return api('address/updateAddress', {
    params: JSON.stringify(params)
  },callback);
}//修改地址


export function setDefault(params,callback) {
  return api('address/setDefault', {
    params: JSON.stringify(params)
  },callback);
}//地址设为默认

export function delAddress(params,callback) {
  return api('address/delAddress', {
    params: JSON.stringify(params)
  },callback);
}//删除地址
