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
   up:{
     width:width,
     height:212,
     backgroundColor:'#ffffff',
     marginTop:10,
     paddingTop:15,
   },
   up_a:{
     flexDirection:'row',
     paddingLeft:15
   },
   up_b:{
     justifyContent:'space-between'
   },
   middle:{
     width:width,
     justifyContent:'center',
     flexDirection:'row',
     alignItems:'center',
     marginTop:30,
   },
   button:{
     height:25,
     width:90,
     justifyContent:'center',
     alignItems:"center",
     borderRadius:2,
     borderWidth:1,
     borderColor:'#dddddd',
     marginRight:10,
     marginLeft:10
   },
   button_a:{
     height:25,
     width:90,
     justifyContent:'center',
     alignItems:"center",
     borderRadius:2,
     borderWidth:1,
     borderColor:'#5986ff',
     marginRight:10,
     marginLeft:10
   },
   font:{
     fontSize:13,
     color:'#999999'
   },
   font_a:{
     fontSize:13,
     color:'#5986ff'
   }

});

module.exports = styles
