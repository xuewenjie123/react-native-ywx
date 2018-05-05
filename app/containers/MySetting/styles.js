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
     width:width-60*width/750,
     height:100*width/750,
     backgroundColor:'#ffffff',
     borderRadius:5,
     marginTop:30*width/750,
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     paddingLeft:30*width/750,
     paddingRight:30*width/750,
   },
   list_middle:{
     width:width-60*width/750,
     backgroundColor:'#ffffff',
     borderRadius:5,
     marginTop:30*width/750,
     flexDirection:'column',
     paddingLeft:30*width/750,
     paddingRight:30*width/750,
   },
   list_a:{
     width:width-120*width/750,
     height:100*width/750,
     backgroundColor:'#ffffff',
     borderRadius:5,
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
   },
   list_line:{
     borderBottomWidth:1,
     borderBottomColor:'#dddddd',
   },
   list_b:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center'
   },
   list_font:{
     fontSize:30*width/750,
     color:'#303030'
   },
   list_font_a:{
     fontSize:26*width/750,
     color:'#999999',
     marginRight:10
   },
   list_font_b:{
     fontSize:12,
     color:'#999999',
   },
   list_button:{
     height:100*width/750,
     width:width-60*width/750,
     backgroundColor:'#ffffff',
     justifyContent:'center',
     alignItems:'center',
     borderRadius:5,
     marginTop:30*width/750,
   },
   font_button:{
     fontSize:30*width/750,
     color:'#ef5b5b'
   }



});

module.exports = styles
