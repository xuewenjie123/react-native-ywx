'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import Dimensions from 'Dimensions';
let { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
     flex: 1,
     flexDirection:'column',
     alignItems: 'center',
     width:width,
     height:height,
     backgroundColor:'#f7f8fc',
     position:'relative',
   },
list_box:{
     width:width-30,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
},
list_a:{
  width:width-67,
  minHeight:87,
  paddingTop:15,
  paddingBottom:15,
  flexDirection:'column',
  position:'relative',
  marginTop:10,
  backgroundColor:'#ffffff',
  borderRadius:10,
  paddingLeft:10,
  paddingRight:10,
},
list_up:{
  flexDirection:'row',
  height:12,
},
list_font:{
  fontSize:12,
  color:'#999999',
  margin:0,
  padding:0,
  lineHeight:12,
},
list_font_a:{
  fontSize:12,
  color:'#999999',
  margin:0,
  padding:0,
  position:'absolute',
  top:14,
  right:10,
},
list_font_d:{
  fontSize:12,
  color:'#edaf37',
  margin:0,
  padding:0,
  position:'absolute',
  top:14,
  right:10,
},
list_font_e:{
  fontSize:12,
  color:'#5bdba6',
  margin:0,
  padding:0,
  position:'absolute',
  top:14,
  right:10,
},
list_font_b:{
  fontSize:13,
  color:'#303030',
  margin:0,
  padding:0,
  lineHeight:15,
},
list_middle:{
  height:13,
  width:width-60,
  flexDirection:'row',
  alignItems:'center',
},
list_font_c:{
  fontSize:13,
  color:'#999999',
  margin:0,
  padding:0,
  lineHeight:13,
},
load_img:{
  width:144,
  height:114,
  marginTop:150,
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
},
kong:{
  height:22,
  width:22,
  borderColor:'#dddddd',
  borderWidth:1,
  borderStyle:'dashed',
  borderRadius:11,
}


});

module.exports = styles
