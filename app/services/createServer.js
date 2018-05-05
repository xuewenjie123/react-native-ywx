import { delay } from '../utils'
import api from '../utils/request';

export function createServer(params,callback,callbackFail) {
    return api('servicerecord/createServiceContactVo', {
      params: params
    },callback,callbackFail);
  }
