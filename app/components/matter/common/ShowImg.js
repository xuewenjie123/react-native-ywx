'use strict';
import React, { Component, } from 'react';
import { Image,ScrollView,StyleSheet,Text,View,TouchableOpacity,Modal} from 'react-native';
import { width, height } from '../../components/common/Dimensions';
var _navigator,_this,_state,_props;
import color from '../../constant/color'
import NavigatorTopBar from './../../components/NavigatorTopBar';
export default class ChargesDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        imgList:[],
        upper:true,
        showSource:""
    }
  }

    componentWillReceiveProps(newProps){
        if(newProps.imgList!=_state.imgList){
            _this.setState({
                imgList:newProps.imgList
            })
        }
    }
    
    unpperImg(item){
        _this.setState({
            upper:!_state.upper
        })
        if(item){
            _this.setState({
                showSource:item
            })
        }
      }
  render() {
    _this = this;
    _state = this.state;
    _props = this.props;
    _navigator = this.props.navigation;
    let NavigatorTopBarProps = {
        visible: true,
        title: this.props.title,
        leftView: (
          <TouchableOpacity style={{flex: 1}}
            underlayColor='transparent'
            onPress={() => {_props.closeModal()}}>
            <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
              <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
            </View>
          </TouchableOpacity>
        )
      }
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={_props.visible}
        style={{flex:1}}
        onRequestClose={() => {_props.closeModal()}}
        >
            {
                _state.upper?
                <View style={{flex:1}}>
                    <NavigatorTopBar {...NavigatorTopBarProps}/>
                    <View style={{width:width,alignItems:'center',backgroundColor:"#fff",height:height}}>
                        <View style={{flexDirection:"row",width:width-30,alignItems:'center',paddingTop:30*width/750,}}>
                            {_state.imgList.map((item,index)=>(
                                <TouchableOpacity onPress={()=>_this.unpperImg(item)}  key={index}>
                                    <Image source={item} style={[styles.smallImg,index%3==1?{marginLeft:30*width/750,   marginRight:30*width/750}:null]}></Image>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
                :
                <View style={{width:width,alignItems:'center',backgroundColor:"#fff",height:height}}>
                    <TouchableOpacity onPress={()=>_this.unpperImg()}>
                        <Image source={_state.showSource} style={{width:width,height:height}} />
                    </TouchableOpacity>
                </View>    
            }
        </Modal>
    );
  }

};
const styles = StyleSheet.create({
    smallImg:{
        width:210*width/750,
        height:210*width/750
    }
})