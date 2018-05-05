import { delay } from '../utils'
import api from '../utils/request';

//接口OK
export function myvotelist(params,callback,callbackFail) {
  return api('vote/myVote', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

//接口OK
export function votelist(params,callback,callbackFail) {
  return api('vote/selectListByParamPage', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

//接口OK
export function votedetail(params,callback,callbackFail) {
  return api('vote/selectInfoById', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

//接口OK
export function voteresult(params,callback,callbackFail) {
  return api('vote/selectVoteResult', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

//接口OK
export function sendvote(params,callback,callbackFail) {
  return api('vote/doVote', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

//接口OK
export function activitylist(params,callback,callbackFail) {
  return api('activity/selectListByParamPage', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

//接口OK
export function activitydetail(params,callback,callbackFail) {
  return api('activity/selectInfoById', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

//接口OK
export function questionnairelist(params,callback,callbackFail) {
  return api('survey/selectListByParamPage', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

//接口OK
export function questionnairedetail(params,callback,callbackFail) {
  return api('survey/selectInfoById', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

//接口OK
export function questionnaireresult(params,callback,callbackFail) {
  return api('survey/selectSurveyResult', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}
//接口OK
export function sendquestion(params,callback,callbackFail) {
  return api('survey/doSurvey', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

//接口OK
export function mysurvey(params,callback,callbackFail) {
  return api('survey/mySurvey', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

export function integralmall(params,callback,callbackFail) {
  return api('integralmall/list', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

export function commoditydetail(params,callback,callbackFail) {
  return api('integralmall/detail', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

export function exchangeconfirmation(params,callback,callbackFail) {
  return api('integralmall/exchange', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

export function paysuccess(params,callback,callbackFail) {
  return api('integralmall/paysuccess', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

export function messages(params,callback,callbackFail) {
  return api('message/message', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

export function notices(params,callback,callbackFail) {
  return api('message/notice', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

export function noticedetail(params,callback,callbackFail) {
  return api('message/detail', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

export function repaircostlist(params,callback,callbackFail) {
  return api('settle/selectListByParamPage', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

export function repaircostlistdetail(params,callback,callbackFail) {
  return api('settle/selectInfoById', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

export function sendsuccess(params,callback,callbackFail) {
  return api('shixiang/sendsuccess', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

export function workorderdetail(params,callback,callbackFail) {
  return api('repair/my/detail', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

export function workorderstate(params,callback,callbackFail) {
  return api('workorder/state', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}
