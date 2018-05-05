'use strict';
import React, { Component, } from 'react';
import { baseURI,urlSuffix } from '../../constant/url';
import {getStorage} from '../../constant/storage'
import { Alert,Platform,StatusBar,View,PermissionsAndroid,DeviceEventEmitter, Text,Image,TextInput, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import GradientBox from "../../components/common/GradientBox"
import SexModal from '../../components/setting/SexModal'
var _navigator,_this,_state,_props;
import ImagePicker from 'react-native-image-crop-picker';
import Entering from "../../components/applyRepair/Entering";
import Sound from 'react-native-sound';                        // 播放声音组件
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import Picker from 'react-native-picker';
import {createServer} from '../../services/createServer';
import {positionList} from '../../services/MyCompany';
 let audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';
 var date = new Date(),
 year = date.getFullYear(),
 mont = date.getMonth()+1,
 day = date.getDate(),
 hours = date.getHours(),
 minutes = date.getMinutes()>=30?30:0;
 import { NavigationActions,createAction } from '../../utils';
 import { connect } from 'react-redux';
  @connect(({ app }) => ({ ...app }))
export default class ApplyComplaint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complexAddress:"",
      locationId:"",
      projectId:"",
      name:"",
      tel:"",
      sex:1,
      modalVisible:false,
      maxFiles:3,
      images: [],
      imageData:[],
      message:"",
      modalVisible2:false,
      currentTime: 0.0,                                                   //开始录音到现在的持续时间
      recording: false,                                                   //是否正在录音
      stoppedRecording: false,                                            //是否停止了录音
      finished: false,                                                    //是否完成录音
      audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',          //路径下的文件名
      hasPermission: undefined,                                         //是否获取权限
      isplaying:false,//是否正在播放
      appointmentTime:year+"/"+mont+"/"+day+" "+hours+":"+minutes,
      showTime:"",
    }
  }
  componentDidMount () {
    if (_this.props.userName) {
      _this.setState({name:_this.props.userName,tel:_this.props.telephone})
    }
    _this.subScription = DeviceEventEmitter.addListener("changeApplyRepairUI",function(json){
        console.log(json)
        _this.setState({
          complexAddress:json.complexAddress,
          locationId:json.roomId,
          projectId:json.projectId
        })
    })
    _this.subScription2 = DeviceEventEmitter.addListener("ApplyRepairMyRepair",function(json){
        console.log(json)
        _this.setState({
          oddNumbers:json.oddNumbers,
        })
    })
    _this.subScription3 = DeviceEventEmitter.addListener("ApplyRepairType",function(json){
        console.log(json)
        _this.setState({
          valueCode:json.valueCode,
          typeName:json.typeName
        })
    })
    positionList({},_this.projectResult)
    // 页面加载完成后获取权限
    _this.checkPermission().then((hasPermission) => {
      _this.setState({ hasPermission });
      //如果未授权, 则执行下面的代码
      if (!hasPermission) return;
      _this.prepareRecordingPath(_this.state.audioPath);

      AudioRecorder.onProgress = (data) => {
        _this.setState({currentTime: Math.floor(data.currentTime)});
      };

      AudioRecorder.onFinished = (data) => {
        if (Platform.OS === 'ios') {
          _this.finishRecording(data.status === "OK", data.audioFileURL);
        }
      };

    })
  }
  projectResult(result){
    if(result.success&&result.data){
      result.data.map((d,index)=>{
        if (d.isDefault) {
          _this.setState({
              companyList:d,
              complexAddress:d.detailedAddress
          })
        }
      })

    }
  }
  componentWillUnmount(){
    this.subScription.remove();
    this.subScription2.remove();
    this.subScription3.remove();
    this.subScriptAdd&&this.subScriptAdd.remove()
  }
  prepareRecordingPath(audioPath){
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",            //录音质量
      AudioEncoding: "aac",           //录音格式
      AudioEncodingBitRate: 32000     //比特率
    });
  }

  checkPermission() {
    if (Platform.OS !== 'android') {
      return Promise.resolve(true);
    }

    const rationale = {
      'title': '获取录音权限',
      'message': 'XXX正请求获取麦克风权限用于录音,是否准许'
    };

    return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, rationale)
      .then((result) => {
        // alert(result);     //结果: granted ,    PermissionsAndroid.RESULTS.GRANTED 也等于 granted
        return (result === true || PermissionsAndroid.RESULTS.GRANTED)
      })
  }
  isRecord(){
    if (_this.state.hasPermission) {
      _this.setState({modalVisible2:true})
    }
  }
  async record() {
    // 如果正在录音
    if (_this.state.recording) {
      _this.setState({modalVisible2:true})  //弹出正在录音模式
    }

    //  如果没有获取权限
    if (!_this.state.hasPermission) {
      ToastAndroid.show("没有获取录音权限", ToastAndroid.SHORT);
        return false;
    }

    //如果暂停获取停止了录音
    if(_this.state.stoppedRecording){
      _this.prepareRecordingPath(_this.state.audioPath);
    }

    _this.setState({recording: true});

    try {
      const filePath = await AudioRecorder.startRecording();
      console.log("我要打印filePath")
      console.log(filePath)
    } catch (error) {
      console.log("errorerrorerrorerror");
      console.error(error);
    }
  }

  async stop() {
    // 如果没有在录音
    console.log("停止方法");
    if (!_this.state.recording) {
      console.log('没有录音, 无需停止!');
      return;
    }

    _this.setState({stoppedRecording: true, recording: false});

    try {
      const filePath = await AudioRecorder.stopRecording();

      if (Platform.OS === 'android') {
        _this.finishRecording(true, filePath);
      }
      return filePath;
    } catch (error) {
      console.error(error);
    }

  }

  async play() {
      // 如果在录音 , 执行停止按钮
      console.log(2222);
      if(_this.state.isplaying){
         DeviceEventEmitter.emit("stopPlaying")
        return false
      }
      if (_this.state.recording) {
        await _this.stop();
      }
      // 使用 setTimeout 是因为, 为避免发生一些问题 react-native-sound中
      setTimeout(() => {
        var sound = new Sound(_this.state.audioPath, '', (error) => {
          if (error) {
            console.log('failed to load the sound', error);
          }
        });
        setTimeout(() => {
           _this.setState({isplaying:true})
           _this.subScriptAdd = DeviceEventEmitter.addListener("stopPlaying",function(){
            console.log("我出发2了")
            _this.setState({isplaying:false})
            sound.stop()
          })

          sound.play((success) => {
            if (success) {
              _this.setState({isplaying:false})
              console.log('successfully finished playing');
            } else {
              console.log('playback failed due to audio decoding errors');
            }
          });
        }, 100);
      }, 100);

  }

  finishRecording(didSucceed, filePath) {
      _this.setState({ finished: didSucceed });
      console.log(`Finished recording of duration ${_this.state.currentTime} seconds at path: ${filePath}`);
  }

  delrecord(){
    DeviceEventEmitter.emit("stopPlaying")
    _this.setState({
      currentTime:0
    })
  }
  messageChange(text){
    _this.setState({message:text})
  }
  nameChange(text){
    _this.setState({name:text})
  }
  telChange(text){
    _this.setState({tel:text})
  }
  openPicker(){
    ImagePicker.openPicker({
      includeBase64: true,
    }).then(_this.openPickerResult);
  }
  delPicker(d){
    _state.images.splice(d,1)
    _state.imageData.splice(d,1)
    _this.setState({images:_state.images,maxFiles: 3-_state.images.length,imageData:_state.imageData})
  }
  openPickerResult(images){
    var base64 = "data:"+images.mime+";base64," + images.data;
    var name = images.path.split("/")
    let formdata = [{file: base64,fileName: name[name.length-1]}];
    _this.setState({images:_state.images.concat(images),maxFiles: 2-_state.images.length,imageData:_state.imageData.concat(formdata)})
  }

  repairAction(){
    var resultFu = function(response){
       if(response.success){
          _navigator.navigate("ApplySuccess",{router:"ApplyComplaint"})
      }else{
      ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
        return false;
      }
    }
      if(!_this.state.complexAddress){
        ToastAndroid.show('请选择地址', ToastAndroid.SHORT);
        return false;
      }else if(!_this.state.message){
        ToastAndroid.show('请输入你要报修的问题', ToastAndroid.SHORT);
        return false;
      }else if(!_this.state.name){
        ToastAndroid.show('请输入姓名', ToastAndroid.SHORT);
        return false;
      }else if(!_this.state.tel){
          ToastAndroid.show('请输入电话', ToastAndroid.SHORT);
          return false;
      }else if(!_this.state.sex){
          ToastAndroid.show('请选择性别', ToastAndroid.SHORT);
          return false;
      }else{
        createServer({name:_state.name,sex:_state.sex,phone:_state.tel,workOrderVos:[
          {files:_state.imageData,type:_state.valueCode,locationId:_state.locationId,
          projectId:_state.projectId,complexAddress:_state.complexAddress,
          audioPath:_state.audioPath,COST_PROBLEM:1,contact_work_order_code:_state.oddNumbers}
        ]},resultFu)
        }
  }

  render() {
    _this = this;
    _state=this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "投诉",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.goBack()}}>
          <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      rightView: (
        <TouchableOpacity  style={{flex: 1}}
          onPress={() => {}}>
        </TouchableOpacity>
      ),
    }
    let SexModalProps = {
      visible: _this.state.modalVisible,
      sex:_this.state.sex,
      onClose: function(){
        _this.setState({
          modalVisible: false,
        })
      },
      sexAction:function(value){
        console.log(value)
        _this.setState({
          modalVisible: false,
          sex:value
        })
      }
    };
    let EnteringProps = {
      visible: _this.state.modalVisible2,
      speaking:false,
      currentTime:_state.currentTime,
      onClose: function(){
        _this.setState({
          modalVisible2: false,
          stoppedRecording:true
        })

        _this.stop()
      },
      record:function(){
          _this.record()
          setTimeout(()=>{
            _this.stop()
          },60000)
      }

    };

    return (
      <View style={styles.main}>
        <ScrollView>
          <NavigatorTopBar {...NavigatorTopBarProps}/>
          <TouchableOpacity style={styles.up} onPress={()=>_navigator.navigate('SelectPlace')}>
            <View style={styles.up_a}>
                <Image style={{width: 12, height: 12,marginRight:10}} source={require('../../images/inquiries_a.png')}></Image>
                <Text numberOfLines={1} style={[styles.up_font,{width:width-80}]}>{_state.complexAddress}</Text>
            </View>
                <Image style={{width: 15, height: 15,}} source={require('../../images/icon_b.png')}></Image>
          </TouchableOpacity>
          <View style={styles.info}>
            <TouchableOpacity style={styles.time} onPress={()=>{_navigator.navigate("ApplyRepairMyRepair")}}>
                <Text  style={{fontSize:30*width/750,color:'#303030',}}>关联工单号：{_state.oddNumbers}</Text>
                <Image style={{height:10,width:10,marginLeft:10}} source={require('../../images/icon_b.png')}></Image>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.time} onPress={()=>{_navigator.navigate("ApplyComplaintType")}}>
                <Text  style={{fontSize:30*width/750,color:'#303030',}}>投诉类型：{_state.typeName}</Text>
                <Image style={{height:10,width:10,marginLeft:10}} source={require('../../images/icon_b.png')}></Image>
            </TouchableOpacity>
        </View>
          <View style={styles.middle}>
              <TextInput maxLength={140} multiline={true} underlineColorAndroid="transparent"  style={styles.middle_font}
              onChangeText={(text)=> _this.messageChange(text)} value={_this.state.message}
               placeholder="请描述您要投诉的问题..." placeholderTextColor='#dddddd'/>
               <TouchableOpacity style={styles.middle_img} onPress={()=>_this.isRecord()}>
                    <Image style={{height:17,width:17}} source={require('../../images/apply_a.png')}></Image>
               </TouchableOpacity>
          </View>
          {_this.state.currentTime>0?
            <View style={styles.voice}>
                <Image style={{height:10,width:7}} source={require('../../images/apply_e.png')}></Image>
                <TouchableOpacity style={[styles.voice_a,{width:60+1.5*_this.state.currentTime}]} onPress={()=>{_this.play()}}>
                {_state.isplaying?
                  <Image style={{height:12,width:12,marginLeft:5}} source={require('../../images/record.gif')}></Image>
                  :
                  <Image style={{height:17,width:17}} source={require('../../images/apply_d.png')}></Image>
                }
                </TouchableOpacity>
                <Text  style={{fontSize:12,color:'#999999'}}>{_this.state.currentTime}''</Text>
                <TouchableOpacity style={{height:12,width:50}} onPress={()=>{_this.delrecord()}}>
                    <Image style={{height:12,width:12,marginLeft:5}} source={require('../../images/apply_c.png')}></Image>
                </TouchableOpacity>
            </View>
            :null
          }
          <View style={styles.photo}>
              {_state.images?_state.images.map((d,index)=>(
                <TouchableOpacity key={index} onPress={()=>_this.delPicker(index)}>
                  <Image style={{height:70,width:70,marginRight:10}} source={{uri:d.path}}/>
                </TouchableOpacity>
                )):null}

              {_state.maxFiles>0?(
                <TouchableOpacity style={styles.add} onPress={()=>_this.openPicker()}>
                  <Image style={{height:17,width:17,marginBottom:10}} source={require('../../images/apply_f.png')}></Image>
                  <Text  style={{fontSize:12,color:'#999999'}}>添加照片</Text>
                </TouchableOpacity>):null}
          </View>
          <View style={styles.cue}>
              <Text  style={{fontSize:12,color:'#999999',lineHeight:15}}>提示：请上传您的问题照片，最多添加3张照片</Text>
              <Text  style={{fontSize:12,color:'#999999',lineHeight:15}}>大小不超过xxM</Text>
          </View>
          <View style={styles.info}>
              <View style={styles.time}>
                 <Text  style={{fontSize:15,color:'#999999',}}>联系方式</Text>
              </View>
              <View style={styles.line}></View>
              <View style={styles.time}>
                  <Text  style={{fontSize:15,color:'#303030',}}>姓名</Text>
                  <View style={styles.right}>
                  <TextInput maxLength={10} underlineColorAndroid="transparent"  style={styles.name_font}
                  onChangeText={(text)=> _this.nameChange(text)} value={_this.state.name}/>
                  <Image style={{height:10,width:10,marginLeft:10}} source={require('../../images/icon_b.png')}></Image>
                  </View>
              </View>
              <View style={styles.line}></View>
              <View style={styles.time}>
                <Text style={styles.header_font}>性别</Text>

                <TouchableOpacity style={styles.middle_b} onPress={()=>{_this.setState({modalVisible: true})}}>
                    <Text style={{fontSize:14,marginRight:5}}>{_state.sex==1?"男":"女"}</Text>
                    <Image source={require('../../images/icon_b.png')} style={styles.icon_a} />
                </TouchableOpacity>
             </View>
              <View style={styles.line}></View>
              <View style={styles.time}>
                  <Text  style={{fontSize:15,color:'#303030',}}>联系电话</Text>
                  <View style={styles.right}>
                  <TextInput maxLength={11} keyboardType={"numeric"} underlineColorAndroid="transparent"  style={styles.name_font}
                  onChangeText={(text)=> _this.telChange(text)} value={_this.state.tel}/>
                  <Image style={{height:10,width:10,marginLeft:10}} source={require('../../images/icon_b.png')}/>
                  </View>
              </View>
              <View style={styles.line}></View>
              <View style={styles.time}>
                  <Text  style={{fontSize:12,color:'#999999',}}>请留下您的有效联系方式，方便我们上门为您服务</Text>
              </View>
              <TouchableOpacity onPress={()=>{_this.repairAction()}}>
              <GradientBox title={"提交"} styles={styles.button}/>
              </TouchableOpacity>
          </View>

          </ScrollView>
          <SexModal {...SexModalProps}/>
          <Entering {...EnteringProps}/>
      </View>
    );
  }

};
