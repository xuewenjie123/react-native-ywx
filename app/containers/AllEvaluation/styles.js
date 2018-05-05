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
     marginLeft:30*width/750,
   },
   up:{
     width:width,
     backgroundColor:'#ffffff',
     marginTop:10,
     paddingTop:30*width/750,
     flexDirection:'row',
     flexWrap:'wrap',
     paddingLeft:15*width/750,
     paddingRight:15*width/750,
   },
   box:{
     minWidth:150*width/750,
     height:50*width/750,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:2,
     borderWidth:0.5,
     borderColor:'#5986ff',
     marginRight:15*width/750,
     marginLeft:15*width/750,
     marginBottom:30*width/750,
     paddingLeft:10,
     paddingRight:10,
   },
   box_a:{
     minWidth:150*width/750,
     height:50*width/750,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:2,
     borderWidth:0.5,
     borderColor:'#dddddd',
     marginRight:15*width/750,
     marginLeft:15*width/750,
     marginBottom:30*width/750,
     paddingLeft:10,
     paddingRight:10,
   },
   start:{
    height:12,
    width:12,
    marginRight:20*width/750
   },
   info:{
     height:80*width/750,
     justifyContent:'space-between',
   },
   box_text:{
     color:'#5986ff',
     fontSize:13
   },
   evaluate:{width:width-30}
});

module.exports = styles
