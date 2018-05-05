import { delay } from '../utils'
import api from '../utils/request';
export const login = async () => {
  await delay(2000)
  return true
}

export function test(params,callback) {
    return api('test', {
      params: JSON.stringify(params)
    },callback);
  }
