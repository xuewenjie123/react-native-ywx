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
 list:{
   width:width,
   flexDirection:'row',
   flexWrap:'wrap',
   paddingLeft:10,
   paddingRight:10,
   marginTop:10,
 },
 button:{
   width:(width-60)/4,
   height:25,
   justifyContent:'center',
   alignItems:'center',
   borderWidth:1,
   borderColor:'#dddddd',
   borderRadius:2,
   borderStyle:'dashed',
   marginLeft:5,
   marginRight:5,
   marginBottom:10
 },
 button_a:{
   width:(width-60)/4,
   height:25,
   justifyContent:'center',
   alignItems:'center',
   marginLeft:5,
   marginRight:5,
   borderRadius:2,
   marginBottom:10
 },
 list_font:{
   fontSize:13,
   color:'#ffffff'
 },
 list_font_a:{
   fontSize:13,
   color:'#999999'
 }
});

module.exports = styles
