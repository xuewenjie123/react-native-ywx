'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image,TextInput,DeviceEventEmitter, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import Exchange from '../../components/common/CommodityExchange';
import Pays from '../../components/common/CommodityPay';
import {exchangeconfirmation} from '../../services/myDetail';
import NavWait from '../../components/common/NavWait';
import GradientBox from "../../components/common/GradientBox";
import { queryAddressList } from '../../services/MyAddress';
var _navigator,_this,_state,_props;

let list = {
  commodity:{
    title:'美国西北车厘子，约90克',
    feilei:'新鲜水果',
    jifen:300,
  },
  self:{
    jifen:1000,
  },
  yunfei:10,
}
export default class ExchangeConfirmation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:'',
      number:'1',
      message:'',
      modalVisible:false,
      payModalVisible:false,
      loading:true,
      jifentotal:0,
      duihuan:'',
      addressInfo:[],
      address:"",
      name:"",
      phone:""
    }
  }
  componentDidMount(){
    this.subscription=DeviceEventEmitter.addListener("ExchangeConfirmation",function(data){
       if (data) {
         _this.setState({address:data.address,
                         name:data.name,
                         phone:data.phone})
       }
     })
    queryAddressList({},_this.queryResult,_this.queryFail)
    exchangeconfirmation({page:1},_this.getInformation,_this.getInformationFail)
  }
  queryResult(result){
    if(result.success&&result.data){
      result.data.map((d,index)=>{
        if (d.isDefault==1) {
          _this.setState({
              addressInfo:d,
              address:d.address,
              name:d.name,
              phone:d.phone
          })
          return
        }
      })

    }
  }
  queryFail(){
    _this.setState({
      loadContinue:false,
    })
  }
  getInformation(result){
    if(result.success){
      _this.setState({
        data:result.data,
        loading:false,
        jifentotal:result.data.commodity.jifen,
      })
      if(result.data.commodity.jifen>result.data.self.jifen){
        _this.setState({
          duihuan:false,
        })
      }else {
        _this.setState({
          duihuan:true,
        })
      }
    }
  }
  getInformationFail(){
    // ToastAndroid.show("请确保您的网络已连接",ToastAndroid.SHORT)
    _this.setState({
      data:list,
      loading:false,
      jifentotal:list.commodity.jifen,
    })
    if(list.commodity.jifen>list.self.jifen){
      _this.setState({
        duihuan:false,
      })
    }else {
      _this.setState({
        duihuan:true,
      })
    }
  }
  nextAction(){
        _navigator.navigate("MineAddress",{router:"ExchangeConfirmation"});
  //      DeviceEventEmitter.emit("MineAddress",{router:"ExchangeConfirmation"})
  }

  numberChange(text){
    if(text>=0){
      _this.setState({
        number:text,
        jifentotal:text*_this.state.data.commodity.jifen,
      })
      if(text*_this.state.data.commodity.jifen>_this.state.data.self.jifen){
        _this.setState({
          duihuan:false,
        })
      }else {
        _this.setState({
          duihuan:true,
        })
      }
    }
  }
  jianNumber(){
    if (_this.state.number>0){
      _this.setState({
        number:String(Number(_this.state.number)-1),
        jifentotal:_this.state.data.commodity.jifen*(Number(_this.state.number)-1)
      })
      if(_this.state.data.commodity.jifen*(Number(_this.state.number)-1)>_this.state.data.self.jifen){
        _this.setState({
          duihuan:false,
        })
      }else {
        _this.setState({
          duihuan:true,
        })
      }
    }
  }
  jiaNumber(){
    _this.setState({
      number:String(Number(_this.state.number)+1),
      jifentotal:_this.state.data.commodity.jifen*(Number(_this.state.number)+1)
    })
    if(_this.state.data.commodity.jifen*(Number(_this.state.number)+1)>_this.state.data.self.jifen){
      _this.setState({
        duihuan:false,
      })
    }
  }


  messageChange(text){
    if(text.length>10){
      ToastAndroid.show("字数已超出限制",ToastAndroid.SHORT)
    }
    _this.setState({message:text.slice(0,10)})
  }


  setModalVisible(visible){
    _this.setState({
      modalVisible:visible,
    })
  }
  closeModal(){
    _this.setState({
      payModalVisible:false,
      modalVisible:false,
    })
  }
  toPayModal(){
    _this.setState({
      // modalVisible:false,
      payModalVisible:true,
    })
  }
  render() {
    _this = this;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "兑换确认",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.goBack()}}>
          <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
    }

    return (
          <View style={styles.main}>
              <NavigatorTopBar {...NavigatorTopBarProps}/>
              {_this.state.loading?<NavWait/>:
                <View style={styles.main}>
              <TouchableOpacity style={styles.up} onPress={()=>{_this.nextAction()}}>
                  <View style={styles.up_a}>
                      <View style={styles.up_b}>
                          <Text style={styles.up_font_a}>收</Text>
                          <Text style={styles.up_font}>收货人：</Text>
                          <Text style={styles.up_font}>{_this.state.name}</Text>
                      </View>
                      <View style={styles.up_b}>
                          <Text style={styles.up_font}>联系方式：</Text>
                          <Text style={styles.up_font}>{_this.state.phone}</Text>
                      </View>
                      <View style={[styles.up_b,{width:width-60}]}>
                          <Text style={styles.up_font}>收货地址：</Text>
                          <Text numberOfLines={1} style={styles.up_font}>{_this.state.address}</Text>
                      </View>
                  </View>
                  <Image style={{width: 15, height: 15,}} source={require('../../images/icon_c.png')}></Image>
              </TouchableOpacity>
              <View style={styles.middle}>
                  <Image style={{width: 66, height: 66,}} source={require('../../images/repair_f.png')}></Image>
                  <View style={styles.middle_a}>
                      <View>
                          <Text numberOfLines={1} style={styles.middle_font}>{_this.state.data.commodity.title}</Text>
                          <Text numberOfLines={1} style={styles.middle_font}>{_this.state.data.commodity.feilei}</Text>
                      </View>
                      <Text style={styles.middle_font_a}>{_this.state.data.commodity.jifen}积分</Text>
                  </View>
              </View>
              <View style={styles.down}>
                  <View style={styles.down_a}>
                      <Text style={styles.middle_font}>可用积分</Text>
                      <Text style={styles.middle_font_a}>{_this.state.data.self.jifen}积分</Text>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.down_a}>
                      <Text style={styles.middle_font}>兑换数量</Text>
                      <View style={styles.down_b}>
                          {_this.state.number>=1?
                            <TouchableOpacity style={styles.jia} onPress={() => {_this.jianNumber()}}>
                              <Text style={styles.up_font_a}>-</Text>
                            </TouchableOpacity>:
                          <TouchableOpacity style={styles.jian}>
                            <Text style={styles.up_font_a}>-</Text>
                          </TouchableOpacity>
                        }
                          <View style={styles.textInput}>
                              <TextInput maxLength={4} underlineColorAndroid="transparent"  style={styles.input}
                              onChangeText={(text)=> _this.numberChange(text)} value={_this.state.number}
                              keyboardType="numeric"/>
                          </View>
                          <TouchableOpacity style={styles.jia} onPress={() => {_this.jiaNumber()}}>
                            <Text style={styles.up_font_a}>+</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.down_a}>
                      <Text style={styles.middle_font}>运费</Text>
                      <Text style={styles.down_font}>￥{_this.state.data.yunfei}</Text>
                  </View>
              </View>
              <View style={styles.text}>
                  <TextInput maxLength={140} multiline={true} underlineColorAndroid="transparent"  style={styles.middle_font}
                  onChangeText={(text)=> _this.messageChange(text)} value={_this.state.message}
                   placeholder="留言..." placeholderTextColor='#dddddd'/>
                  <Text style={styles.text_number}>{140-_this.state.message.length}</Text>
              </View>
              <View style={styles.button}>
                 <View style={styles.button_a}>
                     <Text style={styles.button_font_a}>合计：</Text>
                     <Text style={styles.button_font}>{_this.state.jifentotal}积分</Text>
                     <Text style={styles.money}>(运费：￥{_this.state.data.yunfei})</Text>
                 </View>

                    <Exchange closeModal={this.closeModal.bind(this)} toPayModal={this.toPayModal.bind(this)} visible={_this.state.modalVisible}/>
                    <Pays closeModal={this.closeModal.bind(this)} visible={_this.state.payModalVisible}/>
                    {_this.state.duihuan?
                    <TouchableOpacity style={{flex:2}}>
                        <GradientBox title={"确认兑换"} styles={styles.button_b_b}/>
                    </TouchableOpacity>:
                    <TouchableOpacity style={styles.button_b} onPress={()=>{
                      this.setModalVisible(!_this.state.modalVisible)
                    }}>
                        <Text style={styles.button_font_b}>积分不足</Text>
                    </TouchableOpacity>
                  }

              </View>
              </View>
            }
          </View>
    );
  }

};
