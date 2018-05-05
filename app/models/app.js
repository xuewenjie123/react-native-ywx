import { createAction, NavigationActions } from '../utils'
import * as authService from '../services/auth'
import { login } from '../services/accont';
export default {
  namespace: 'app',
  state: {
    headImg:'',
    isManager:'',
    userName:'',
    Myaddress:"",
    globalshock:true,
    globalSound:true,
    globalMessage:true,
    globalUpdate:true
  },
  reducers: {
    save(state,  {payload} ) {
      console.log(payload)
      return { ...state, ...payload }
    },
    loginStart(state, { payload }) {
      return { ...state, ...payload, fetching: true }
    },
    loginEnd(state, { payload }) {
      return { ...state, ...payload, fetching: false }
    },
  },
  effects: {
    *login({ payload }, { call, put }) {
      const result = yield login(payload);
      if (result) {
        console.log(111);
      }else {
        console.log(result);
        console.log(333);
      }


  //    console.log(payload);
  //    yield put ({type: 'app/save',payload:payload})
      // yield put(createAction('loginStart')())
      // const userInfo = yield call(login, payload)
      // console.log(userInfo);
      // if (login) {
      //   yield put(
      //     NavigationActions.reset({
      //       index: 0,
      //       actions: [NavigationActions.navigate({ routeName: 'Main' })],
      //     })
      //   )
      // }
    //  yield put(createAction('loginEnd')({ login }))
    },
  },
}
