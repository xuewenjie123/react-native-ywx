'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import { width, height } from '../../components/common/Dimensions'
import color from '../../constant/color'
const styles = StyleSheet.create({
  main: {
     flex: 1,
     flexDirection:'column',
     alignItems: 'center',
     width:width,
     height:height,
     backgroundColor:'#f7f8fc',
   },
   header:{
     width:width,
     height:330*width/750,
   },
   list_box:{
     width:width-60*width/750,
     flex:1,
     backgroundColor:'#ffffff',
     marginTop:30*width/750,
     marginBottom:30*width/750,
     borderRadius:5,
     paddingTop:20*width/750,
     paddingLeft:30*width/750,
     paddingRight:30*width/750,
   },
   list_a:{
     height:88*width/750,
     width:width-120*width/750,
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     paddingTop:22*width/750,
     position:'relative'
   },
   list_b:{
     flex:1,
     borderBottomWidth:1,
     borderBottomColor:'#dddddd'
   },
   list_input_a:{
     fontSize:30*width/750,
     color:'#999999',
   },
   list_input:{
     flex:1,
     padding: 0,
     fontSize:30*width/750,
     color:'#999999',
   },
   eye:{
     position:'absolute',
     right:0,
     bottom:16*width/750,
     flexDirection:'row-reverse'
   },
   list_font_a:{
     fontSize:26*width/750,
     color:'#5986ff',
   },
   list_font_f:{
     fontSize:30*width/750,
     color:'#5986ff',
   },
   list_font_e:{
     fontSize:26*width/750,
     color:'#ffffff',
   },
   list_c:{
     width:width-120*width/750,
     marginTop:20*width/750,
     marginBottom:50*width/750,
     flexDirection:'row-reverse',
   },
   list_font_b:{
     fontSize:30*width/750,
     color:'#ffffff'
   },
   list_button:{
     width:width-120*width/750,
     height:80*width/750,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:5,
   },
   list_d:{
     width:width-120*width/750,
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     marginTop:60*width/750,
   },
   list_font_text:{
     color:'#999999',
     fontSize:26*width/750,
   },
   list_e:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     flexDirection:'row',

   }

});

module.exports = styles
