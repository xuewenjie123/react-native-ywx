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
     flex:1,
     marginTop:10,
     paddingLeft:15,
     paddingRight:15,
     paddingTop:15,
     backgroundColor:'#ffffff',
     paddingBottom:15
   },
   list_font:{
     fontSize:15,
     color:'#303030'
   },
   list_a:{
     flexDirection:'row',
     alignItems:'center',
     marginTop:5,
     marginBottom:10,
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
     marginBottom:6
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
     marginTop:4,
     marginBottom:10
   }

});

module.exports = styles
