'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import Dimensions from 'Dimensions';
let { width, height } = Dimensions.get('window');
import color from '../../constant/color';

const styles = StyleSheet.create({
  main: {
     flex: 1,
     flexDirection:'column',
     alignItems: 'center',
     width:width,
     height:height,
     backgroundColor:'#f7f8fc',
   },
   itemevaluate:{
     width:width,
     padding:30*width/750,
     alignItems:"center",
     justifyContent:"center",
   },
   itemTop:{
     width:width-60*width/750,
     alignItems:"center",
     justifyContent:"space-between",
     flexDirection:"row",
     marginBottom:30*width/750
   },
   text1:{
     fontSize:13,
     color:color.font1C,
   },
   itemtr:{
     flex:1,
     alignItems:"flex-end",
     justifyContent:"center",
   },
   text:{
     fontSize:13,
     color:color.font2C,
   },
   list_box:{
    flex:1,
    width:width,
    flexDirection:'column',
    alignItems:'center',
    marginTop:10,
    backgroundColor:'#ffffff'
   },
   line:{
     borderTopWidth:0.5,
     borderTopColor:'#dddddd',
     width:width-60*width/750,
     marginLeft:30*width/750
   },
});

module.exports = styles
