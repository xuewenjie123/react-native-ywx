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
   header:{
        width:width,
        height:44,
        alignItems:'center',
        justifyContent:"center",
        flexDirection:'row'
     },
   icon_b:{
     position:'absolute',
     left:15,
     top:14,
     height:22,
     width:22,
   },
   header_right:{
     position:'absolute',
     right:15,
     top:14,
     flexDirection:'row',
   },
   header_font:{
       fontSize:17,
       color:'#ffffff',
   },
   list_bar:{
     height:100*width/750,
     width:width,
     flexDirection:'row',
   },
   list_bar_line:{
     width:width,
     flexDirection:'row',
     backgroundColor:'#ffffff',
     justifyContent:'space-between',
   },
   list_bar_a:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   },
   list_line:{
     width:40,
     height:1,
     borderBottomWidth:2,
     borderColor:'#5986ff',
   },
   list_line_a:{
     width:40,
     height:1,
     borderBottomWidth:2,
     borderColor:'#ffffff',
   },
   list_bar_f:{
     fontSize:15,
     color:'#ffffff',
     borderWidth:1,
     borderColor:'#ffffff',
     width:45,
     textAlign:'center',
     borderRadius:2,
     paddingTop:4,
     paddingBottom:4,
   },
   list_bar_font:{
     fontSize:15,
     color:'rgba(255, 255, 255, 0.5)',
   },
 list_box:{
      position:'absolute',
      top:79,
      bottom:10,
      width:width,
      flexDirection:'column',
      alignItems:'center'
 },
 up:{
   height:740*width/750,
   width:width,
 },
 icon_g:{
   height:10,
   width:10,
 },
 leftbar: {
   height: 44,
   flex: 1,
 },
 titlebar: {
   height: 44,
   flex: 2,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
 },
 title: {
   flex: 1,
   alignItems:"center",
   fontSize: 17,
   color: '#ffffff',
   textAlign:'center'
 },
 rightbar: {
   flex: 1,
   alignItems:"flex-end",
   justifyContent:"center",
   paddingRight:15,
   position:"relative"
  },
  classification:{
    width:150*width/750,
    height:60*width/750,
    borderRadius:5,
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:50*width/750,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"rgba(255,255,255,0.3)",
  },
  cirle:{
      width:10*width/750,
      height:10*width/750,
      borderRadius:5*width/750,
      marginRight:10*width/750,
      marginLeft:10*width/750
  },  
  classText:{
    fontSize:10
  },
 dropStyle:{
  alignItems:"center",
  flexDirection:"row",
  justifyContent:"space-between",
 },
 rightbar_font:{
   fontSize:15,
   color:'#ffffff'
 },
 today:{
   height: 40*width/750,
   width:width,
   justifyContent:"flex-end",
   alignItems:"center",
   flexDirection:"row",
   paddingRight:15,
   paddingBottom:10,
 },
 ModalDate:{
   alignItems:"flex-end",
   width:width,
   flexDirection:"row",
   justifyContent:"center",
   marginRight:5
 },
 down:{
   width:width,
   flex:1,
   backgroundColor:'#ffffff',
   paddingLeft:15,
   paddingRight:15
 },
 down_a:{
   flex:1,
   width:width-30,
   justifyContent:'space-between',
   flexDirection:'row',
   alignItems:'center',
   borderColor:'#dddddd',
   borderBottomWidth:1,
 },
 down_font:{
   fontSize:15,
   color:'#999999'
 },
 down_font_a:{
   fontSize:15,
   color:'#303030'
 },
 down_font_b:{
   fontSize:12,
   color:'#999999'
 },
 down_font_c:{
   fontSize:12,
   color:'#ef5b5b'
 },
 down_icon:{
   height:15,
   width:15,
   marginLeft:10
 },
 down_c:{
   flexDirection:'row-reverse',
   alignItems:'center',
   flex:1,
 },
 down_one:{
   flex:1,
 },
 down_b:{
   alignItems:"flex-end"
 }




});

module.exports = styles



