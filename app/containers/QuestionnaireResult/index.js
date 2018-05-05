'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image,TextInput, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
var _navigator,_this,_state,_props;
import GradientBox from "../../components/common/GradientBox"
import {questionnaireresult} from '../../services/myDetail';
import NavWait from '../../components/common/NavWait';

var lista = [];
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
export default class QuestionnaireDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:'',
      dataSource:ds,
      isJoin:false,
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
    questionnaireresult(obj,_this.resultList,_this.resultListFail)
  }
  resultList(result){
    if(result.success){
      _this.setState({
        data:result.data,
        dataSource:ds.cloneWithRows(result.data.survey.surveyQuestions),
        question:result.data.survey.surveyQuestions,
        isJoin:true,
        loading:false,
      })
    }
  }
  resultListFail(){
    ToastAndroid.show("请确保您的网络已连接",ToastAndroid.SHORT)
    _this.setState({
      loading:false,
    })
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
            <View style={styles.join}>
                <Text style={styles.list_font_c}>您已提交反馈问卷，感谢您的支持~</Text>
            </View>
            </ScrollView>
        </View>
      }
    </View>
    );
  }
  _renderRow(d,sectionId,rowId){
    return (
      _this.state.data.userAnswer[rowId].answer==''?null:
      d.type!=2?
      <View style={{marginTop:25}}>
          <View style={styles.title}>
              <Text style={styles.list_font}>{d.sort}、{d.question}</Text>
              {d.isMust==1?
              <Text style={{fontSize:15,color:'red',lineHeight:15,marginRight:5}}>*</Text>:null}
              <Text style={styles.list_font_c}>({_this.state.data.userAnswer[rowId].answerLabel})</Text>
          </View>
          {d.surveyQuestionOptions.map((ds,indexs)=>(

            d.type==1?_this.state.data.userAnswer[rowId].answer.indexOf(ds.id)==-1?
                <LinearGradient key={indexs} colors={['#ffffff','#ffffff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.vote}>
                    <Text style={styles.list_font_c}>{ds.label}:{ds.option}</Text>
                </LinearGradient>:
                <LinearGradient key={indexs} colors={['#5460ff','#5c99ff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.vote_blue}>
                    <Text style={styles.list_font_e}>{ds.label}:{ds.option}</Text>
                </LinearGradient>:_this.state.data.userAnswer[rowId].answer==ds.id?
                <LinearGradient key={indexs} colors={['#5460ff','#5c99ff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.vote_blue}>
                  <Text style={styles.list_font_e}>{ds.label}:{ds.option}</Text>
                </LinearGradient>:
                <LinearGradient key={indexs} colors={['#ffffff','#ffffff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.vote}>
                    <Text style={styles.list_font_c}>{ds.label}:{ds.option}</Text>
                </LinearGradient>
          ))}
      </View>:
      <View style={{marginTop:25}}>
          <Text style={[styles.list_font,{marginBottom:10}]}>{d.sort}、{d.question}{d.isMust==1?
          <Text style={{fontSize:13,color:'red'}}>*</Text>:null}</Text>
          <Text style={[styles.list_font_c,{lineHeight:20}]}>{_this.state.data.userAnswer[rowId].answer}</Text>
      </View>
    )
  }
};
