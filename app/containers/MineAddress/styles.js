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
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  width:width,
  position:'absolute',
  top:79,
  bottom:50,
  paddingBottom:10,
},
list_a:{
  backgroundColor:'#ffffff',
  width:width-30,
  paddingTop:10,
  paddingLeft:15,
  paddingRight:15,
  flexDirection:'column',
  marginTop:10,
  borderRadius:10,
},
list_up:{
  height:25,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
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
list_line:{
  borderBottomWidth:1,
  borderColor:'#dddddd',
  marginTop:10,
},
list_set:{
  height:45,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between'
},
list_set_a:{
  height:45,
  flexDirection:'row',
  alignItems:'center',
},
address_a:{
  width:15,
  height:15,
  marginRight:5,
},
address_c:{
  width:17,
  height:17,
  marginRight:5,
},
list_set_font:{
  fontSize:13,
  color:'#999999',
  lineHeight:15,
},
button_box:{
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
  flex:1,
},
add:{
  position:'absolute',
  bottom:0,
  height:50,
  width:width,
},
button_font:{
  fontSize:15,
  color:'#ffffff',
},
load_img:{
  width:132,
  height:165,
  marginTop:100,
  marginBottom:15
},
repair_loadbox:{
  flexDirection:'column',
  alignItems:'center',
  width:width
},
load_text:{
  fontSize:13,
  color:'#999999'
}


});

module.exports = styles
