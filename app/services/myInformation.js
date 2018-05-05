import { delay } from '../utils'
import api from '../utils/request';

export function myactivitylist(params,callback,callbackFail) {
  return api('myactivity/list', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

export function myinvestigationlist(params,callback,callbackFail) {
  return api('myinvestigation/list', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}

export function myvotelist(params,callback,callbackFail) {
  return api('myvote/list', {
    params: JSON.stringify(params)
  },callback,callbackFail);
}
