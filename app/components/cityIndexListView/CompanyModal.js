'use strict';
import React, { Component, } from 'react';
import {StyleSheet, ListView,View, TouchableOpacity,Image,Text,Modal} from 'react-native';
import { width, height } from '../../components/common/Dimensions';
var _navigator,_state,_this,_props;
import { getBuildingsByProjectId,getRoomsByBuildingId } from "../../services/MyCompany"
export default class companyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(this.props.projectList),
          list_a_key:'',
          list_b_key:'',
          list_c_key:'',
          city:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}),
          visible:false,
          placeText:"请选择",
          cityText:"请选择",
          areaText:"请选择",
          placeShow:true,
          cityShow:false,
          areaShow:false,
          placeMenu:true,
          cityMenu:false,
          areaMenu:false,
          area:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}),
          countyId:this.props.countyId,
          BuildList:[],
          RoomList:[]
        };
     }
     componentWillReceiveProps(newProps){
       console.log(newProps)
       _this.setState({
         dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(_this.props.projectList)
       })
       if(newProps.countyId !== _state.countyId){
             for(let i=0;i<_this.props.projectList.length;i++){
               if(_this.props.projectList[i].value==this.props.provinceId){
                _this.setState({
                  list_a_key:i,
                  placeText:_this.props.projectList[i].label,
                })
              }
            }

              for(let j=0;j<_state.BuildList.length;j++){
                if(_state.BuildList[j].value==this.props.cityId){
                  _this.setState({
                    list_b_key:j,
                    cityText:_state.BuildList[j].label,
                  })
                }
              }

              for(let k=0;k<_state.RoomList.length;k++){
                  if(_state.RoomList[k].value==this.props.countyId){
                    _this.setState({
                      list_c_key:k,
                      areaText:_state.RoomList[k].label,
                    })

                  }
              }
           _this.setState({
             placeMenu:true,
             cityMenu:true,
             areaMenu:true,
           })
       }
     }
     getBuild(result){
       if(result.success){
        _this.setState({
          BuildList:result.data,
          city:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(result.data),
          dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(_this.props.projectList)
         })
       }
     }
     getRooms(result){
      if(result.success){
        _this.setState({
          city:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(_state.BuildList),
          RoomList:result.data,
          area:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(result.data)
         })
       }
     }
     selectPlace(id,content){
       getBuildingsByProjectId(content.value,_this.getBuild)
       _this.setState({
         cityShow:true,
         placeShow:false,
         areaShow:false,
         cityMenu:true,
         areaMenu:false,
         areaText:"请选择",
         placeText:content.label,
         list_b_key:'',
         list_a_key: id,
       })
       
     }

     selectTwo(id,content){
      getRoomsByBuildingId(content.value,_this.getRooms)
       _this.setState({
         areaShow:true,
         cityShow:false,
         placeShow:false,
         areaMenu:true,
         cityText:content.label,
         list_b_key: id,
         list_c_key:'',
       })
     }
     selectThree(id,content){
       
       _this.setState({
         list_c_key: id,
         areaText:content.label,
         area:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(_state.RoomList),
       })
       var proval=_this.props.projectList[_state.list_a_key].value;
       var cityval=_state.BuildList[_state.list_b_key].value;
       var counval=_state.RoomList[id].value;
       var place=_state.placeText+_state.cityText+content.label;
       _props.getPalceSelect(place,proval,cityval,counval)
     }
     _renderRowOne(rowContent,sectionID,rowID){
       console.log(rowContent)
       return(
           <TouchableOpacity style={styles.labels} key={rowID} onPress={()=>_this.selectPlace(rowID,rowContent)}>
                <Text style={_state.list_a_key == rowID?styles.ltAtext:styles.lt_text}>{rowContent.label}</Text>
           </TouchableOpacity>
       )
     }
     _renderRowTwo(rowContent,sectionID,rowID){
       return(
           <TouchableOpacity style={styles.labels} key={rowID} onPress={()=>_this.selectTwo(rowID,rowContent)}>
                <Text style={_state.list_b_key == rowID?styles.ltAtext:styles.lt_text} numberOfLines={1}>{rowContent.label}</Text>
           </TouchableOpacity>
       )
     }
     _renderRowThree(rowContent,sectionID,rowID){
       return(
           <TouchableOpacity style={styles.labels} key={rowID} onPress={()=>_this.selectThree(rowID,rowContent)}>
                <Text style={_state.list_c_key == rowID?styles.ltAtext:styles.lt_text} numberOfLines={1}>{rowContent.label}</Text>
           </TouchableOpacity>
       )
     }
     changeStateOne(){
       _this.setState({
         areaShow:false,
         cityShow:false,
         placeShow:true,
       })
     }
     changeStateTwo(){
       _this.setState({
         city:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(_state.BuildList),
         areaShow:false,
         cityShow:true,
         placeShow:false,
         areaText:"请选择",
       })
     }
     changeStateThree(){
       _this.setState({
         city:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(_state.BuildList),
         areaShow:true,
         cityShow:false,
         placeShow:false,
         areaText:"请选择",
       })
       if(_state.RoomList[_state.list_b_key]){
         _this.setState({
            area:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(_state.RoomList)
         })
       }
     }

     render(){
       _this=this;
       _state=this.state;
       _props=this.props;
       _navigator=this.props.navigation;
       return(
         <Modal
           animationType="slide"
           transparent={true}
           visible={_props.visible}
           onRequestClose={() => {_props.closeModal()}}
           >
             <View style={{position: 'absolute', width: width, height: height, backgroundColor: "#000", opacity: .3,}}>
               <TouchableOpacity style={{flex:1}} onPress={() => {_props.closeModal()}}>
               </TouchableOpacity>
             </View>
           <View style={{flex:1,height:300,position:"absolute",bottom:0,backgroundColor:'#ffffff'}}>
               <View style={{height:50,width:width,flexDirection: 'row',alignItems: 'center',justifyContent:"space-between",borderBottomWidth:0.5,borderColor:"#ccc"}}>
                   <View style={{flex:1}}>
                   </View>
                   <View style={{flex:1,alignItems:"center",}}>
                     <Text style={{fontSize:20,color:"#222"}} numberOfLines={1}>所在地区</Text>
                   </View>
                   <TouchableOpacity style={{flex:1,alignItems:"flex-end",}} onPress={()=>{_props.closeModal()}}>
                     <Text style={{fontSize:30,color:"#ccc",marginRight:12}} numberOfLines={1}>×</Text>
                   </TouchableOpacity>
               </View>

             <View style={{height:50,width:width,paddingLeft:24,flexDirection: 'row',borderBottomWidth:0.5,borderColor:"#ddd"}}>
                  <View style={{flex:1}}>
                   <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"flex-start"}} onPress={()=>_this.changeStateOne()}>
                      <View style={_state.placeShow?{height:50,justifyContent:"center",borderColor:'#5986ff',borderBottomWidth:2,}:{height:50,justifyContent:"center",}}>
                        <Text style={_state.placeShow?{fontSize:15,color:'#5986ff'}:styles.lt_text} numberOfLines={1}>{_state.placeText}</Text>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                  {_state.cityMenu?
                    <TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"flex-start"}} onPress={()=>_this.changeStateTwo()}>
                        <View style={_state.cityShow?{height:50,justifyContent:"center",borderColor:'#5986ff',borderBottomWidth:2,}:{height:50,justifyContent:"center",}}>
                          <Text style={_state.cityShow?{fontSize:15,color:'#5986ff'}:styles.lt_text} numberOfLines={1}>{_state.cityText}</Text>
                        </View>
                     </TouchableOpacity>
                    :null}
                </View>
                <View style={{flex:1}}>
                  {
                    _state.areaMenu?<TouchableOpacity style={{flex:1,justifyContent:"center",alignItems:"flex-start"}} onPress={()=>_this.changeStateThree()}>
                       <View style={_state.areaShow?{borderColor:'#5986ff',borderBottomWidth:2,height:50,justifyContent:"center"}:{height:50,justifyContent:"center",}}>
                         <Text style={_state.areaShow?styles.ltAtext:styles.lt_text} numberOfLines={1}>{_state.areaText}</Text>
                        </View>
                     </TouchableOpacity>
                    :null
                  }
                </View>




             </View>

            <View style={{height:200,}}>
              <View style={styles.containerBox}>
              {
                _state.placeShow?
                
                <ListView
                 style={{width:width}}
                  dataSource={_state.dataSource}
                  renderRow={_this._renderRowOne.bind(this)}
                  initialListSize={10}
                  contentContainerStyle={styles.container}
                  enableEmptySections={true}
                />
                :
                null
              }

               {
                 _state.cityShow?
                   <ListView
                   style={{width:width}}
                     dataSource={_state.city}
                     renderRow={_this._renderRowTwo.bind(this)}
                     initialListSize={10}
                     enableEmptySections={true}
                     contentContainerStyle={styles.container}
                   />
                 :null
               }
               {
                 _state.areaShow?

                   <ListView
                    style={{width:width}}
                     dataSource={_state.area}
                     renderRow={_this._renderRowThree.bind(this)}
                     initialListSize={10}
                     enableEmptySections={true}
                     contentContainerStyle={styles.container}
                   />

                 :null
               }

                      </View>
                    </View>
                 </View>
          </Modal>

       )
     }
   }
   const styles = StyleSheet.create({
     main: {
       flex: 1,
       backgroundColor: '#f7f8fc',
       flexDirection: 'column',
       alignItems:"center",
     },
     labels:{
       height:40,
       justifyContent:"center",
       flex:1,
       alignItems:"flex-start"
     },
     lt_text:{
       fontSize:15,
       color:'#303030',
     },
     ltAtext:{
       fontSize:15,
       color:'#5986ff',
     },
     container:{
       paddingLeft:24,
     },
     containerBox:{
       alignItems:"flex-start",
       flex:1,
     },

   });
