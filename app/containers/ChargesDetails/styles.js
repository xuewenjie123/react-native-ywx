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
   list_cost_box:{
     width:width-30,
     backgroundColor:'#ffffff',
     paddingLeft:15,
     paddingRight:15,
     flexDirection:'column',
     marginTop:10,
     borderRadius:10,
     marginBottom:10,
   },
   list_cost_a:{
     height:44,
     width:width-30,
     flexDirection:'row',
     borderBottomWidth:1,
     borderBottomColor:'#dddddd',
     alignItems:'center'
   },
   list_cost_b:{
     width:width-30,
     paddingTop:15,
     paddingBottom:15
   },
   list_cost_d:{
     flexDirection:'column',
   },
   list_cost_g:{
     flexDirection:'row',
   },
   list_cost_f:{
     flexDirection:'column',
     paddingTop:10,
     paddingBottom:10
   },
   list_cost_e:{
     flexDirection:'row',
     height:25,
     alignItems:'center',
   },
   list_font_h:{
     fontSize:13,
     color:'#999999',
     lineHeight:20,
     height:20,
     alignItems:'center'
   },
   list_font_i:{
     fontSize:15,
     color:'#303030',
     lineHeight:20,
   },
   list_line:{
     borderBottomWidth:1,
     borderColor:'#dddddd',
   },
   list_font_a:{
     fontSize:15,
     color:'#303030',
     margin:0,
     padding:0,
   },
   list_font_b:{
     fontSize:13,
     color:'#999999'
   },
   list_font_d:{
     fontSize:15,
     color:'#ef5b5b'
   },

});

module.exports = styles
