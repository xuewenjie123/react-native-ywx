'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image,TextInput, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
var _navigator,_this,_state,_props;
import GradientBox from "../../components/common/GradientBox"
import {questionnairedetail,sendquestion} from '../../services/myDetail';
import NavWait from '../../components/common/NavWait';

var lista = [];
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
export default class QuestionnaireDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:'',
      dataSource:ds,
      loading:true,
      question: [],
      params:this.props.navigation.state.params.datas,
    }
  }
  componentDidMount(){
    let obj = {
      surveyId:_this.state.params.id,
      surveyCode:_this.state.params.code,
      partAcompanyId:_this.state.params.partACompanyId,
      propertyCompanyId:_this.state.params.propertyCompanyId,
    }
      questionnairedetail(obj,_this.questionList,_this.questionListFail)
  }

  questionList(result){
    if(result.success){
      lista = result.data.survey.surveyQuestions;
      if(!_this.state.params.isJoin){
        for(let i = 0;i<lista.length;i++){
          if(lista[i].type!=2){
            lista[i].chlist = [];
          }else{
            lista[i].message= '';
          }
        }
      }
      _this.setState({
        data:result.data,
        dataSource:_this.state.dataSource.cloneWithRows(lista),
        question:lista,
        loading:false,
      })
    }
  }
  questionListFail(){
    ToastAndroid.show("请确保您的网络已连接",ToastAndroid.SHORT)
    _this.setState({
      loading:false,
    })
  }

  messageChange(text,rowId){
    if(text.length>200){
      ToastAndroid.show("字数已超出限制",ToastAndroid.SHORT)
    }
    lista[rowId].message = text.slice(0,200);
    _this.setState({
      question:lista,
      dataSource:ds.cloneWithRows(lista),
    })
  }
  chose(id,mul,rowId){
      if(mul==1){
        _this.chosemore(id,rowId)
      }else {
        _this.choseone(id,rowId)
      }
  }
  choseone(id,rowId){
    if(_this.state.question[rowId].chlist!=id){
      lista[rowId].chlist = id
    }
    _this.setState({
      question:lista,
      dataSource:ds.cloneWithRows(lista),
    })
  }
  chosemore(id,rowId){
    if(_this.state.question[rowId].chlist.indexOf(id)==-1){
      lista[rowId].chlist.push(id)
    }else {
      lista[rowId].chlist.splice(lista[rowId].chlist.indexOf(id),1)
    }
    _this.setState({
      question:lista,
      dataSource:ds.cloneWithRows(lista),
    })
  }
  sendContent(){
    for(let j = 0;j<_this.state.question.length;j++){
      if(_this.state.question[j].isMust==1){
        if(_this.state.question[j].type!=2){
          if(_this.state.question[j].chlist==''||_this.state.question[j].chlist==[]){
            ToastAndroid.show('请完成第'+ (j+1) + '道题', ToastAndroid.SHORT)
            return
          }
        }else if(_this.state.question[j].message==''){
          ToastAndroid.show('请填写问卷'+(j+1), ToastAndroid.SHORT)
          return
        }
      }
    }
    let answerOptions = [];
    for(let i = 0;i<_this.state.question.length;i++){
      let quest = {
        questionId:_this.state.question[i].id,
        questionType:_this.state.question[i].type,
      };
      if(_this.state.question[i].type==0){
        quest.answer = _this.state.question[i].chlist;
      }else if(_this.state.question[i].type==1){
        var str = '';
        for(let k = 0;k<_this.state.question[i].chlist.length;k++){
          if(k == 0){
            str = _this.state.question[i].chlist[k]
          }else{
            str += ','+_this.state.question[i].chlist[k];
          }
        }
        quest.answer = str;
      }else{
        quest.answer = _this.state.question[i].message;
      }
      answerOptions.push(quest);
    }
    let obj = {
      surveyId:_this.state.data.survey.id,
      surveyCode:_this.state.data.survey.code,
      partAcompanyId:_this.state.data.partAcompanyId,
      propertyCompanyId:_this.state.data.propertyCompanyId,
      answerOptions:answerOptions,
    }
    sendquestion(obj,_this.sendsuc)
    _this.setState({
      loading:true,
    })
  }
  sendsuc(result){
    if(result.success){
      _navigator.navigate('QuestionnaireResult',{datas:_this.state.params})
    }
  }
  render() {
    _this = this;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "调查问卷详情",
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
        <View style={styles.main_a}>
            <ScrollView contentContainerStyle={{width:width}}>
            <View style={styles.list}>
                <Text style={[styles.list_font,{textAlign:'center'}]}>{_this.state.data.survey.title}</Text>
                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow.bind(this)}
                  initialListSize={10}
                  enableEmptySections={true}
                />
            </View>
            </ScrollView>
        </View>
      }
      {_this.state.loading?null:
          <TouchableOpacity onPress={()=>this.sendContent()} style={styles.button_a} underlayColor='transparent'>
              <GradientBox title={"提交"} styles={styles.button}/>
          </TouchableOpacity>
        }
    </View>
    );
  }
  _renderRow(d,sectionId,rowId){
    return (
      d.type!=2?
      <View style={{marginTop:25}}>
          <View style={styles.title}>
              <Text style={styles.list_font}>{d.sort}、{d.question}</Text>
              <Text style={styles.list_font_c}>
              {d.isMust==1?
              <Text style={{fontSize:13,color:'red'}}>*</Text>:null}
              </Text>
          </View>
          {d.surveyQuestionOptions.map((ds,indexs)=>(

            d.type==1?_this.state.question[rowId].chlist.indexOf(ds.id)==-1?
            <TouchableOpacity key={indexs} onPress={()=> this.chose(ds.id,d.type,rowId)}>
                <LinearGradient colors={['#ffffff','#ffffff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.vote}>
                    <Text style={styles.list_font_c}>{ds.label}:{ds.option}</Text>
                </LinearGradient>
            </TouchableOpacity>:
            <TouchableOpacity key={indexs} onPress={()=> this.chose(ds.id,d.type,rowId)}>
                <LinearGradient colors={['#5460ff','#5c99ff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.vote_blue}>
                    <Text style={styles.list_font_e}>{ds.label}:{ds.option}</Text>
                </LinearGradient>
            </TouchableOpacity>:_this.state.question[rowId].chlist==ds.id?
            <TouchableOpacity key={indexs} onPress={()=> this.chose(ds.id,d.type,rowId)}>
                <LinearGradient colors={['#5460ff','#5c99ff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.vote_blue}>
                  <Text style={styles.list_font_e}>{ds.label}:{ds.option}</Text>
                </LinearGradient>
            </TouchableOpacity>:
            <TouchableOpacity key={indexs} onPress={()=> this.chose(ds.id,d.type,rowId)}>
                <LinearGradient colors={['#ffffff','#ffffff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.vote}>
                    <Text style={styles.list_font_c}>{ds.label}:{ds.option}</Text>
                </LinearGradient>
            </TouchableOpacity>
          ))}
      </View>:
      <View style={{marginTop:25}}>
          <Text style={[styles.list_font,{marginBottom:10}]}>{d.sort}、{d.question}{d.isMust==1?
          <Text style={{fontSize:13,color:'red'}}>*</Text>:null}</Text>

          {_this.state.isJoin?
            <Text style={[styles.list_font_c,{lineHeight:20}]}>{d.message}</Text>
            :
            <View style={styles.vote_a}>
                <TextInput maxLength={140} multiline={true} underlineColorAndroid="transparent"  style={styles.list_input_a}
                onChangeText={(text)=> _this.messageChange(text,rowId)} value={_this.state.question[rowId].message}
                 placeholder="请填写您的意见或建议" placeholderTextColor='#dddddd'/>
                <Text style={styles.text_number}>{200-_this.state.question[rowId].message.length}</Text>
            </View>
          }
      </View>
    )
  }
};
