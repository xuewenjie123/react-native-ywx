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
     height:90*width/750,
     paddingRight:30*width/750,
     paddingLeft:30*width/750,
     backgroundColor:'#ffffff',
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     marginTop:10,
   },
   up_a:{
     flexDirection:'row',
     alignItems:'center',
   },
   up_font:{
     fontSize:26*width/750,
     color:'#999999'
   },
   middle:{
     width:width,
     height:270*width/750,
     flexDirection:'row',
     marginTop:10,
     backgroundColor:'#ffffff',
     alignItems:'center',
   },
   middle_font:{
     marginLeft:30*width/750,
     lineHeight:30*width/750,
     color:'#999999',
     height: 210*width/750,
     width:width-110*width/750,
     fontSize:13,
     textAlign:'left',
     margin:0,
     padding:0,
     textAlignVertical: 'top',
   },
   middle_img:{
    height:34*width/750,
    width:34*width/750,
    position:'absolute',
    right:50*width/750,
    top:120*width/750,
  },
  voice:{
    height:50*width/750,
    width:width,
    marginTop:10,
    marginBottom:30*width/750,
    flexDirection:'row',
    paddingLeft:30*width/750,
    alignItems:'center'
  },
  voice_a:{
    height:50*width/750,
    minWidth:120*width/750,
    maxWidth:300*width/750,
    backgroundColor:'#ffffff',
    marginRight:10,
    borderRadius:5,
    justifyContent:'center',
    paddingLeft:10,
  },
  photo:{
    flexDirection:'row',
    height:140*width/750,
    width:width,
    paddingLeft:30*width/750,
    alignItems:'center',
    marginTop:30*width/750,
  },
  add:{
    height:140*width/750,
    width:140*width/750,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#dddddd'
  },
  cue:{
    width:width,
    marginTop:10,
    paddingLeft:30*width/750,
  },
  time:{
    height:90*width/750,
    width:width,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#ffffff',
    paddingLeft:30*width/750,
    paddingRight:30*width/750,
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
    width:width-60*width/750,
  },
  name_font:{
    fontSize:13,
    color:'#999999',
    lineHeight:30*width/750,
    padding:0,
    width:width/2,
    textAlign:'right'
  },
  header_font:{
    fontSize:30*width/750,
    color:'#303030',
  },
  middle_b:{
    flex:1,
    alignItems:"center",
    flexDirection:'row',
    justifyContent:"flex-end"
  },
  icon_a:{
    height:10,
    width:10,
  },
  button:{
    height:98*width/750,
    width:width
  },





});

module.exports = styles
