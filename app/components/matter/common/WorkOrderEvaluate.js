'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
import { width, height } from '../../components/common/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import GradientBox from '../../components/common/GradientBox';
var _navigator,_state,_this,_props;
var negative={
  eva:'差评',
  title:'请留下您的宝贵意见，以使我们更好的改进',
  tags:['干活墨迹','路上耗时','不专业','强制收小费','不礼貌','破坏家物']
}
var moderate={
  eva:'中评',
  title:'请留下您的宝贵意见，以使我们更好的改进',
  tags:['还不错','服务温暖','维修大师','路上耗时','不礼貌','不专业']
}
var positive={
  eva:'好评',
  title:'感谢评价，您的满意是我们前进的最大动力',
  tags:['中国好维修工','服务温暖','谈吐优雅','阳光幽默','技术高强','维修大师']
}
export default class WorkEvaluate extends Component {
  constructor(props) {
   super(props);
   this.state={
     imglist:[],
     score:2.5,
     evaimglist:[],
     evadisplay:false,
     evastring:'',
     evaluatelist:'',
     selecttags:[],
     message:'',
     evascore:0,
   }
  }
  componentDidMount(){
    _this._getimglist()
    _this.setState({
      evaluatelist:negative,
    })
  }
  _getimglist(){
    var quan = Math.floor(_this.state.score);
    var ban =  _this.state.score-quan
    if (ban>0) {
      var kong = 4-quan
    }else {
      var kong = 5-quan
    }
    var imglist = [];
    var evaimglist = [];
    if (quan>0) {
      for(var i = 0; i < quan; i++){
        imglist.push(<Image key={i} style={styles.repair_b} source={require('../../images/repair_d.png')}></Image>)
      }
    }
    if (ban>0) {
      imglist.push(<Image key={5} style={styles.repair_b} source={require('../../images/repair_c.png')}></Image>)
    }
    if (kong>0) {
      for(var y = 0; y < kong; y++){
        imglist.push(<Image key={6+y} style={styles.repair_b} source={require('../../images/repair_b.png')}></Image>)
      }
    }
    for(let j = 0;j < 5;j++){
      evaimglist.push(<Image key={j} style={styles.repair_img} source={require('../../images/repair_b.png')}></Image>)
    }
    _this.setState({imglist:imglist,evaimglist:evaimglist})
    return imglist

  }
  evaluateImg(index){
    let evaluatelist = '';
    let evaimglist = _this.state.evaimglist;
    for(let i =0;i<_this.state.evaimglist.length;i++){
      if(i<=index){
        evaimglist[i]=<Image key={i} style={styles.repair_img} source={require('../../images/repair_d.png')}></Image>
      }else{
        evaimglist[i]=<Image key={i} style={styles.repair_img} source={require('../../images/repair_b.png')}></Image>
      }
    }
    if(index<=1){
      evaluatelist = negative;
    }else if(index==2){
      evaluatelist = moderate;
    }else{
      evaluatelist = positive;
    }
    _this.setState({
      evaluatelist:evaluatelist,
      evaimglist:evaimglist,
      evadisplay:true,
      evascore:index+1,
      selecttags:[],
    })
  }
  tagfun(d){
    var selecttags = _this.state.selecttags;
    if(selecttags.indexOf(d)==-1){
        selecttags.push(d);
    }else{
        selecttags.splice(selecttags.indexOf(d),1)
    }
    _this.setState({
      selecttags:selecttags
    })
  }
  message(text){
    _this.setState({
      message:text
    })
  }
  evasuccess(){
    let obj = {
      title:_this.state.evascore==1?'“差评”':_this.state.evascore==2?'“仍需努力”':_this.state.evascore==3?'“再接再厉”':_this.state.evascore==4?'“比较满意”':_this.state.evascore==5?'完美无暇':'“评分”',
      score:_this.state.evascore,
      message:_this.state.message,
      tags:_this.state.selecttags,
    }
    _props.evasuccess(obj)
  }
  render() {
    _this=this;
    _state=this.state;
    _props=this.props;
    _navigator=this.props._navigator;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={_props.visible}
        style={{alignItems:"center",justifyContent:"center",}}
        onRequestClose={() => {_props.closeModal()}}
        >
        <View style={{position: 'absolute', width: width, height: height, backgroundColor: "#000000", opacity: .3,}}>
          <TouchableOpacity style={{flex:1}} onPress={() => {
            _props.closeModal()
          }}>
          </TouchableOpacity>
        </View>
        <View style={styles.list_down_a}>
            <View style={styles.list_box_up}>
                <LinearGradient colors={['#5460ff','#5c99ff' ]} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.list_headImg}>
                    <Image style={styles.repair_f} source={require('../../images/repair_f.png')}></Image>
                </LinearGradient>
                <View style={styles.list_right}>
                    <View style={styles.list_right_up}>
                      <View style={{flexDirection:'row'}}>
                       <Text style={styles.list_font_a}>彭于晏</Text>
                       <Text style={styles.list_font_b}>30级</Text>
                      </View>
                      <TouchableOpacity onPress={()=>{_props.closeModal()}}  underlayColor='transparent'>
                          <Image style={{width: 15, height: 15,}} source={require('../../images/close.png')}></Image>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.list_right_middle}>
                       <Text style={styles.list_font_d}>￥229</Text>
                    </View>
                    <View style={styles.list_right_down}>
                        <View style={styles.list_right_a}>
                          {_this.state.imglist.map((d,index)=>(
                            <View style={styles.require_c} key={index}>
                              {d}
                            </View>
                          ))}
                          <Text style={styles.list_font_e}>{_this.state.score}</Text>
                        </View>
                        <View>
                          <Text style={styles.list_font_f}>月成交量75单</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'column'}}>
              <View style={{alignItems:"center",marginTop:10}}>
                <Text style={{fontSize:15,color:'#303030'}}>{_this.state.evascore==1?'“差评”':_this.state.evascore==2?'“仍需努力”':_this.state.evascore==3?'“再接再厉”':_this.state.evascore==4?'“比较满意”':_this.state.evascore==5?'“完美无暇”':'“评分”'}</Text>
                <View style={{flexDirection:'row'}}>
                  {_this.state.evaimglist.map((d,index)=>(
                    <TouchableOpacity onPress={()=>(_this.evaluateImg(index))} key={index} style={{marginTop:10}}>
                      {d}
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              {_this.state.evadisplay?
              <View>
                <View style={{flexDirection:'column',alignItems:'center',marginTop:10,justifyContent:'center'}}>
                  <Text style={{fontSize:13,color:'#999999'}}>{_this.state.evaluatelist.title}</Text>
                  <View style={{flexDirection:'row',width:700*width/750,flexWrap:'wrap',justifyContent:'center'}}>
                    {_this.state.evaluatelist.tags.map((d,index)=>(
                      _this.state.selecttags.indexOf(d)==-1?
                      <TouchableOpacity onPress={()=>this.tagfun(d)} style={styles.tags} key={index}>
                        <Text style={{lineHeight:15,color:'#999999'}}>{d}</Text>
                      </TouchableOpacity>:
                      <LinearGradient  key={index} colors={['#5460ff','#5c99ff' ]} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.tagstwo}>
                        <TouchableOpacity onPress={()=>this.tagfun(d)}>
                          <Text style={{lineHeight:15,color:'#ffffff'}}>{d}</Text>
                        </TouchableOpacity>
                      </LinearGradient>
                    ))}
                  </View>
                  <View style={styles.vote_a}>
                      <TextInput maxLength={140} multiline={true} underlineColorAndroid="transparent"  style={styles.list_input_a}
                      onChangeText={(text)=> _this.message(text)} value={_this.state.message}
                       placeholder="您对他的其它印象" placeholderTextColor='#999999'/>
                  </View>
                </View>
                <TouchableOpacity onPress={()=>_this.evasuccess()} style={{alignItems:'center',marginTop:15}}>
                  <GradientBox title='确认完工' styles={{width:width/2,height:40,borderRadius:40}}/>
                </TouchableOpacity>
              </View>:null
            }
            </View>
        </View>
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  list_input_a:{
    marginLeft:15,
    lineHeight:13,
    color:'#999999',
    height: 40,
    fontSize:13,
    textAlign:'center',
    margin:0,
    padding:0,
    textAlignVertical: 'center',
  },
  vote_a:{
    height:40,
    width:width-100,
    borderRadius:5,
    borderWidth:1,
    marginTop:10,
    borderColor:'#dddddd',
    borderStyle:'dashed',
  },
  tagstwo:{
    height:25,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    marginTop:10,
    marginRight:10,
    borderRadius:3,
    borderWidth:1,
    borderColor:'transparent',
    justifyContent:'center'
  },
  tags:{
    height:25,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    marginTop:10,
    marginRight:10,
    borderRadius:3,
    borderWidth:1,
    borderColor:'#dddddd',
    justifyContent:'center'
  },
  repair_img:{
    width:25,
    height:25,
    marginRight:10,
  },
  bar:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',
    marginTop:150*width/750,
  },
  title: {
    fontSize: 13,
    color: "#999",
  },
  list_font_e:{
    fontSize:15,
    color:'#edaf37',
    margin:0,
    padding:0
  },
  require_c:{
    height:12,
    width:12,
    marginRight:5
  },
  repair_b:{
    height:12,
    width:12,
  },
  list_right_a:{
    height:15,
    flexDirection:'row',
    alignItems:'center',
  },
  list_right_down:{
    height:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:26
  },
  list_font_a:{
    fontSize:15,
    color:'#303030',
    margin:0,
    padding:0,
  },
  list_font_b:{
    fontSize:13,
    marginLeft:10,
    color:'#999999'
  },
  list_font_d:{
    fontSize:15,
    color:'#ef5b5b'
  },
  list_down_a:{
    width:width,
    backgroundColor:'#ffffff',
    flexDirection:'column',
    position:'absolute',
    bottom:0,
    padding:15,
  },
  list_box_up:{
    flexDirection:'row',
  },
  repair_f:{
    height:85,
    width:85,
  },
  list_headImg:{
    width:90,
    height:90,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  },
  list_right:{
    flexDirection:'column',
    width:width-130,
    marginLeft:10,
  },
  list_right_up:{
    height:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:5,
  },
  list_right_middle:{
    height:15,
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
  },
  list_font_f:{
    fontSize:12,
    color:'#999999'
  },

});
