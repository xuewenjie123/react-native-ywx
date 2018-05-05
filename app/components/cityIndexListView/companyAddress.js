'use strict';
import React, { Component, } from 'react';
import {StyleSheet, ListView,View, TouchableOpacity,Image,Text,Modal} from 'react-native';
import Constants from '../../constant/constants'
import { width, height } from '../../components/common/Dimensions';
var _navigator,_state,_this,_props;
export default class CityIndexListView extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
        this.state = {
          dataSource: ds.cloneWithRows(Constants.regionoptions),
          list_a_key:'',
          list_b_key:'',
          list_c_key:'',
          city:ds,
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
          area:ds
        };
     }
     componentWillReceiveProps(newProps){
       if(newProps.cityId !== _state.cityId){
             for(let i=0;i<Constants.regionoptions.length;i++){
               if(Constants.regionoptions[i].value==this.props.provinceId){
                _this.setState({
                  list_a_key:i,
                  placeText:Constants.regionoptions[i].label,
                })
                for(let j=0;j<Constants.regionoptions[i].children.length;j++){
                  if(Constants.regionoptions[i].children[j].value==this.props.cityId){
                    _this.setState({
                      list_b_key:j,
                      cityText:Constants.regionoptions[i].children[j].label,
                    })
                  }
               }
             }
           }
           _this.setState({
             placeMenu:true,
             cityMenu:true,
           })
       }
     }

     selectPlace(id,content){
       _this.setState({
         cityShow:true,
         placeShow:false,
         cityMenu:true,
         placeText:content.label,
         list_b_key:'',
         list_a_key: id,
         city:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(content.children),
         dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(Constants.regionoptions),
       })
     }

     selectTwo(id,content){
        _this.setState({
          list_b_key: id,
          areaText:content.label
        })
      var proval=Constants.regionoptions[_state.list_a_key].value;
      var cityval=Constants.regionoptions[_state.list_a_key].children[id].value;
      var place=_state.placeText+content.label;
      _props.getPalceSelect(place,proval,cityval)
     }
    
     _renderRowOne(rowContent,sectionID,rowID){
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
  
     changeStateOne(){
       _this.setState({
         cityShow:false,
         placeShow:true,
       })
     }
     changeStateTwo(){
       _this.setState({
         city:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(Constants.regionoptions[_state.list_a_key].children),
         cityShow:true,
         placeShow:false,
         areaText:"请选择",
       })
       _this.setState({
        area:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(Constants.regionoptions[_state.list_a_key].children)
        })
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
          
             </View>

            <View style={{height:200,}}>
              <View style={styles.containerBox}>
              {
                _state.placeShow?
                <ListView
                style={{width:width}}
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRowOne}
                  initialListSize={10}
                  contentContainerStyle={styles.container}
                />
                :
                null
              }

               {
                 _state.cityShow?
                   <ListView
                   style={{width:width}}
                     dataSource={_state.city}
                     renderRow={this._renderRowTwo}
                     initialListSize={10}
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
