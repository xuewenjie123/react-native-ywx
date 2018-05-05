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
     height:45,
     paddingRight:15,
     paddingLeft:15,
     backgroundColor:'#ffffff',
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     marginTop:10
   },
   up_a:{
     flexDirection:'row',
     alignItems:'center',
   },
   up_font:{
     fontSize:13,
     color:'#999999'
   },
   middle:{
     width:width,
     height:135,
     flexDirection:'row',
     marginTop:10,
     backgroundColor:'#ffffff',
     alignItems:'center',
   },
   middle_font:{
     marginLeft:15,
     lineHeight:15,
     color:'#999999',
     height: 105,
     width:width-70,
     fontSize:13,
     textAlign:'left',
     margin:0,
     padding:0,
     textAlignVertical: 'top',
   },
   middle_img:{
    height:135,
    width:40,
    alignItems:'center',
    justifyContent:'center'
  },
  voice:{
    height:25,
    width:width,
    marginTop:10,
    marginBottom:15,
    flexDirection:'row',
    paddingLeft:15,
    alignItems:'center',
  },
  voice_a:{
    height:25,
    minWidth:60,
    maxWidth:150,
    backgroundColor:'#ffffff',
    marginRight:10,
    borderRadius:5,
    justifyContent:'center',
    paddingLeft:10,
  },
  photo:{
    flexDirection:'row',
    height:70,
    width:width,
    paddingLeft:15,
    alignItems:'center',
    marginTop:15,
  },
  add:{
    height:70,
    width:70,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#dddddd',
    marginRight:10
  },
  cue:{
    width:width,
    marginTop:10,
    paddingLeft:15
  },
  time:{
    height:45,
    width:width,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#ffffff',
    paddingLeft:15,
    paddingRight:15
  },
  right:{
    flexDirection:'row',
    alignItems:'center'
  },
  info:{
    width:width,
    backgroundColor:'#ffffff',
    marginTop:10,
    alignItems:'center'
  },
  line:{
    borderBottomWidth:1,
    borderColor:'#dddddd',
    width:width-30
  },
  name_font:{
    fontSize:13,
    color:'#999999',
    lineHeight:15,
    padding:0,
    width:width/2,
    textAlign:'right'
  },
  button:{
    height:49,
    width:width
  },




});

module.exports = styles
