import { delay } from '../utils'
import api from '../utils/request';

export function getRepairList(params,callback,callbackFail) {
    return api('repair/my/list', {
      params: JSON.stringify(params)
    },callback,callbackFail);
  }

  export function getsuggestionList(params,callback,callbackFail) {
    return api('suggestion/my/list', {
      params: JSON.stringify(params)
    },callback,callbackFail);
  }

  export function getinquiriesList(params,callback,callbackFail) {
    return api('inquiries/my/list', {
      params: JSON.stringify(params)
    },callback,callbackFail);
  }

  export function getcomplaintList(params,callback,callbackFail) {
    return api('complaint/my/list', {
      params: JSON.stringify(params)
    },callback,callbackFail);
  }
