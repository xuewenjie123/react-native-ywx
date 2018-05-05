'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView,TextInput, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import ImagePicker from 'react-native-image-crop-picker';
import { evaluate} from '../../services/myOrder';
var _navigator,_this,_state,_props;


export default class EvaluationDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stars:0,
      message:'',
      id:this.props.navigation.state.params.id,
      goodsId:this.props.navigation.state.params.goodsId,
      images: [],
      maxFiles: 3,
    }
  }
    choose(i){
      _this.setState({stars:i+1})
    }
    _getimglist(start){
    var quan = Math.floor(start);
    var kong = 5-quan;
    var imglist = [];
    if(quan>0){
        for(let i=0;i<quan;i++){
            imglist.push(
            <TouchableOpacity key={i} onPress={()=>_this.choose(i)}>
               <Image  style={styles.start} source={require('../../images/camera_a.png')}/>
            </TouchableOpacity>)
        }
    }
    if (kong>0) {
        for(let i= 0; i< kong; i++){
          imglist.push(
            <TouchableOpacity key={quan+i} onPress={()=>_this.choose(i+quan)}>
               <Image  style={styles.start} source={require('../../images/camera_b.png')}/>
            </TouchableOpacity>
           )
        }
      }
     return imglist
  }
  messageChange(text){
    _this.setState({message:text})
  }

  submit(){
    if(_state.stars==0){
      ToastAndroid.show('请填写评分', ToastAndroid.SHORT);
    }else{
      var data={};
      data.fileList = _state.images?_state.images.map(d=>{
        var base64 = "data:"+d.mime+";base64," + d.data;
        var name = d.path.split("/")
        return {file: base64,fileName: name[name.length-1],}
      }):undefined;
      data.level = _state.stars;
      data.description = _state.message;
      data.orderId = _state.id;
      data.goodsId = _state.goodsId;
      evaluate(data,_this.submitFn)
    }
  }
  submitFn(result){
    if(result.success){
      
    }else{

    }
  }


  render() {
    _this = this;
    _state= this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "评价",
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
          onPress={() => {_this.submit()}}>
          <View style={{flex: 1,flexDirection: 'row-reverse',alignItems: 'center'}}>
            <Text style={{fontSize:15,color:'#303030',marginRight:15}}>提交</Text>
          </View>
        </TouchableOpacity>
      ),
    }

    return (
        <View style={styles.main}>
            <NavigatorTopBar {...NavigatorTopBarProps}/>
            <View style={styles.list}>
                <View style={styles.up}>
                  <Image style={{height:75,width:75,marginRight:15}} source={require('../../images/repair_f.png')}></Image>
                  <View style={styles.right}>
                      <Text style={{fontSize:15,color:'#303030'}}>评价</Text>
                      <View style={{flexDirection:"row"}}>{_this._getimglist(_state.stars)}</View>
                  </View>
                </View>
                <View style={styles.middle}>
                    <TextInput maxLength={140} multiline={true} underlineColorAndroid="transparent"  style={styles.middle_font}
                    onChangeText={(text)=> _this.messageChange(text)} value={_this.state.message}
                     placeholder="说点什么..." placeholderTextColor='#dddddd'/>
                    <Text style={styles.text_number}>{140-_this.state.message.length}</Text>
                </View>
                <View style={styles.down}>
                  {_state.images?_state.images.map((d,index)=>(
                    <TouchableOpacity key={index} style={styles.down_a} onPress={()=>_this.delPicker(index)}>
                      <Image style={{width:60,height:60}}
                        resizeMode="contain" source={{uri:d.path}}></Image>
                    </TouchableOpacity>
                  )):null}
                  {_state.maxFiles>0?(
                    <TouchableOpacity onPress={()=>_this.openPicker()} style={styles.down_a}>
                      <Image style={{width:32,height:32}} source={require('../../images/camera.png')}></Image>
                    </TouchableOpacity>
                  ):null}
                </View>
            </View>
        </View>
    );
  }
  delPicker(d){
    _state.images.splice(d,1)
    _this.setState({images:_state.images,maxFiles: 3-_state.images.length})
    console.log(_state.maxFiles);
  }
  openPicker(){
    ImagePicker.openPicker({
      includeBase64: true,
    }).then(_this.openPickerResult);
  }
  openPickerResult(images){
    console.log(images);
    console.log(images.length);
    _this.setState({images:_state.images.concat(images),maxFiles: 2-_state.images.length})
    console.log(_state.maxFiles);
  }
};
