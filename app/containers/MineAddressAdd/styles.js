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
   info_box:{
     width:width-30,
     height:271,
     marginTop:10,
     flexDirection:'column',
     alignItems:'center',
     backgroundColor:'#ffffff',
     borderRadius:10,
   },
   list_a:{
     height:50,
     width:width-60,
     flexDirection:'row',
     alignItems:'center',
     borderBottomWidth:1,
     borderBottomColor:'#dddddd'
   },
   list_b:{
     height:50,
     width:width-60,
     flexDirection:'row',
     alignItems:'center',
   },
  list_font:{
    fontSize:15,
    color:'#303030',
  },
  list_input:{
    flex:1,
    fontSize:13,
    color:'#999999',
  },
  list_input_a:{
    marginLeft:15,
    lineHeight:15,
    color:'#999999',
    height: 75,
    fontSize:13,
    textAlign:'left',
    margin:0,
    padding:0,
    textAlignVertical: 'top',
    marginTop:15,
  },
  list_c:{
    height:105,
    width:width-60,
    borderStyle:'dashed',
    borderWidth:1,
    borderColor:'#dddddd',
    borderRadius:10,
  },
  list_box_a:{
    width:width-30,
    height:50,
    backgroundColor:'#ffffff',
    marginTop:10,
    borderRadius:10,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15
  }


});

module.exports = styles
