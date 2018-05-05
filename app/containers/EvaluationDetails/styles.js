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
    backgroundColor:'#ffffff',
    marginTop:10,
    paddingTop:15,
    alignItems:'center'
  },
  up:{
    height:75,
    width:width,
    paddingLeft:15,
    paddingRight:15,
    flexDirection:'row',
    alignItems:'center'
  },
  right:{
    height:75,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:'#ffffff',
    width:width-120,
    justifyContent:'space-between'
  },
  start:{
   height:20,
   width:20,
   marginRight:25*width/750
  },
  middle:{
    width:width-30,
    height:150,
    backgroundColor:'#ffffff',
    marginTop:25,
    paddingTop:10,
    paddingLeft:15,
    position:'relative',
    borderRadius:5,
    borderStyle:'dashed',
    borderWidth:1,
    borderColor:'#dddddd'
  },
  middle_font:{
    fontSize:15,
    color:'#303030',
    padding:0,
  },
  text_number:{
    fontSize:13,
    color:'#999999',
    position:'absolute',
    bottom:10,
    right:15,
  },
  down:{
    marginTop:15,
    marginBottom:25,
    width:width-30,
    height:60,
    flexDirection:'row',
    alignItems:'center',
  },
  down_a:{
    height:60,
    width:60,
    borderColor:'#dddddd',
    borderRadius:5,
    borderStyle:'dashed',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    marginRight:10
  }
});

module.exports = styles
