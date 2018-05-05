'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import Dimensions from 'Dimensions';
let { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
     position:'relative',
     flex: 1,
     flexDirection:'column',
     alignItems: 'center',
     width:width,
     height:height,
     backgroundColor:'#f7f8fc',
   },
list_box:{
  flex:1,
  marginTop:10,
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  width:width-30,
  backgroundColor:'#ffffff',
  paddingBottom:10,
},
list_a:{
  height:63,
  width:width-60,
  paddingTop:10,
  paddingBottom:10,
  flexDirection:'column',
},
line:{
  borderBottomWidth:1,
  borderBottomColor:'#dddddd'
},
list_up:{
  height:25,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center'
},
list_font:{
  fontSize:15,
  color:'#303030',
},
list_font_a:{
  fontSize:13,
  color:'#999999',
},
list_font_b:{
  fontSize:12,
  color:'#999999',
  marginBottom:10,
},

});

module.exports = styles
