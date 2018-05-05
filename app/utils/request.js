import { baseURI,urlSuffix } from '../constant/url';
import { NetInfo } from 'react-native';
import {getStorage} from '../constant/storage'
const api = (path,  {params} , callback,callbackFail) => {
    return getStorage("login",function(error,data){
        var options = {};
        options.headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "code":"PART1"
        }
        if(data){
          options.headers.userId = data.userId;
          options.headers.partAcode = data.partAcode;
        }
        options.method = "POST";
        options.body = params;
        console.log(params)
        var methodsFunc=function(){
          fetch(baseURI + path+urlSuffix,options)
            .then((response) => {console.log(response);return response.json()})
            .then((response) => {
              console.log(response);
              callback(response)
            })
            .catch((error) => {
              console.log(error)
              callbackFail&&callbackFail()
            });
        }
          return methodsFunc()
    })
}

export default api;
