'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity,  } from 'react-native';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import Message from './Message';
import Notice from './Notice';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator;


export default class MessageNotice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMessage: true,
    }
  }
  _onPushRouter(id,params){
    if(id){
      _navigator.push({
        title:id,
        id:id,
        params:params,
      });
    }
  }

  render() {
    _navigator = this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "消息",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.goBack()}}>
          <View style={{flex: 1, paddingLeft: 10,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      centerView: (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
          <View style={{ borderWidth:1,borderStyle: 'solid', height: 30, width: 160,
            borderColor: "#5986ff", borderRadius: 5, flexDirection: 'row',}}>
            <TouchableOpacity  style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: this.state.isMessage?"#5986ff":null,
              borderTopLeftRadius: 5,borderBottomLeftRadius: 5,}}
              onPress={() => {this.setState({isMessage:true})}}>
              <Text style={{ fontSize: 15, color: this.state.isMessage?"#fff":"#5986ff"}}>
                {"消息"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: this.state.isMessage?null:"#5986ff",
              borderTopRightRadius: 5,borderBottomRightRadius: 5,}}
              onPress={() => {this.setState({isMessage:false})}}>
              <Text style={{ fontSize: 15, color: this.state.isMessage?"#5986ff":"#fff"}}>
                {"公告"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    let MessageProps = {
      navigation: _navigator,
    }
    let NoticeProps = {
      navigation: _navigator,
    }

    return (
      <View style={{flex: 1}}>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
        <View style={styles.main}>
          {this.state.isMessage?(
            <Message {...MessageProps}/>
          ):(
            <Notice {...NoticeProps}/>
          )}
        </View>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#f7f8fc',
  },
  title: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2486f4',
  },
  middle: {
    flexDirection: 'row',
    width: 150,
    height: 30,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius : 5,
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 30,
  },
  right: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 30,
    backgroundColor: 'white',
    borderTopRightRadius : 5,
    borderBottomRightRadius : 5,
  },
  last:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 15,
    width: 92,
    backgroundColor: '#bdbebe',
    marginTop : 15,
    marginBottom : 10,
    borderRadius : 6,
  },
  text: {
    height: 113,
    width: width-20,
    borderRadius : 6,
    backgroundColor: '#ffffff',
    paddingLeft:10,
    paddingRight:10,
  },
  borders:{
    borderBottomWidth:1,
    borderBottomColor: '#b0c1c7',
    borderStyle: 'solid',
  },
  borderss:{
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:0,
    borderColor: '#dde4e7',
    borderStyle: 'solid',
  },
  info: {
    height: 83,
    borderTopRightRadius : 6,
    borderTopLeftRadius : 6,
  },
  online: {
    height: 30,
    marginTop:8,
    justifyContent: 'center',
  },
  come: {
    height: 30,
    borderBottomRightRadius : 6,
    borderBottomLeftRadius : 6,
    justifyContent: 'center',
  },
  line: {
    borderBottomWidth:1,
    borderBottomColor: '#ddd',
    borderStyle: 'solid',
    },
});

module.exports = MessageNotice
