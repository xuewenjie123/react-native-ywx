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
   list_bar:{
     height:50,
     width:width,
     flexDirection:'row',
     backgroundColor:'#ffffff'
   },
   list_bar_line:{
     width:width,
     flexDirection:'row',
     backgroundColor:'#ffffff',
     justifyContent:'space-between',
   },
   list_bar_a:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   },
   list_line:{
     width:80,
     height:1,
     borderBottomWidth:2,
     borderColor:'#5986ff',
   },
   list_line_a:{
     width:80,
     height:1,
     borderBottomWidth:2,
     borderColor:'#ffffff',
   },
   list_bar_f:{
     fontSize:15,
     color:'#5986ff'
   },
   list_bar_font:{
     fontSize:15,
     color:'#999999'
   },
 list_box:{
      position:'absolute',
      top:79,
      bottom:10,
      width:width,
      flexDirection:'column',
      alignItems:'center'
 },
 list_a:{
   width:width-30,
   height:93,
   paddingTop:15,
   paddingBottom:15,
   flexDirection:'column',
   position:'relative',
   marginTop:10,
   backgroundColor:'#ffffff',
   borderRadius:10,
   paddingLeft:15,
   paddingRight:15
 },
 list_up:{
   flexDirection:'row',
   justifyContent:'space-between',
 },
 list_font:{
   fontSize:15,
   color:'#303030',
   margin:0,
   padding:0,
   lineHeight:16,
 },
 list_font_a:{
   fontSize:15,
   color:'#ef5b5b',
   margin:0,
   padding:0,
   lineHeight:16,
 },
 list_font_d:{
   fontSize:13,
   color:'#edaf37',
   margin:0,
   padding:0,
   lineHeight:13,
   position:'absolute',
   top:14,
   right:15,
 },
 list_font_e:{
   fontSize:13,
   color:'#5bdba6',
   margin:0,
   padding:0,
   lineHeight:13,
   position:'absolute',
   top:14,
   right:15,
 },
 list_font_b:{
   fontSize:12,
   color:'#999999',
   margin:0,
   padding:0,
   lineHeight:13,
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
 }




});

module.exports = styles
