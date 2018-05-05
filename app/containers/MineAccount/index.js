'use strict';
import React, { Component, } from 'react';
import { View,StatusBar, Text,Image,TextInput, ScrollView, Picker,TouchableOpacity,ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import ImagePicker from 'react-native-image-crop-picker';
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import SexModal from './../../components/setting/SexModal';
import LinearGradient from 'react-native-linear-gradient';
import { myInfo,updateInfo, uploadAvatar} from '../../services/accont';
var _navigator,_this,_state,_props;
import { NavigationActions,createAction } from '../../utils';
import { connect } from 'react-redux';
@connect(({ app }) => ({ ...app }))
export default class MineAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      realName:"",
      telephone:"",
      sex:"",
      filePath:"",
      modalVisible:false,
      imgurl:undefined,
      fid:undefined
    }
  }
  componentDidMount(){
     myInfo({},_this.myInfoResult);
  }
  myInfoResult(response){
    if(response.success){
        _this.setState({userId:response.data.id,
                        telephone:response.data.telephone,
                        realName:response.data.realName,
                        sex:response.data.sex,
                        imgurl:response.data.filePath})
    }else {
        ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
        return false;
    }
  }
  updateImgFu(response){
    if(response.success){
      console.log(response.data.url);
      _this.setState({
        imgurl:response.data.url,
        fid: response.data.fid
      });
    }else{
      ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
    }
  }
  openMycamera(){
    ImagePicker.openPicker({
      width:300,
      height:300,
      cropping: true,
      includeBase64: true,
    }).then(images => {
      console.log(images)
      var base64 = "data:"+images.mime+";base64," + images.data;
      var name = images.path.split("/")
      let formdata = {imgurl: base64,fileName: name[name.length-1],userId: _this.state.userId};
      uploadAvatar(formdata,(e)=>_this.updateImgFu(e,base64));
    });
  }
  keepBack(){
          var resultFu = function(response){
             if(response.success){
               _this.props.dispatch(createAction('app/save')({'headImg': _state.imgurl,
                                                               'isManager':_this.props.isManager,
                                                               'userName':_this.state.realName,
                                                                'telephone':_this.state.telephone}))
                _this.backRouter()
            }else{
            ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
              return false;
            }
          }
          if(!_this.state.realName){
                ToastAndroid.show('请输入真实姓名', ToastAndroid.SHORT);
                return false;
               }
              else if(!_this.state.sex){
                ToastAndroid.show('请选择性别', ToastAndroid.SHORT);
                return false;
              }
              else{
                updateInfo({realName: _this.state.realName, sex: _this.state.sex,avatarFileId:_this.state.fid},resultFu);
              }
  }
  selectSex(index,value){
    _this.setState({sex:Number(index)+1})
  }
  backRouter(){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
          NavigationActions.navigate({routeName: 'Mine'}),
      ]
    })
    _navigator.dispatch(resetAction)
  }
  render() {
    _this = this;
    _state=_this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "账户管理",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {this.keepBack()}}>
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
    let SexModalProps = {
      visible: _this.state.modalVisible,
      sex:_this.state.sex,
      onClose: function(){
        _this.setState({
          modalVisible: false,
        })
      },
      sexAction:function(value){
        _this.setState({
          modalVisible: false,
          sex:value
        })
      }
    };
    return (
      <View style={styles.main}>
          <NavigatorTopBar {...NavigatorTopBarProps}/>
          <View style={styles.img}>
              <TouchableOpacity style={styles.img_b}  onPress={()=>_this.openMycamera()}>
                  <LinearGradient colors={['#5460ff','#5c99ff']} style={styles.img_person}>
                      <Image source={_state.imgurl?{uri:_state.imgurl}:require("../../images/niming.png")} style={styles.img_a} />
                  </LinearGradient>
                  <Text style={styles.img_font}>点击编辑头像</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.middle}>
              <View style={styles.middle_a}>
                  <Text style={styles.header_font}>姓名</Text>
                  <View style={styles.middle_b}>
                      <Image source={require('../../images/icon_b.png')} style={styles.icon_a} />
                      <TextInput underlineColorAndroid="transparent" style={styles.middle_input}
                      onChangeText={(text) => _this.setState({realName:text})} value={_this.state.realName}
                      placeholder="请输入您的姓名" placeholderTextColor='#dddddd'/>
                  </View>
              </View>
              <View style={styles.middle_line}></View>
              <View style={styles.middle_a}>
                  <Text style={styles.header_font}>性别</Text>
                  <TouchableOpacity style={styles.middle_b} onPress={()=>{_this.setState({modalVisible: true})}}>
                      <Image source={require('../../images/icon_b.png')} style={styles.icon_a} />
                      <Text style={styles.middle_font}>{_state.sex==1?"男":"女"}</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.middle_line}></View>
              <TouchableOpacity style={styles.middle_a} onPress={()=>_navigator.navigate("ReplaceTel")}>
                  <Text style={styles.header_font}>手机号</Text>
                  <View style={styles.middle_b}>
                      <Image source={require('../../images/icon_b.png')} style={styles.icon_a} />
                      <Text style={styles.middle_font}>{_this.state.telephone}</Text>

                  </View>
              </TouchableOpacity>
          </View>
          <SexModal {...SexModalProps}/>
      </View>
    );
  }

};
