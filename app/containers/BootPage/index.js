'use strict';
import React, { Component, } from 'react';
import { Image,ScrollView,StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import { width, height } from '../../components/common/Dimensions';
import styles from './styles'
var _navigator,_this,_state,_props;
import  GradientBox from "../../components/common/GradientBox"
import {getStorage,setStorage} from '../../constant/storage';
import NavigationActions from '../../components/common/NavigationActions';
export default class ChargesDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
        Img:[require('../../images/bootImg1.png'),require('../../images/bootimg2.png'),require('../../images/bootimg3.png')],
        currentPage:0
    }
  }
  componentWillMount(){
      var _this = this
    getStorage("AlreadyLoad",(error,data)=>{
        if(data){
            const resetAction = NavigationActions.reset({
                index:0,
                actions:[NavigationActions.navigate({ routeName: 'Famous'})]
              })
              _navigator.dispatch(resetAction)
        }else{
            setStorage("AlreadyLoad","1",function(){})
        }
    })
  }

  _renderImg(){
      let bigText = ["大数据支撑，智慧报修","移动的监控系统","好礼多多，让积分不再沉睡"];
      let smallText = ["报修，谁来你说了算","点击工单地图，轻松查看工单进度","积分当钱花，就是这么任性"];
      return (
        _state.Img.map((item,index)=>(
         <Image key={index} source={item} style={styles.backgroundImage}>
             <View style={styles.TextBox}>
                <Text style={styles.text1}>{bigText[index]}</Text>
                <Text style={styles.text2}>{smallText[index]}</Text>
             </View>
         </Image>
        ))
    )
  }

  startRouter(){
   const resetAction = NavigationActions.reset({
       index:0,
       actions:[NavigationActions.navigate({ routeName: 'Famous'})]
     })
     _navigator.dispatch(resetAction)
 }
  _renderLinear(){
      return(
        _state.currentPage==2?
        <TouchableOpacity style={styles.buttonBox} onPress={()=>_this.startRouter()}>
            <Text style={styles.text3}>开始吧</Text>
        </TouchableOpacity>
        :
        <View style={styles.linearBox}>
        {
            _state.Img.map((item,index)=>(
                index===_state.currentPage?<View key={index}><GradientBox styles={styles.activeLinear}/></View>:<View style={styles.linear} key={index}></View>
            ))
        }
         </View>
      )
  }
  onAnimationEnd(e){
    var offsetX = e.nativeEvent.contentOffset.x;
    var currentPage = Math.floor(offsetX/width);
    _this.setState({currentPage});
  }
  render() {
    _this = this;
    _state = this.state;
    _navigator = this.props.navigation;
    return (
        <View style={styles.main}>
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                bounces={false}
                pagingEnabled={true}
                onMomentumScrollEnd={this.onAnimationEnd}
                horizontal={true}>
                {this._renderImg()}
            </ScrollView>
            {this._renderLinear()}
        </View>

    );
  }

};
