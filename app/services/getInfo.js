import { delay } from '../utils'
import api from '../utils/request';

export function getTeamList(params,callback,callbackFail) {
    return api('servicerecord/getTeamList', {
      params: JSON.stringify(params)
    },callback,callbackFail);
  }
export function getPersonList(params,callback,callbackFail) {
    return api('servicerecord/getTeamPersonList', {
        params: JSON.stringify(params)
    },callback,callbackFail);
}