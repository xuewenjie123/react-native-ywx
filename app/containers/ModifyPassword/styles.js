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
    width:width-60*width/750,
    backgroundColor:'#ffffff',
    marginTop:10,
    paddingTop:10,
    paddingLeft:30*width/750,
    paddingRight:30*width/750,
    flex:1,
    marginBottom:30*width/750,
  },
  list_a:{
    height:88*width/750,
    width:width-120*width/750,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:11,
  },
  list_input_a:{
    fontSize:30*width/750,
    color:'#999999',
  },
  list_input:{
    flex:1,
    padding: 0
  },
  list_b:{
    flex:1,
    borderBottomWidth:1,
    borderBottomColor:'#dddddd'
  },
  list_font_text:{
    fontSize:26*width/750,
    color:'#999999',
    marginTop:10,
    marginLeft:10,
    marginRight:10
  },
button_box:{
  width:width-120*width/750,
  height:80*width/750,
  borderRadius:5,
  marginTop:50*width/750,
},
button_font:{
  fontSize:30*width/750,
  color:'#ffffff',
}

});

module.exports = styles
