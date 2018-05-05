'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import { width, height } from '../../components/common/Dimensions'
import color from '../../constant/color'
const styles = StyleSheet.create({
  main: {
     flex: 1,
     flexDirection:'column',
     alignItems: 'center',
     width:width,
     height:height,
     backgroundColor:'#f7f8fc',
   },
   header_box:{
       height:44
   },
   header:{
        position:'relative',
        width:width,
        height:44,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'red'
     },
     searchHeader:{
      width:width,
      marginTop:10,
      paddingLeft:30*width/750,
      alignItems:"center",
      flexDirection:"row",
      backgroundColor:"#fff",
      paddingTop:30*width/750
    },
     searchBox:{
      width:607*width/750,
      height:60*width/750,
      borderWidth:0.5,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      borderRadius:30*width/750,
      borderColor:color.border1C
    },
    searchAction:{
     flexDirection:"row",
     justifyContent:"space-between",
     width:80*width/750,
     alignItems:"center",
     paddingRight:30*width/750,
     height:60*width/750,
    },
   list_bar:{
     height:50,
     width:width,
     flexDirection:'row',
     backgroundColor:'#ffffff'
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
     color:'#5986ff'
   },
   list_bar_font:{
     fontSize:15,
     color:'#999999'
   },
   up:{
     width:width,
     height:150,
     backgroundColor:'#ffffff',

   },
   middle:{
     width:width,
     marginTop:10,
     paddingTop:15,
     paddingBottom:15,
     backgroundColor:'#ffffff',
     alignItems:'center'
   },
   middle_a:{
     flexDirection:'row',
     justifyContent:'space-between',
     width:width,
     paddingLeft:15,
     paddingRight:15,
     marginBottom:15
   },
   middle_font:{
     fontSize:15,
     color:'#303030'
   },
   middle_font_a:{
     fontSize:13,
     color:'#999999'
   },
   middle_b:{
     flexDirection:'row',
     alignItems:'center'
   },
   list_a:{
     width:width-30,
     flexWrap:'wrap',
     justifyContent:'space-between',
     flexDirection:'row',
   },
   middle_c:{
     height:70,
     width:(width-40)/2,
     marginBottom:10,
   },
   middle_img:{
     width:width-30,
     height:90,
     marginBottom:10,
   },
   middle_bar:{
     width:width,
     flexDirection:'row',
     paddingLeft:15,
     position:'relative',
   },
   middle_bar_a:{
     width:136,
     marginRight:10
   },
   bar_font:{
     fontSize:13,
     color:'#303030'
   },
   bar_font_a:{
     fontSize:15,
     color:'#ef5b5b'
   },
   bar_font_b:{
     fontSize:12,
     color:'#999999'
   },
   down:{
     height:90,
     width:width-30,
     flexDirection:'row',
     marginBottom:10,
   },
   last:{
     flexDirection:'row',
     width:width,
     justifyContent:'center',
     alignItems:'center',
     paddingTop:25,
     paddingBottom:50,
     backgroundColor:'#ffffff'
   },
   line:{
     width:50,
     height:1,
     borderBottomWidth:1,
     borderColor:'#dddddd'
   },
   yuding:{
     height:15,
     width:335*width/750,
     backgroundColor:'#e44c4c',
     borderBottomLeftRadius:10,
     borderBottomRightRadius:10,
     position:'absolute',
     bottom:0,
     justifyContent:'center',
     alignItems:'center'
   },
   yuding_a:{
     height:15,
     width:136,
     backgroundColor:'#e44c4c',
     borderBottomLeftRadius:10,
     borderBottomRightRadius:10,
     position:'absolute',
     bottom:0,
     justifyContent:'center',
     alignItems:'center'
   },
   yuding_font:{
     fontSize:12,
     color:'#ffffff'
   },
   list_img_box:{
     position:'relative',
     width:335*width/750,
     height:335*width/750,
     marginBottom:10,
   },
   list_img:{
     width:335*width/750,
     height:335*width/750,
     borderRadius:10,
     marginBottom:10,
     borderWidth:1,
     borderColor:'#dddddd',
   },
   list_img_box_a:{
     position:'relative',
     width:136,
     height:136,
     marginBottom:10,
   },
   list_img_a:{
     width:136,
     height:136,
     borderRadius:10,
     marginBottom:10,
     borderWidth:1,
     borderColor:'#dddddd',
   },
   bar:{
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor:'transparent',
     marginTop:150*width/750,
   },
   title: {
     fontSize: 13,
     color: "#999",
   },
});

module.exports = styles