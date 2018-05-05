'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView,Modal, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import Dimensions from 'Dimensions';
var { width, height } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import Echarts from 'native-echarts';
var _navigator,_this,_state,_props;
import color from '../../constant/color';
import Picker from 'react-native-picker';
import {reportProjects,reportRatio,reportLineChart,reportCost,reportHistogram} from '../../services/statisticalReport'
var placeList = [{name:"东小区",id:"1"},{name:"西区",id:"2"},{name:"北区",id:"3"},{name:"南区",id:"4"}]

export default class StatisticalReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types:1,
            selectPlace:false,
            selectDate:false,
            placeList:placeList,
            dateList:["今日","本季度","本年","自定义"],
            repairData:[],
            suggestData:[],
            angserData:[],
            complainData:[],
            data1:[],
            xAxisData:[],
            palceValue:"全部",
            dateValue:"今日",
            dateType:1,
            lastdate:"今日",
            startTime:"",
            endTime:'',
            projectId:"",
            repaitContainer:{},
            otherContainer:{},
            allContainer:{},
            showDate:true,
        }
    }

    componentDidMount(){
        reportProjects({},_this.getProject)
        reportHistogram({projectId:_state.projectId,type:_state.types,dateType:_state.dateType},_this.getHistogram)
        reportRatio({type:_state.types,projectId:_state.projectId},_this.getRadio)
    }
    getProject(result){//小区下拉
        if(result.success){
            _this.setState({
                placeList:[{name:"全部",id:""}].concat(result.data)
            })
        }
    }
    getRadio(result){//底部数据
        if(result.success){
            if(_state.types==1){
                _this.setState({
                    repaitContainer:result.data
                })
            }else{
                _this.setState({
                    otherContainer:result.data
                })
            }
        }
    }
    getHistogram(result){//柱形图
        if(result.success){
            if(_state.types==1){
                _this.setState({
                    xAxisData:["待派","进行中","已完成"]
                })
            }else{
                _this.setState({
                    xAxisData:["待处理","处理中","已处理"]
                })
            }
            _this.setState({
                data1:result.data
            })
        }
    }
    getLineChart(result){//折线图  与全部数据
        if(result.success){
          _this.setState({
            allContainer:result.data,
            repairData:result.data.repairList,
            suggestData:result.data.suggestionList,
            angserData:result.data.inquiriesList,
            complainData:result.data.complaintList,
          })
        }
    }
    
  changeData(type){//报修  投诉  建议 切换
    Picker.hide();
    if(type==''){
        reportLineChart({projectId:_state.projectId},_this.getLineChart)
    }else{
        if(_state.dateType==4){
            reportHistogram({projectId:_state.projectId,type:type,dateType:_state.dateType,startTime:_state.startTime,endTime:_state.endTime},_this.getHistogram)
          }else{
            reportHistogram({projectId:_state.projectId,type:type,dateType:_state.dateType},_this.getHistogram)
          }
        reportRatio({type:type,projectId:_state.projectId},_this.getRadio)
    }
    _this.setState({
      types:type
    })
  }

  getplaceEachart(item,i){// 换地方
      if(_state.types!=""){
          if(_state.dateType==4){
            reportHistogram({projectId:item.id,type:_state.types,dateType:_state.dateType,startTime:_state.startTime,endTime:_state.endTime},_this.getHistogram)
          }else{
            reportHistogram({projectId:item.id,type:_state.types,dateType:_state.dateType},_this.getHistogram)
          }
          reportRatio({type:_state.types,projectId:item.id},_this.getRadio)
      }else{
        reportLineChart({projectId:_state.projectId},_this.getLineChart)
      }
        _this.setState({
            palceValue:item.name,
            projectId:item.id,
            selectPlace:false
        })
  }

  getDateEachart(item){//切换日期
      console.log(item)
      Picker.hide();
      if(item=="自定义"){
        console.log(item)
          _this.setState({
            lastdate:_state.dateValue,
            dateType:_state.dateType
          })
        _this._showTimePicker()
      }
      var dateTypes;
      switch (item){
        case "今日":
        dateTypes=1
          break;
        case "本月":
        dateTypes=2
          break;
        case "本季度":
        dateTypes=3
          break;
        default:
        dateTypes=4
      }
    // reportHistogram({projectId:_state.projectId,type:dateType,dateType:_state.dateType,startTime:_state.startTime,endTime:_state.endTime},_this.getHistogram)
      if(dateTypes!=4&&_state.types!=""){
        reportHistogram({projectId:_state.projectId,type:_state.types,dateType:dateTypes},_this.getHistogram)
      }
        _this.setState({
            dateValue:item,
            dateType:dateTypes,
            selectDate:false
        })
  }

  hidePicker() {
      if(_state.lastdate){
        _this.setState({
            dateValue:_state.lastdate,
            dateType:_state.dateType
        })
      }
    Picker.hide();
  }
  
  render() {
    _this = this;
    _state = _this.state;
    _navigator = _this.props.navigation;
    const option1 = {
        tooltip: {
            
                },
        legend:{
            width:20
        },
        xAxis: {
            axisLine:{
                lineStyle:{
                    color:'rgba(95, 121, 255, 0.1)',
                }
            },
            splitLine:{
                lineStyle: {
                    // 使用深浅的间隔色
                    color:'rgba(95, 121, 255, 0.1)',
                }
            },
            data: _state.xAxisData
        },
        color:['#fff','#fff','#fff'],
        textStyle:{
            color:"#fff"
        },
        grid:{
        },
        yAxis: {
            splitLine:{
                    lineStyle: {
                    // 使用深浅的间隔色
                    color:'rgba(95, 121, 255, 0.1)',
                }
            },
            axisLine:{
                lineStyle:{
                    color:'rgba(95, 121, 255, 0.1)'
                }
            }
        },
        series: [
            {
                name:'处理单数',
                type:'bar',
                stack: '总量',
                barWidth:40*width/750,
                /*itemStyle : { normal: {label : {show: true, position: 'insideTop',textStyle:{color:'#000'}}}},*/
                data:_state.data1
            }
        ]
    }

    const option2 = {
        tooltip : {
            trigger: 'axis'
        },
        textStyle:{
            color:"#fff"
        },
        xAxis: {
            type: 'category',
            data:['','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            boundaryGap: false,
            splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['rgba(255, 255, 255, 0.2)']
            }
            },
            axisTick: {
            show: false
                },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            },
            axisLabel: {
            margin: 10,
                textStyle: {
                    fontSize: 14
                }
            }
        },
        yAxis: {
            type: 'value',
                splitLine: {
                    lineStyle: {
                        color: ['rgba(255, 255, 255, 0.2)']
                    }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#609ee9'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            }
        },
        dataZoom: [
            {   // 这个dataZoom组件，默认控制x轴。
                type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                start: 10,      // 左边在 10% 的位置。
                end: 60         // 右边在 60% 的位置。
            }
        ],
        series: [
        {
            name: '报修',
            type: 'line',
            smooth: false,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: _state.repairData,
            areaStyle: {
                normal: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            itemStyle: {
                normal: {
                    color: "rgba(255, 255, 255, 1)",
                    width: 0.5
                }
            },
            lineStyle: {
                
            }
        }, 
        {
            name: '建议',
            type: 'line',
            smooth: false,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: _state.suggestData,
            areaStyle: {
                normal: {
                    color:  'rgba(198,255,217,0.5)'
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(198,255,217,1)',
                    width: 3
                }
            },
            lineStyle: {
        
            }
        },
        {
            name: '问询',
            type: 'line',
            smooth: false,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: _state.angserData,
            areaStyle: {
                normal: {
                    color:  'rgba(255,192,192,0.5)'
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,192,192,1)',
                    width: 3
                }
             },
            lineStyle: {
            
            }
        },
        {
            name: '投诉',
            type: 'line',
            smooth: false,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data:_state.complainData,
            areaStyle: {
                normal: {
                    color:  'rgba(255,240,199,0.5)'
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,240,199,1)',
                    width: 3
                }
            },
            lineStyle: {
                    
            }
        }
      ]
    }
    return (
      <View style={{flex:1}}>
          <TouchableOpacity style={styles.main} onPress={() => {_this.hidePicker()}} activeOpacity={1}>
              <LinearGradient colors={['#8aa0ff','#8db6ff' ]} style={styles.up}>
                      <View style={styles.header}>
                          <View style={styles.leftbar}>
                            <TouchableOpacity style={{flex: 1}} underlayColor='transparent' onPress={() => {_navigator.goBack()}}>
                              <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
                                <Image style={{width: 18, height: 18,}} source={require('../../images/icon_f.png')}></Image>
                              </View>
                            </TouchableOpacity>
                          </View>
                          <View style={styles.titlebar}>
                            <Text style={styles.title}>统计报表</Text>
                          </View>
                          <View style={styles.rightbar}>
                            <View style={[{borderRadius:4,padding:5,position:"absolute",zIndex:100,right:15,top:-10,paddingLeft:5,paddingRight:5},_state.selectPlace?{backgroundColor:"#568fef",}:null]}>
                                <TouchableOpacity  style={styles.dropStyle}
                                        onPress={() => {_this.setState({selectPlace:!_state.selectPlace})}}>
                                        <Text style={[styles.rightbar_font,{marginBottom:1.5},_state.selectPlace?{opacity:0.5}:null]}>{_state.palceValue}</Text>
                                        {_state.selectPlace?
                                            <Image source={require('../../images/icon_e.png')} style={[styles.icon_g,{marginLeft:5}]} />
                                            :
                                            <Image source={require('../../images/icon_g.png')} style={[styles.icon_g,{marginLeft:5}]} />
                                        }
                                </TouchableOpacity>
                                  {
                                    _state.selectPlace?
                                        _state.placeList.length?_state.placeList.map((item,i)=>(
                                            item.name!=_state.palceValue?
                                            <TouchableOpacity key={i} style={{paddingVertical:3}} onPress={()=>_this.getplaceEachart(item,i)}>
                                                <Text style={styles.rightbar_font}>{item.name}</Text>
                                            </TouchableOpacity>:null
                                        )):null:null
                                    }
                               
                            </View>
                          </View>
                      </View>
                               
                  <View style={styles.list_bar}>
                      <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData(1)}>
                          <Text style={_state.types==1?styles.list_bar_f:styles.list_bar_font}>报修</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData(3)}>
                          <Text style={_state.types==3?styles.list_bar_f:styles.list_bar_font}>投诉</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData(4)}>
                          <Text style={_state.types==4?styles.list_bar_f:styles.list_bar_font}>建议</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData(2)}>
                          <Text style={_state.types==2?styles.list_bar_f:styles.list_bar_font}>问询</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData('')}>
                          <Text style={_state.types==''?styles.list_bar_f:styles.list_bar_font}>全部</Text>
                      </TouchableOpacity>
                  </View>

                  <View style={styles.today}>

                        {_state.types!=''?
                        <View style={[{borderRadius:4,padding:5,position:"absolute",zIndex:99,right:15,top:-5},_state.selectDate?{backgroundColor:"#568fef",}:null]}>
                            <TouchableOpacity  style={[styles.dropStyle,{justifyContent:"center"}]}
                                    onPress={() => {_this.setState({selectDate:!_state.selectDate})}}>
                                    <Text style={[styles.rightbar_font,{marginBottom:1.5},_state.selectDate?{opacity:0.5}:null]}>{_state.dateValue}</Text>
                                    {_state.selectDate?
                                        <Image source={require('../../images/icon_e.png')} style={[styles.icon_g,{marginLeft:5}]} />
                                        :
                                        <Image source={require('../../images/icon_g.png')} style={[styles.icon_g,{marginLeft:5}]} />
                                    }
                            </TouchableOpacity>
                                {
                                _state.selectDate?
                                    _state.dateList.length?_state.dateList.map((item,i)=>(
                                        item!=_state.dateValue?
                                        <TouchableOpacity key={i} style={{paddingVertical:3}} onPress={()=>_this.getDateEachart(item)}>
                                            <Text style={styles.rightbar_font}>{item}</Text>
                                        </TouchableOpacity>:null
                                    )):null:null
                                }
                         </View>:
                         <View style={styles.classification}>

                            <View style={[styles.cirle,{backgroundColor:"#fff"}]}></View>
                            <Text style={[styles.classText,{color:"#fff"}]}>报修</Text>

                            <View style={[styles.cirle,{backgroundColor:"#c6ffd9"}]}></View>
                            <Text style={[styles.classText,{color:"#c6ffd9"}]}>建议</Text>

                            <View style={[styles.cirle,{backgroundColor:"#ffc0c0"}]}></View>
                            <Text style={[styles.classText,{color:"#ffc0c0"}]}>投诉</Text>

                            <View style={[styles.cirle,{backgroundColor:"#fff0c7"}]}></View>
                            <Text style={[styles.classText,{color:"#fff0c7"}]}>问询</Text>
                            
                         </View>
                        }
                  </View>

                  <View> 
                    {
                        _state.types!=''? 
                        <Echarts option={option1} height={600*width/750-44} width={width} ref={"Echarts1"}/> 
                        :
                        <Echarts option={option2} height={600*width/750-44} width={width} ref={"Echarts2"}/> 
                    }
                  </View>
              </LinearGradient>

              {
                _state.types==1?
                <View style={styles.down}>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>今日报修</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.repaitContainer.today}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比前一天</Text>
                                <Text style={styles.down_font_c}>{_state.repaitContainer.dayRatio}</Text>
                            </View>
                        </View>
                    </View>
                        <TouchableOpacity style={styles.down_a} onPress={()=>_navigator.navigate("TodayCost",{type:"day"})}>
                            <View style={styles.down_one}>
                            <Text style={styles.down_font}>今日费用</Text>
                            </View>
                            <View style={styles.down_one}>
                            <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.repaitContainer.dayCost}</Text>
                            </View>
                            <View style={styles.down_c}>
                                <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                                <View style={styles.down_b}>
                                    <Text style={styles.down_font_d}>比前一天</Text>
                                    <Text style={styles.down_font_c}>{_state.repaitContainer.dayCostRatio}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>本月报修</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.repaitContainer.thisMonth}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比上月</Text>
                                <Text style={styles.down_font_c}>{_state.repaitContainer.monthRatio}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.down_a}  onPress={()=>_navigator.navigate("TodayCost",{type:"month"})}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>本月费用</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.repaitContainer.monthCost}</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比上月</Text>
                                <Text style={styles.down_font_c}>{_state.repaitContainer.monthCostRatio}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                :_state.types==3?
                <View style={styles.down}>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>今日投诉</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.otherContainer.today}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比前一天</Text>
                                <Text style={styles.down_font_c}>{_state.otherContainer.dayRatio}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>本月投诉</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.otherContainer.thisMonth}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比上月</Text>
                                <Text style={styles.down_font_c}>{_state.otherContainer.monthRatio}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>本季度投诉</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.otherContainer.thisQuarter}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比上季度</Text>
                                <Text style={styles.down_font_c}>{_state.otherContainer.quarterRatio}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>本年投诉</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.otherContainer.thisYear}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比去年</Text>
                                <Text style={styles.down_font_c}>{_state.otherContainer.yearRatio}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                :_state.types==4?
                <View style={styles.down}>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>今日建议</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.otherContainer.today}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比前一天</Text>
                                <Text style={styles.down_font_c}>{_state.otherContainer.dayRatio}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>本月建议</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.otherContainer.thisMonth}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比上月</Text>
                                <Text style={styles.down_font_c}>{_state.otherContainer.monthRatio}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>本季度建议</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.otherContainer.thisQuarter}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比上季度</Text>
                                <Text style={styles.down_font_c}>{_state.otherContainer.quarterRatio}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>本年建议</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.otherContainer.thisYear}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比去年</Text>
                                <Text style={styles.down_font_c}>{_state.otherContainer.yearRatio}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                :_state.types==2?
                <View style={styles.down}>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>今日问询</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.otherContainer.today}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比前一天</Text>
                                <Text style={styles.down_font_c}>{_state.otherContainer.dayRatio}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>本月问询</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.otherContainer.thisMonth}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比上月</Text>
                                <Text style={styles.down_font_c}>{_state.otherContainer.monthRatio}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>本季度问询</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.otherContainer.thisQuarter}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比上季度</Text>
                                <Text style={styles.down_font_c}>{_state.otherContainer.quarterRatio}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>本年问询</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.otherContainer.thisYear}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比去年</Text>
                                <Text style={styles.down_font_c}>{_state.otherContainer.yearRatio}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                :
                <View style={styles.down}>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>今日报修</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.allContainer.reapir}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比前一天</Text>
                                <Text style={styles.down_font_c}>{_state.allContainer.repairRatio}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>今日投诉</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.allContainer.complaint}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比前一天</Text>
                                <Text style={styles.down_font_c}>{_state.allContainer.complaintRatio}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>今日建议</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.allContainer.suggestion}单</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比前一天</Text>
                                <Text style={styles.down_font_c}>{_state.allContainer.suggestionRatio}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.down_a}>
                        <View style={styles.down_one}>
                          <Text style={styles.down_font}>今日问询</Text>
                        </View>
                        <View style={styles.down_one}>
                          <Text style={[styles.down_font_a,{textAlign:'center'}]}>{_state.allContainer.inquiries}</Text>
                        </View>
                        <View style={styles.down_c}>
                            <Image source={require('../../images/icon_b.png')} style={styles.down_icon} />
                            <View style={styles.down_b}>
                                <Text style={styles.down_font_d}>比前一天</Text>
                                <Text style={styles.down_font_c}>{_state.allContainer.inquiriesRatio}</Text>
                            </View>
                        </View>
                    </View>
                </View>
              }
          </TouchableOpacity>
      </View>
    );
  }

  _showTimePicker() {
    let oldYear = [],
        newYear = [],
        yearWord = ["年"],
        oldMonths = [],
        newMonths = [],
        monthsWord = ["月"],
        oldDays = [],
        newDays = [],
        dayssWord = ["日"],
        connect = ["~"],
        between =new Date().getFullYear()-2014,
        nowMonth = new Date().getMonth()+2;
    for(let i=0;i<between;i++){
        oldYear.push(i+2015);
        newYear.push(i+2015);
    }
    for(let i=1;i<13;i++){
        oldMonths.push(i);
        newMonths.push(i);
    }
    for(let i=1;i<32;i++){
        oldDays.push(i);  
        newDays.push(i);
    }
    let pickerData =[oldYear,yearWord, oldMonths,monthsWord, oldDays,dayssWord,connect,newYear,yearWord,newMonths,monthsWord,newDays,dayssWord]
    let date = new Date();
    console.log(pickerData)
    console.log("wo lai show le ")
    Picker.init({
        pickerData,
        pickerConfirmBtnText:"完成",
        pickerCancelBtnText:"取消",
        pickerCancelBtnColor:[153,153,153,1],
        pickerConfirmBtnColor:[71,145,255,1],
        pickerToolBarBg:[247,247,249,1],
        pickerBg:[246,246,246,1],
        pickerFontSize:13,
        selectedValue:[date.getFullYear(),"年",date.getMonth()+1,"月",date.getDate(),"日",4,date.getFullYear(),"年",date.getMonth()+1,"月",date.getDate(),"日"],
        pickerTitleText: '选择时间段',
        wheelFlex: [15,7,10,7,10,7,10,15,7,10,7,10,10],
        onPickerConfirm: pickedValue => {
            console.log( pickedValue);
            let first = pickedValue.join('').split("~")[0].replace(/年|月/g, "/").replace(/日/g,"")
            let second =pickedValue.join('').split("~")[1].replace(/年|月/g, "/").replace(/日/g,"")
            console.log(first)
            console.log(second)
            _this.setState({
                startTime:first,
                endTime:second
            })
            reportHistogram({projectId:_state.projectId,type:_state.types,dateType:_state.dateType,startTime:first,endTime:second},_this.getHistogram)
        },
        onPickerCancel: pickedValue => {
            _this.hidePicker()
        },
        onPickerSelect: pickedValue => {
            let targetValue = [...pickedValue];
            if(parseInt(targetValue[2]) === 2){
                if(targetValue[0]%4 === 0 && targetValue[4] > 29){
                    ToastAndroid.show("本月只有29天，请选择29号",ToastAndroid.SHORT)
                    targetValue[4] = 29;
                }
                else if(targetValue[0]%4 !== 0 && targetValue[4] > 28){
                    ToastAndroid.show("本月只有28天，请选择28号",ToastAndroid.SHORT)
                    targetValue[4] = 28;
                }
            }
            if(parseInt(targetValue[9]) === 2){
                if(targetValue[7]%4 === 0 && targetValue[11] > 29){
                    ToastAndroid.show("本月只有29天，请选择29号",ToastAndroid.SHORT)
                    targetValue[11] = 29;
                }
                else if(targetValue[7]%4 !== 0 && targetValue[11] > 28){
                    ToastAndroid.show("本月只有28天，请选择28号",ToastAndroid.SHORT)
                    targetValue[11] = 28;
                }
            }

            if(targetValue[2] in {4:1, 6:1, 9:1, 11:1} && targetValue[4] > 30){
                ToastAndroid.show("本月只有30天，请选择30号",ToastAndroid.SHORT)
                targetValue[4] = 30;                         
            }
            if(targetValue[9] in {4:1, 6:1, 9:1, 11:1} && targetValue[11] > 30){
                ToastAndroid.show("本月只有30天，请选择30号",ToastAndroid.SHORT)
                targetValue[11] = 30;
            }
            var firstSelect = new Date(targetValue.join('').split("~")[0].replace(/年|月/g, "/").replace(/日/g,""))
            var secondSelect = new Date(targetValue.join('').split("~")[1].replace(/年|月/g, "/").replace(/日/g,""))
            if(firstSelect>secondSelect){
                targetValue[7]=targetValue[0];
                targetValue[9]=targetValue[2];
                targetValue[11]=targetValue[4];
                ToastAndroid.show("您选择的时间段有误，请重新选择",ToastAndroid.SHORT)
            }
   
            // forbidden some value such as some 2.29, 4.31, 6.31...
            if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
                // android will return String all the time，but we put Number into picker at first
                // so we need to convert them to Number again
                targetValue.map((v, k) => {
                    if(k !== 3){
                        targetValue[k] = parseInt(v);
                    }
                });
                Picker.select(targetValue);
                pickedValue = targetValue;
            }
           
        }
    });
    Picker.show();
}


};


