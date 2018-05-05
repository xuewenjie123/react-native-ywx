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
   main_a:{
     flex: 1,
     flexDirection:'column',
     alignItems: 'center',
     width:width,
     backgroundColor:'#ffffff',
     marginTop:10
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
     marginBottom:20
   },
   vote:{
     flex:1,
     flexDirection:'row',
     alignItems:'center'
   },
   vote_a:{
     width:width-30,
     paddingLeft:10,
     marginBottom:15,
   },
   list_font_e:{
     fontSize:13,
     color:'#ffffff'
   },
   button:{
     width:width,
     height:44,
     marginTop:60,
   },
   vote_name:{
     flex:1,
     flexDirection:'row-reverse'
   },
   vote_process:{
     width:350*width/750,
     height:12,
   },
   vote_process_c:{
     height:12,
     borderRadius:3,
   },
   down:{
     width:width,
     justifyContent:'center',
     alignItems:'center',
     marginTop:20,
     marginBottom:45,
   }

});

module.exports = styles
