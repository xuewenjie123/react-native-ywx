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
   list_box:{
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center',
     width:width,
     position:'absolute',
     top:79,
     bottom:15,
   },
   list_a:{
     height:145,
     width:width-30,
     flexDirection:'column',
     borderRadius:10,
     backgroundColor:'#ffffff',
     marginBottom:15,
   },
   list_up:{
     height:120,
     width:width-30,
     borderTopLeftRadius:10,
     borderTopRightRadius:10,
   },
   list_down:{
     width:width-30,
     height:25,
     flex:1,
     position:'relative',
     justifyContent:'center',
     alignItems:'center'
   },
   list_font_a:{
     fontSize:13,
     color:'#999999',
     position:'absolute',
     right:15
   },
   list_font:{
     fontSize:13,
     color:'#999999',
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
