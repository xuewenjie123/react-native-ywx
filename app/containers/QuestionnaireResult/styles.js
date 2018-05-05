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
   main_a:{
     flex: 1,
     flexDirection:'column',
     alignItems: 'center',
     width:width,
     backgroundColor:'#ffffff',
     marginTop:10,
   },
   list:{
     width:width,
     flex:1,
     paddingLeft:15,
     paddingRight:15,
     paddingTop:15,
     backgroundColor:'#ffffff',
     paddingBottom:15,
   },
   list_font:{
     fontSize:15,
     color:'#303030'
   },
   list_a:{
     flexDirection:'row',
     alignItems:'center',
     marginTop:5,
     marginBottom:25,
   },
   list_font_a:{
     fontSize:12,
     color:'#999999'
   },
   list_font_b:{
     fontSize:13,
     color:'#5986ff'
   },
   list_img:{
     width:width-30,
     height:140,
     marginBottom:10,
   },
   list_b:{
     flexDirection:'row',
     alignItems:'center',
     marginTop:25,
     marginBottom:10,
   },
   list_font_c:{
     fontSize:13,
     color:'#999999'
   },
   list_font_d:{
     fontSize:13,
     color:'#303030'
   },
   list_line:{
     borderColor:'#dddddd',
     borderBottomWidth:1,
     marginBottom:25
   },
   list_vote:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     marginBottom:15
   },
   vote:{
     height:25,
     width:width-30,
     justifyContent:'center',
     paddingLeft:15,
     borderRadius:5,
     borderColor:'#dddddd',
     borderWidth:1,
     borderStyle:'dashed',
     marginBottom:5,
   },
   vote_blue:{
     height:25,
     width:width-30,
     justifyContent:'center',
     paddingLeft:15,
     borderRadius:5,
     marginBottom:5,
   },
   vote_a:{
     height:110,
     width:width-30,
     borderRadius:5,
     borderWidth:1,
     borderColor:'#dddddd',
     borderStyle:'dashed',
   },
   list_font_e:{
     fontSize:13,
     color:'#ffffff'
   },
   button:{
     width:width,
     height:44,
   },
   button_a:{
     position:'absolute',
     height:44,
     bottom:0,
     left:0,
     right:0,
   },
   list_input_a:{
     marginLeft:15,
     lineHeight:15,
     color:'#999999',
     height: 100,
     fontSize:13,
     textAlign:'left',
     margin:0,
     padding:0,
     textAlignVertical: 'top',
     marginTop:15,
   },
   title:{
     flexDirection:'row',
     alignItems:'center',
     marginBottom:10
   },
   join:{
     height:200,
     justifyContent:'center',
     alignItems:'center',
     width:width,
     flex:1,
     backgroundColor:'#ffffff'
   }

});

module.exports = styles
