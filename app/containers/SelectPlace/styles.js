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

   list_b:{
     width:width,
     alignItems:'center',
     backgroundColor:"#fff",
   },
  list_font:{
    fontSize:15,
    color:'#303030',
  },
  list_box_a:{
    width:width-30,
    height:100*width/750,
    backgroundColor:'#ffffff',
    marginTop:10,
    borderRadius:5,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:30*width/750,
    paddingRight:30*width/750,
  },
  list_address:{
    width:width-60*width/750,
    flexDirection:"row",
    alignItems:"center",
    height:88*width/750,
    borderTopWidth:1,
    borderColor:'#dddddd'
  },
  list_address_a:{
    width:width-60*width/750,
    flexDirection:"row",
    alignItems:"center",
    height:88*width/750,
  },
  list_no:{
    width:width,
    flexDirection:"row",
    alignItems:"center",
    height:88*width/750,
    backgroundColor:'#ffffff',
    paddingLeft:15
  },
  text:{
    fontSize:13,
    color:'#999999'
  }


});

module.exports = styles
