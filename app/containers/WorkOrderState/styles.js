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
    width:width,
    flexDirection:'column-reverse',
    backgroundColor:'#ffffff',
    borderRadius:5,
    marginTop:10,
    paddingLeft:25,
    paddingTop:15,
    marginBottom:10,
  },
  list_font:{
    fontSize:13,
    color:'#999999',
  },
  list_font_c:{
    fontSize:13,
    color:'#999999',
    marginLeft:21,
    marginTop:8,
  },
  list_font_a:{
    fontSize:12,
    color:'#999999',
    marginLeft:21,
    marginTop:8,
    marginBottom:15,
  },
  list_font_time:{
    fontSize:12,
    color:'#999999',
    marginLeft:21,
    marginBottom:25,
    marginTop:8,
  },
  list_font_b:{
    fontSize:13,
    color:'#303030',
  },
  list_font_d:{
    fontSize:13,
    color:'#5986ff',
    marginTop:8
  },
  inquiries_b:{
    height:12,
    width:12,
    marginRight:15,
  },
  list_box_a:{
    flexDirection:'column',
  },

  list_box_b:{
    flexDirection:'row',
    alignItems:'center',
  },
  list_box_c:{
    borderLeftWidth:1,
    borderLeftColor:'#dddddd',
    marginLeft:6,
  },
  list_box_cs:{
    borderLeftWidth:1,
    borderLeftColor:'transparent',
    marginLeft:6,
  },
  list_box_d:{
    marginLeft:6,
  },

});

module.exports = styles
