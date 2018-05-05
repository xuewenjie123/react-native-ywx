'use strict';
import React, { Component, } from 'react';
import { Platform,StatusBar,View,Picker,PermissionsAndroid, Text,Image,TextInput, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import Dimensions from 'Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import GradientBox from "../../components/common/GradientBox";
import AccessMicrophone from "../../components/applyRepair/AccessMicrophone";
import Entering from "../../components/applyRepair/Entering";
var { width, height } = Dimensions.get('window');
import Sound from 'react-native-sound';                        // 播放声音组件
import {AudioRecorder, AudioUtils} from 'react-native-audio';
 let audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';
// 目录/data/user/0/com.opms_rn/files/test.aac

var _navigator,_this,_state,_props;


export default class ApplyText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:"关宏宇",
      tel:"12345678909",
      sex:"男",
      modalVisible:false,
      modalVisible2:false,
      currentTime: 0.0,                                                   //开始录音到现在的持续时间
      recording: false,                                                   //是否正在录音
      stoppedRecording: false,                                            //是否停止了录音
      finished: false,                                                    //是否完成录音
      audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',          //路径下的文件名
      hasPermission: undefined,                                           //是否获取权限

    }
    // this.prepareRecordingPath = this.prepareRecordingPath.bind(this);     //执行录音的方法
    // this.checkPermission = this.checkPermission.bind(this);               //检测是否授权
    // this.record = this.record.bind(this);                                 //录音
    // this.stop = this.stop.bind(this);                                     //停止
    // this.play = this.play.bind(this);                                     //播放
    // this.pause = this.pause.bind(this);                                   //暂停
    // this.finishRecording = this.finishRecording.bind(this);

  }
  prepareRecordingPath(audioPath){
    console.log(1111);
    console.log(audioPath);
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
    } catch (error) {
      console.log("errorerrorerrorerror");
      console.error(error);
    }
  }

  async stop() {
    // 如果没有在录音
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
        sound.play((success) => {
          if (success) {
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

  componentDidMount () {

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
    // console.log(_this.props.navigator)
    // console.log(audioPath)
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
  delrecord(){
    _this.setState({currentTime:0.0})
  }

  render() {
    _this = this;
    _state = this.state;
    _navigator = _this.props.navigator;
    let NavigatorTopBarProps = {
      visible: true,
      title: "测试",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.pop()}}>
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
    };
    let AccessMicrophoneProps = {
      visible: _this.state.modalVisible,
      onClose: function(){
        _this.setState({
          modalVisible: false,
          hasPermission:false,
        })
      },
      onOKPermission:function(){
          _this.setState({hasPermission:true,modalVisible:false})
          _this.record()
      }

    };
    let EnteringProps = {
      visible: _this.state.modalVisible2,
      speaking:false,
      onClose: function(){
        _this.setState({
          modalVisible2: false,
          stoppedRecording:true
        })
        _this.stop()
      },
      record:function(){
          _this.record()
      }

    };

    return (
      <View style={styles.main}>
        <ScrollView>
          <NavigatorTopBar {...NavigatorTopBarProps}/>
          <View style={styles.up}>
            <View style={styles.up_a}>
                <Image style={{width: 12, height: 12,marginRight:10}} source={require('../../images/inquiries_a.png')}></Image>
                <Text numberOfLines={1} style={[styles.up_font,{width:width-80}]}>风景小区5号楼2202</Text>
            </View>
                <Image style={{width: 15, height: 15,}} source={require('../../images/icon_b.png')}></Image>
          </View>
          <View style={styles.middle}>
              <TextInput maxLength={140} multiline={true} underlineColorAndroid="transparent"  style={styles.middle_font}
              onChangeText={(text)=> _this.messageChange(text)} value={_this.state.message}
               placeholder="请描述您要问询的问题..." placeholderTextColor='#dddddd'/>
               <TouchableOpacity style={styles.middle_img} onPress={()=>_this.isRecord()}>
                    <Image style={{height:17,width:17}} source={require('../../images/apply_a.png')}></Image>
               </TouchableOpacity>
          </View>
          {_this.state.currentTime>0?
            <View style={styles.voice}>
                <Image style={{height:10,width:7}} source={require('../../images/apply_e.png')}></Image>
                <TouchableOpacity style={[styles.voice_a,{width:60+1.5*_this.state.currentTime}]} onPress={()=>{_this.play()}}>

                  <Image style={{height:17,width:17}} source={require('../../images/apply_d.png')}></Image>
                </TouchableOpacity>
                <Text  style={{fontSize:12,color:'#999999'}}>{_this.state.currentTime}''</Text>
                <TouchableOpacity style={{height:12,width:50}} onPress={()=>{_this.delrecord()}}>
                    <Image style={{height:12,width:12,marginLeft:5}} source={require('../../images/apply_c.png')}></Image>
                </TouchableOpacity>
            </View>
            :null
          }

          <View style={styles.photo}>
              <TouchableOpacity style={styles.add} onPress={()=>{_this.record()}}>
                  <Image style={{height:17,width:17,marginBottom:10}} source={require('../../images/apply_f.png')}></Image>
                  <Text  style={{fontSize:12,color:'#999999'}}>开始录音</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.add} >
                  <Image style={{height:17,width:17,marginBottom:10}} source={require('../../images/apply_f.png')}></Image>
                  <Text  style={{fontSize:12,color:'#999999'}}>暂停录音</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.add} onPress={()=>{_this.stop()}}>
                  <Image style={{height:17,width:17,marginBottom:10}} source={require('../../images/apply_f.png')}></Image>
                  <Text  style={{fontSize:12,color:'#999999'}}>结束录音</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.add} onPress={()=>{_this.play()}}>
                  <Image style={{height:17,width:17,marginBottom:10}} source={require('../../images/apply_f.png')}></Image>
                  <Text  style={{fontSize:12,color:'#999999'}}>播放录音</Text>
              </TouchableOpacity>
          </View>
          </ScrollView>
          <AccessMicrophone {...AccessMicrophoneProps}/>
          <Entering {...EnteringProps}/>
      </View>
    );
  }

};
