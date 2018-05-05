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
   header:{
     width:width,
     height:165,
   },
   list_box:{
     width:width-30,
     flex:1,
     backgroundColor:'#ffffff',
     marginTop:15,
     marginBottom:15,
     borderRadius:5,
     paddingTop:10,
     paddingLeft:15,
     paddingRight:15,
   },
   list_a:{
     height:44,
     width:width-60,
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     paddingTop:11,
     position:'relative'
   },
   list_b:{
     flex:1,
     borderBottomWidth:1,
     borderBottomColor:'#dddddd'
   },
   list_input_a:{
     fontSize:15,
     color:'#999999',
   },
   list_input:{
     flex:1,
     padding: 0,
     fontSize:15,
     color:'#999999',
   },
   eye:{
     position:'absolute',
     right:0,
     bottom:8,
     flexDirection:'row-reverse'
   },
   list_font_a:{
     fontSize:13,
     color:'#5986ff',
   },
   list_font_f:{
     fontSize:15,
     color:'#5986ff',
   },
   list_font_e:{
     fontSize:13,
     color:'#ffffff',
   },
   list_c:{
     width:width-60,
     marginTop:10,
     marginBottom:25,
     flexDirection:'row',
     paddingLeft:10,
     paddingRight:10,
     justifyContent:'center',
     alignItems:'center',
   },
   list_font_b:{
     fontSize:15,
     color:'#ffffff'
   },
   list_button:{
     width:width-60,
     height:40,
     borderRadius:5,
   },
   list_d:{
     width:width-60,
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     marginTop:30
   },
   list_font_text:{
     color:'#999999',
     fontSize:13,
   },
   list_e:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     flexDirection:'row',

   }

});

module.exports = styles
