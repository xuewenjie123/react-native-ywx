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
  flexDirection:'row',
  height:50,
  width:width-30,
  backgroundColor:'#ffffff',
  borderRadius:5,
  justifyContent:'space-between',
  alignItems:'center',
  marginTop:10
},
up_font:{
    fontSize:15,
    color:'#303030',
    marginLeft:15,
},
up_font_a:{
    fontSize:13,
    color:'#999999',
    marginRight:15,
    flex:1
},
up_font_b:{
    fontSize:13,
    color:'#5986ff',
    marginLeft:15,
    lineHeight:14,
},
up_box_a:{
  flexDirection:'row',
  height:14,
  width:width-30,
  marginTop:10,
},
up_font_c:{
  fontSize:13,
  color:'#ffffff',
},
up_box_b:{
  height:40,
  width:309,
  borderRadius:5,
  marginTop:50,
},


});

module.exports = styles
