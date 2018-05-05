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
header_box:{
    height:44+StatusBar.currentHeight,
    backgroundColor:'#ffffff',
    marginBottom:10,
},
header:{
     position:'relative',
     marginTop:StatusBar.currentHeight,
     width:width,
     height:44,
     alignItems:'center',
     justifyContent:'center',
  },
icon_b:{
  position:'absolute',
  left:15,
  top:14,
  height:15,
  width:15,
},
header_font:{
    fontSize:15,
    color:'#303030',
},
up_box:{
  width:width,
  height:185,
  flexDirection:'column',
  alignItems:'center',
  marginTop:10
},
up_font:{
  fontSize:13,
  color:'#999999',
  lineHeight:15,
},
middle_box:{
  height:95,
  width:244,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
middle_no_box:{
  flex:1,
  height:34,
  width:34,
  borderRadius:5,
  borderWidth:1,
  borderColor:'#dddddd',
  marginLeft:13,
  marginRight:13,
},
middle_num_box:{
  flex:1,
  height:34,
  width:34,
  borderRadius:5,
  borderWidth:1,
  borderColor:'#5986ff',
  marginLeft:13,
  marginRight:13,
},
middle_input:{
  fontSize:13,
  lineHeight:14,
  color:'#5986ff',
  textAlign:"center",
  padding:0,
},

down_box:{
  flexDirection:'row'
},
down_time:{
  fontSize:13,
  color:'#5986ff',
  lineHeight:15,
},
button_box:{
  height:40,
  width:309,
  borderRadius:10,
},
button_font:{
  fontSize:13,
  color:'#ffffff',
},


});

module.exports = styles
