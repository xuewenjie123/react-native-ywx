import api from '../utils/request';

export function login(params,callback,callbackFail) {
  return api('account/login', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}//密码登录

export function smslogin(params,callback) {
  return api('account/smslogin', {
    params: JSON.stringify(params)
  },callback);
}//验证码登录

export function validateMobileSendCode(params,callback) {
  return api('account/validateMobileSendCode', {
    params: JSON.stringify(params)
  },callback);
}//发送验证码（登录）  //忘记密码验证码

export function sendRegCode(params,callback) {
  return api('account/sendRegCode', {
    params: JSON.stringify(params)
  },callback);
}//发送验证码（注册）


export function register(params,callback) {
  return api('account/register', {
    params: JSON.stringify(params)
  },callback);
}//注册

export function resetPassword(params,callback) {
  return api('account/resetPassword', {
    params: JSON.stringify(params)
  },callback);
}//忘记密码

export function updatePassword(params,callback) {
  return api('account/updatePassword', {
    params: JSON.stringify(params)
  },callback);
}//修改密码

export function changeTelephone(params,callback) {
  return api('account/changeTelephone', {
    params: JSON.stringify(params)
  },callback);
}//更改手机号

export function queryTelephone(params,callback) {
  return api('account/queryTelephone', {
    params: JSON.stringify(params)
  },callback);
}//查询当前手机号

export function sendChangeCode(params,callback) {
  return api('account/sendChangeCode', {
    params: JSON.stringify(params)
  },callback);
}//更换手机发送验证码
export function validateCode(params,callback) {
  return api('account/validateCode', {
    params: JSON.stringify(params)
  },callback);
}//验证验证码

export function myInfo(params,callback) {
  return api('account/myInfo', {
    params: JSON.stringify(params)
  },callback);
}//查询我的信息
export function updateInfo(params,callback) {
  return api('account/updateInfo', {
    params: JSON.stringify(params)
  },callback);
}//修改信息
export function uploadAvatar(params,callback) {
  return api('account/uploadAvatar', {
    params: JSON.stringify(params)
  },callback);
}//上传头像
