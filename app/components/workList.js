'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text,View, Image, ScrollView, TextInput, TouchableOpacity,ListView, Modal, AsyncStorage, ToastAndroid } from 'react-native';
import { width, height } from './common/Dimensions';
import color from '../constant/color';
var _navigator,_this,_state,_props;
import GradientBox from './common/GradientBox';

export default class workList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}),
      teamList:[],
      series:1,
      imgUrl:require('../images/repair_f.png'),
      orderState:"3",
      stars:4.5,
      dealNum:0,
      price:229,
      imglist:[],
      name:"彭于晏",
      isApply:true,
      selcetID:0
    }
  }
  componentDidMount(){
      _this.setState({
        teamList:_props.teamList,
        dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}).cloneWithRows(_props.teamList)
      })
      // InteractionManager.runAfterInteractions(() => {
      // });
  }
  _getimglist(start){
    var quan = Math.floor(start);
    var ban = start - quan;
    var kong = ban>0?4-quan:5-quan;
    var imglist = [];
    if(quan>0){
        for(let i=0;i<quan;i++){
            imglist.push(<Image key={i} style={styles.start} source={require('../images/repair_d.png')}/>)
        }
    }
    if(ban>0){
        imglist.push(<Image key={5} style={styles.start} source={require('../images/repair_c.png')}/>)
    }
    if (kong>0) {
        for(let i= 0; i< kong; i++){
          imglist.push(<Image key={6+i} style={styles.start} source={require('../images/repair_b.png')}/>)
        }
      }
    
     return imglist
  }

  selectWorker(rowID){
    _this.setState({
        selcetID:rowID,
        dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}).cloneWithRows(_state.teamList)
    })
  }
  _renderRow(row,sectionID,rowID){
      return (
        <TouchableOpacity style={styles.row} onPress={()=>_this.selectWorker(rowID)}>
            <View style={{flexDirection:"row",alignItems:"center",flex:1}}>
                <Text style={styles.text1}>{row.name}</Text>
                <Text style={[styles.text2,{marginLeft:30*width/750}]}>{row.typeWork}</Text>
                {row.busyState==0?<Image source={require('../images/s_busy.png')} style={{width:32*width/750,height:32*width/750,marginLeft:30*width/750}}/>:row.busyState==1?<Image source={require('../images/s_nobusy.png')} style={{width:32*width/750,height:32*width/750,marginLeft:30*width/750}}/>:<Image source={require('../images/s_will_nobusy.png')} style={{width:32*width/750,height:32*width/750,marginLeft:30*width/750}}/>}
                
               <View style={{flexDirection:"row",alignItems:"center",flex:1,justifyContent:"flex-end"}}>
                {row.WillBusyState?<Text style={[styles.text3,{marginRight:30*width/750}]}>{row.WillBusyState}</Text>:null}
                    <Text style={styles.text3}>{row.distance}</Text>
               </View>
            </View>
            {
                rowID==_state.selcetID?<Image source={require('../images/login_f.png')} style={{width:44*width/750,height:44*width/750,marginLeft:110*width/750}}/>:<View style={{width:width*154/750}}></View>
            }
        </TouchableOpacity>
      )
  }
  render() {
    _this = this;
    _state = _this.state;
    _props = _this.props;
    _navigator = _props.navigator;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={_props.visible}
            style={{alignItems:"center",justifyContent:"center",}}
            onRequestClose={() => {_props.closeModal()}}
        >
               <TouchableOpacity style={{flex:1, position:"absolute",width: width, height: height}} onPress={() => {_props.closeModal()}}>
               </TouchableOpacity>
               <View style={{width:180*width/750,height:180*width/750,alignItems:"center",justifyContent:"center",position:"absolute",left:15,top:44+206*width/750,zIndex:10000}}>
                            <Image source={_state.imgUrl} style={{width:170*width/750,height:170*width/750}}/>
                </View>
               <View style={{width:width,height:height,flexDirection:"row",justifyContent:"center",alignItems:"flex-end"}}>
                <View  style={styles.containerStyle}>
                        <View style={styles.list_up}>
                            <View style={styles.list_up_a}>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={styles.list_font}>{_state.name}</Text>
                                    <Text style={styles.list_font_b}>{_state.series}级</Text>
                                </View>
                            <TouchableOpacity onPress={() => {_props.closeModal()}} style={{width:40*width/750,height:40*width/750,alignContent:"center"}}>
                                 <Image source={require('../images/close.png')} style={{width:24*width/750,height:24*width/750}}/>
                            </TouchableOpacity>
                                
                            </View>
                            <Text style={styles.list_font_d}>￥{_state.price}</Text>
                            <View style={styles.list_right_down}>
                                <View style={styles.list_right_a}>
                                {_this._getimglist(_state.stars)}
                                    <Text style={styles.list_font_e}>{_state.stars}</Text>
                                </View>
                                <View style={styles.list_right_b}>
                                    <Text style={styles.list_font_f}>月成交量{_state.dealNum}单</Text>
                                </View>
                            </View>
                        </View>
                        <ListView
                            style={{flex:1}}
                            contentContainerStyle={styles.listContainer}
                            dataSource={_state.dataSource}
                            renderRow={_this._renderRow.bind(_this)}
                            enableEmptySections={true}
                            overScrollMode="never"
                        />
                    <View style={{width:width,height:70*width/750,marginBottom:100*width/750,marginTop:50*width/750,alignItems:"center",backgroundColor:color.bar}}>
                        <TouchableOpacity style={{width:400*width/750,}}>
                            <GradientBox title="就选TA" styles={{width:400*width/750,height:70*width/750,borderRadius:35*width/750,}}/>
                        </TouchableOpacity>
                    </View>   
                </View>
            </View>
        </Modal>   
                
    );
  }

};

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  containerStyle:{
    height:height-266*width/750-44,
    width:width,
    alignItems:"center",
    backgroundColor:color.bar
  },
  start:{
    height:12,
    width:12,
    marginRight:20*width/750
   },
   text1:{
    fontSize:15,
    color:color.font2C
   },
   text2:{
    fontSize:13,
    color:color.font2C
   },
   text3:{
    fontSize:12,
    color:color.font2C
   },
  list_up:{
    width:width-30,
    height:60,
    paddingLeft:200*width/750,
    marginBottom:10,
  },
  list_font:{
    fontSize:15,
    color:'#303030',
    margin:0,
    padding:0,
    lineHeight:16,
    marginRight:10
  },
  list_font_b:{
    fontSize:13,
    color:'#999999',
    lineHeight:16,
  },
  list_up_a:{
    flexDirection:'row',
    height:16,
    marginTop:10,
    alignItems:'center',
    width:width-135,
    justifyContent:"space-between"
  },
  list_font_d:{
    fontSize:15,
    color:'#ef5b5b'
  },
  list_right_down:{
    width:width-135,
    height:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  list_right_a:{
    height:15,
    flexDirection:'row',
    alignItems:'center',
  },
  list_font_e:{
    fontSize:15,
    color:'#edaf37',
    margin:0,
    padding:0
  },
  list_font_f:{
    fontSize:12,
    color:'#999999'
  },
  repair_b:{
    height:12,
    width:12,
  },
  list_apply_font:{
    fontSize:35,
    color:'#ef5b5b',
    lineHeight:35,
  },
  list_apply:{
    height:35,
    flexDirection:'row',
    alignItems:'flex-end',
    marginBottom:15,
  },
  listContainer:{
    width:width,
    alignItems:"center"
  },
  row:{
      height:90*width/750,
      width:width-30,
      flexDirection:"row",
      justifyContent:"space-between",
      borderBottomWidth:0.5,
      borderColor:color.border1C,
      alignItems:"center"
  }
});

