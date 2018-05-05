import { AsyncStorage, } from 'react-native';
export function getStorage(str,Fn){
  if(typeof str == "string"){
    if(global["global_"+str]){
      Fn(false,global["global_"+str]);
    }else{
      AsyncStorage.getItem(str,(error,text)=>{
        if(!error){
          var data = JSON.parse(text);
          Fn(false,data);
          global["global_"+str] = data;
        }
      });
    }
  }
}

export function setStorage(str,data,Fn){
  if(typeof str == "string"){
    AsyncStorage.setItem(str,JSON.stringify(data),(error)=>{
      if(!error){
        global["global_"+str] = data;
        Fn(false,data);
      }else{
        Fn(error);
      }
    });
  }
}
export function removeStorage(str,Fn){
  if(typeof str == "string"){
    AsyncStorage.removeItem(str,(error)=>{
      if(!error){
        global["global_"+str] = null;
        Fn(false);
      }else{
        Fn(error);
      }
    });
  }
}
export function getStorageOnly(str,Fn){
  if(typeof str == "string"){
    AsyncStorage.getItem(str,(error,text)=>{
      if(!error){
        var data = JSON.parse(text);
        Fn(false,data);
      }else{
        Fn(error);
      }
    });
  }else{
    Fn("请输入关键字");
  }
}
export function setStorageOnly(str,data,Fn){
  if(typeof str == "string"){
    AsyncStorage.setItem(str,JSON.stringify(data),(error)=>{
      if(!error){
        Fn(false,data);
      }else{
        Fn(error);
      }
    });
  }else{
    Fn("请输入关键字");
  }
}
export function removeStorageOnly(str,Fn){
  if(typeof str == "string"){
    AsyncStorage.removeItem(str,(error)=>{
      if(!error){
        Fn(false);
      }else{
        Fn(error);
      }
    });
  }else{
    Fn("请输入关键字");
  }
}
