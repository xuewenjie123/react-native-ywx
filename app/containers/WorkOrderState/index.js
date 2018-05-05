'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import {workorderstate} from '../../services/myDetail';
import NavWait from '../../components/common/NavWait';
var _navigator,_this,_state,_props;

var list = [
  {name:'陈鸿宇',states:'您的工单已提交，等待审核',createTime:'2017年6月16日 09：01'},
  {name:'客服',states:'您的工单审核已通过',createTime:'2017年6月16日 09：01',tel:'010-5678'},
  {name:'彭于晏',states:'彭于晏已接单，正在火速前来，预计到达时间10:00',createTime:'2017年6月16日 09：01'},
  {name:'彭于晏',states:'彭于晏已到达，准备为您处理问题',createTime:'2017年6月16日 09：01'},
  {name:'彭于晏',states:'问题已解决，请您确认付款，并未本次服务评价',createTime:'2017年6月16日 09：01',pictureUrl:require('../../images/matter_l.png')},
  {states:'已确认，工单结束',createTime:'2017年6月16日 09：01'},
]
export default class WorkOrderState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:'',
      loading:true,
    }
  }
  componentDidMount(){
    workorderstate({page:1},_this.getstate,_this.getstateFail)
  }
  getstate(result){
    if(result.success){
      _this.setState({
        data:result.data,
        loading:false
      })
    }
  }
  getstateFail(){
    // ToastAndroid.show("请确保您的网络已连接",ToastAndroid.SHORT)
    _this.setState({
      data:list,
      loading:false,
    })
  }
  render() {
    _this = this;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "工单状态",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.pop()}}>
          <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
    }

    return (
      <View style={{flex:1}}>
          <View style={styles.main}>
              <NavigatorTopBar {...NavigatorTopBarProps}/>
              {_this.state.loading?<NavWait/>:
              <ScrollView>
              <View style={styles.list_box}>
                  {_this.state.data.map((d,index)=>(
                    _this._renderRow(d,index)
                  ))}
              </View>
              </ScrollView>
            }
          </View>
      </View>
    );
  }
  _renderRow(d,index){
    return(
      <View key={index} style={styles.list_box_a}>
        <View style={styles.list_box_b}>
          <Image source={_this.state.data.length-1==index?require('../../images/inquiries_c.png'):require('../../images/inquiries_b.png')} style={styles.inquiries_b} />
          {index>1?
          <Text style={styles.list_font}>{d.states}</Text>:
          <View style={{flexDirection:'row'}}>
            <Text style={styles.list_font}>{index==1?d.name+'，':d.name}</Text>
            <TouchableOpacity>
              <Text style={{fontSize:13,color:'#5986ff'}}>{d.tel?d.tel:null}</Text>
            </TouchableOpacity>
          </View>
          }
        </View>
        <View style={index>0?styles.list_box_c:styles.list_box_cs}>
          {d.name?
            index>1?
          <View style={{flexDirection:'row'}}>
            <Text style={styles.list_font_c}>{d.name}，</Text>
            <TouchableOpacity>
              <Text  style={styles.list_font_d}>联系师傅</Text>
            </TouchableOpacity>
          </View>:
          <View style={{flexDirection:'row'}}>
            <Text style={styles.list_font_c}>{d.states}</Text>
          </View>
          :null
          }
          <Image style={{width:30,height:30,marginTop:10,marginLeft:21}} source={d.pictureUrl}/>
          <Text style={styles.list_font_time}>{d.createTime}</Text>
        </View>
      </View>
    )
  }

};
