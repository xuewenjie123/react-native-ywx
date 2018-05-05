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
   },
list_box:{
  width:width-30,
  backgroundColor:'#ffffff',
  marginTop:10,
  borderRadius:10,

},
list_a:{
  height:50,
  flexDirection:'row',
  marginLeft:15,
  marginRight:15,
  alignItems:'center',
  justifyContent:'space-between',
},
list_line:{
  borderWidth:0.5,
  borderColor:'#dddddd',
  marginLeft:15,
  marginRight:15,
},
list_font:{
  fontSize:15,
  color:'#303030',
  lineHeight:18,
},
list_font_a:{
  fontSize:13,
  color:'#999999',
  lineHeight:18,
},
list_box_a:{
  width:width-30,
},
list_font_b:{
  fontSize:13,
  color:'#5986ff',
  lineHeight:18,
  marginTop:10,
  marginLeft:15,
},
});

module.exports = styles
