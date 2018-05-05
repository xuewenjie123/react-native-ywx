'use strict';
import React, { Component, } from 'react';
import { StatusBar,View,Button, Text,Image, ScrollView, TouchableOpacity, ToastAndroid,InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions'
var _navigator,_this,_state,_props;
import { connect } from 'react-redux';
import { NavigationActions,createAction } from '../../utils';
import { MapView, MapTypes, MapModule, Geolocation } from 'react-native-baidu-map';
import NavWait from '../../components/common/NavWait';
@connect(({ app }) => ({ ...app }))
export default class Famous extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 15,
      center: null,
      markers: [],
      isMenu:false,
      latitude:'',
      longitude:'',
      isTel:false,
      isRefreshing:false,
      isRepair:false,
      ismapload:true
    }
  }

  componentDidMount() {
      //  this.subscription=DeviceEventEmitter.addListener("map",function(){
      //
      //  })
         _this.getMylocation()
  }
  // componentWillUnmount() {
  //   this.subscription.remove();
  // }
  refreshing(){
    const resetAction = NavigationActions.reset({
        index:0,
        actions:[NavigationActions.navigate({ routeName: 'Famous'})]
      })
      _navigator.dispatch(resetAction)
  }

  getMylocation(){
    // 获取位置
    console.log(1111);
    console.log(Geolocation.getCurrentPosition());
    Geolocation.getCurrentPosition().then(
        (data) => {
          _this.props.dispatch(createAction('app/save')({Myaddress:data.address}))
            this.setState({
                zoom:18,
                markers:[{
                    latitude:data.latitude,
                    longitude:data.longitude,
                    title:'我的位置'
                }],
                center:{
                    latitude:data.latitude,
                    longitude:data.longitude,
                },
                latitude:data.latitude,
                longitude:data.longitude,
            })
        }

    ).catch(error => {
        console.warn(error,'error')
    })
  }
  tel(){
    _this.setState({isTel:true})
  }
  nextAction(){
    _navigator.navigate("ApplySuggest")
  }
  render() {
    _this = this;
    _state = this.state;
    _navigator = _this.props.navigation;
    return (
        <View style={styles.main}>
        <MapView
        style={styles.map}
        center={_state.center}
        markers={_state.markers}
        zoom={_state.zoom}
        zoomControlsVisible={false}
         >
       </MapView>

            <TouchableOpacity style={styles.address} >
                <View style={styles.address_a}>
                    <View style={styles.address_b}>
                        <Image style={styles.mine_e} source={require('../../images/mine_e.png')}></Image>
                        <Text style={styles.address_font} numberOfLines={1} >当前位置：{this.props.Myaddress}</Text>
                    </View>
                    <Image style={styles.home_h} source={require('../../images/home_h.png')}></Image>
                </View>
            </TouchableOpacity>
            {_state.isMenu?
              <TouchableOpacity style={styles.menu_a} onPress={()=>{_this.nextAction()}} >
                  <View style={styles.home_i}>
                      <Image style={styles.home_i} source={require('../../images/home_i.png')}></Image>
                  </View>
              </TouchableOpacity>
              :
              <TouchableOpacity style={styles.menu} onPress={()=>{_this.setState({isMenu:true})}} >
                <View style={styles.home_l}>
                    <Image style={styles.home_l} source={require('../../images/home_l.png')}></Image>
                </View>
              </TouchableOpacity>

            }

            <View style={styles.info}>
                <TouchableOpacity style={styles.info_b} onPress={()=>{_navigator.navigate("ApplyRepair")}}>
                    <Text style={styles.info_font}>快速报修</Text>
                    <Image style={styles.home_h} source={require('../../images/home_h.png')}></Image>
                </TouchableOpacity>
                <View style={styles.info_a}>
                    <TouchableOpacity  onPress={()=>{_this.tel()}}>
                    {
                      _state.isTel?
                      <Image style={styles.home_n} source={require('../../images/home_m.png')}></Image>
                      :
                      <Image style={styles.home_n} source={require('../../images/home_n.png')}></Image>

                    }
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{_navigator.navigate("Repair",{latitude:_state.latitude,longitude:_state.longitude}),_this.setState({isRefreshing:true})}}>
                      {_state.isRefreshing?
                        <Image style={styles.home_p} source={require('../../images/home_o.png')}></Image>
                        :
                        <Image style={styles.home_p} source={require('../../images/home_p.png')}></Image>

                      }
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{_this.refreshing()}}>
                    {_state.isRepair?
                      <Image style={styles.home_n} source={require('../../images/home_q.png')}></Image>
                      :
                      <Image style={styles.home_n} source={require('../../images/home_r.png')}></Image>
                    }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }

};
