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
     height:50,
     marginTop:10,
     width:width-30,
     borderRadius:5,
     flexDirection:'row',
     alignItems:'center',
     backgroundColor:"#fff",
     paddingLeft:15,
     paddingRight:15
   },
  list_font:{
    fontSize:15,
    color:'#303030',
  },

  list_box_a:{
    width:width-30,
    height:50,
    backgroundColor:'#ffffff',
    marginTop:10,
    borderRadius:5,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15
  }


});

module.exports = styles
