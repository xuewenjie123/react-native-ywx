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
img:{
  width:width-60*width/750,
  height:width*260/750,
  backgroundColor:'#ffffff',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:5,
  marginTop:10
},
img_person:{
  width:152*width/750,
  height:152*width/750,
  alignItems: 'center',
  justifyContent:'center',
  borderRadius:76*width/750,
},
img_a:{
  width:140*width/750,
  height:140*width/750,
  borderRadius:70*width/750,
},
img_font:{
  lineHeight:32*width/750,
  fontSize:30*width/750,
  color:'#999999',
  marginTop:10,
},
img_b:{
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
},
middle:{
  height:width*302/750,
  width:width-60*width/750,
  borderRadius:5,
  backgroundColor:'#ffffff',
  marginTop:10,
},
middle_a:{
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginRight:30*width/750,
  marginLeft:30*width/750,
},
middle_line:{
  borderBottomWidth:1,
  borderColor:'#ddd',
  marginRight:30*width/750,
  marginLeft:30*width/750,
},
icon_a:{
  height:10,
  width:10,
},
middle_b:{
  flex:1,
  flexDirection:'row-reverse',
  alignItems:'center',
},
right:{
  flexDirection:'row',
  alignItems:'center',
},
PickerBox:{
},
middle_font:{
  fontSize:13,
  color:'#999999',
  marginRight:10,
  textAlign:"right",
},
middle_input:{
  flex:1,
  height: 80*width/750,
  fontSize:13,
  color:'#999999',
  textAlign:"right",
},


});

module.exports = styles
