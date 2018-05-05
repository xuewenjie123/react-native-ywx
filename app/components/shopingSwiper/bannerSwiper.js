'use strict';
import React, { Component, } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, } from 'react-native';
import Swiper from 'react-native-swiper';
import color from '../../constant/color';
import { width, height } from '../../components/common/Dimensions';
var _navigator,_this,_state,_props;


export default class BannerSwiper extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  onpushRouter(id){
    _navigator.navigate('FamousDetail',{id_:id,lunbo:true})
  }
  render() {
    _this = this;
    _state = _this.state;
    _props = _this.props;
    _navigator=_props._navigator;
    let SwiperProps = {
      showsPagination: true,
      autoplay: true,
      autoplayTimeout:10,
      loop:true,
      showsButtons:false,
      paginationStyle: {position: "absolute",top: 280*width/750,height:10,width:width},
      dot: (
        <View style={{backgroundColor:'rgba(0,0,0,.3)', width: 22, height: 3, marginLeft: 4, marginRight: 4, marginTop: 3, marginBottom: 3,}} />
      ),
      activeDot: (
        <View style={{backgroundColor: color.main1C, width: 22, height: 3, marginLeft: 4, marginRight: 4, marginTop: 3, marginBottom: 3,}} />
      ),
    }
    return (
      <View style={styles.image} pointerEvents={"box-none"}>
        <Swiper {...SwiperProps}>

          {_props.imglist.map((d,index)=>(
            <TouchableOpacity onPress={_props.handler} key={index} style={styles.slide}>
              <Image style={{width:width,height:150,}} source={d.url}></Image>
            </TouchableOpacity>
          ))}
        </Swiper>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  slide: {
    width:width,
    height:150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width:width,
    height:150,
    overflow: "hidden",
  },
});
