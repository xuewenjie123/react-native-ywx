import { delay } from '../utils'
import api from '../utils/request';
export function getSuggestDetail(params,callback,callbackFail) {
    return api('suggestion/detail', {
      params: JSON.stringify(params)
    },callback,callbackFail);
  }

  export function getInquiriesDetail(params,callback,callbackFail) {
    return api('inquiries/detail', {
      params: JSON.stringify(params)
    },callback,callbackFail);
  }

  export function getComplaintDetail(params,callback,callbackFail) {
    return api('complaint/detail', {
      params: JSON.stringify(params)
    },callback,callbackFail);
  }
