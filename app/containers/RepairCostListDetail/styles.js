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
detail_a:{
  marginBottom:15,
  paddingTop:15,
  marginLeft:15,
  marginRight:15,
},
detail_b:{
  marginBottom:15,
  borderTopWidth:1,
  borderColor:'#999999',
  paddingTop:15,
  marginLeft:15,
  marginRight:15,
},
list_a:{
  width:width,
  paddingTop:15,
  paddingBottom:15,
  flexDirection:'column',
  marginTop:10,
  // marginBottom:10,
  backgroundColor:'#ffffff',
  paddingLeft:15,
  paddingRight:15
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
  fontSize:13,
  color:'#999999',
  margin:0,
  padding:0,
  lineHeight:13,
  position:'absolute',
  top:14,
  right:15,
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
},
repair_loadbox:{
  flexDirection:'column',
  alignItems:'center',
  width:width,
  justifyContent:'center'
},
load_text:{
  fontSize:13,
  color:'#999999'
}
});

module.exports = styles
