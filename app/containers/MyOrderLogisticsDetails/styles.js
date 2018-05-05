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
   list_up:{
     width:width,
     height:110,
     padding:15,
     flexDirection:'row',
     marginTop:10,
     backgroundColor:'#ffffff'
   },
   list_up_right:{
     flex:1,
     marginLeft:10,
   },
   list_font:{
     color:'#303030',
     fontSize:15,
     margin:0,
     padding:0,
   },
   list_font_a:{
     color:'#999999',
     fontSize:15,
     margin:0,
     padding:0,
   },
   list_font_b:{
     color:'#999999',
     fontSize:13,
     margin:0,
     padding:0,
   },
   list_font_c:{
     color:'#303030',
     fontSize:13,
     margin:0,
     padding:0,
   },
   list_font_d:{
     color:'#999999',
     fontSize:12,
     margin:0,
     padding:0,
   },
   list_font_e:{
     color:'#5986ff',
     fontSize:15,
     margin:0,
     padding:0,
   },
   list_up_line:{
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     marginTop:5,
   },
   list_middle:{
     flex:1,
     width:width,
     paddingLeft:15,
     paddingRight:15,
     alignItems:'center'
   },
   list_kong:{
      width:width,
      height:10,
      backgroundColor:'#f7f8fc',
   },
   list_middle_a:{
     width:width-30,
     height:45,
     justifyContent:'center',
     borderBottomColor:'#dddddd',
     borderBottomWidth:1,
   },

   yuan:{
     width:12,
     height:12,
     borderRadius:6,
     backgroundColor:'#999999',
     marginRight:25,
     borderWidth:2,
     borderColor:'#ffffff',
     position:'absolute',
     top:4,
     left:0
   },
   yuan_a:{
     width:12,
     height:12,
     borderRadius:6,
     backgroundColor:'#ffffff',
     borderWidth:2.5,
     borderColor:'#5986ff',
     marginRight:25,
     position:'absolute',
     top:4,
     left:0
   },


   list_middle_box:{
     width:width-60,
     flex:1,
     paddingTop:15,
   },
   list_middle_b:{
     height:119,
     width:width-60,
     position:'relative'
   },
   list_middle_b_a:{
     height:80,
     width:width-60,
     position:'relative'
   },
   list_info:{
     width:width-97,
     height:119,
     marginLeft:37,
   },
   list_line:{
     width:1,
     height:100,
     borderLeftWidth:1,
     borderLeftColor:'#999999',
     position:'absolute',
     left:5,
     bottom:0,
   },
   list_middle_one:{
     flexDirection:'row',
     height:16,
     alignItems:'center'
   }



});

module.exports = styles
