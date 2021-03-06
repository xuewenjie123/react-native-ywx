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
   container:{
    backgroundColor:color.bar,
    width:width,
    alignItems:"center",
   },
   list_middle:{
     width:width,
     flexDirection:'column',
     paddingRight:15,
     paddingLeft:15,
     backgroundColor:'#ffffff',
     marginTop:10
   },
   list_middle_a:{
     height:44,
     width:width-30,
     flexDirection:'row',
     alignItems:'center',
     borderBottomWidth:1,
     borderBottomColor:'#dddddd',

   },
   list_middle_b:{
     width:width-30,
     flexDirection:'column',
     borderBottomWidth:1,
     borderBottomColor:'#dddddd',
     paddingTop:15,
     paddingBottom:7
   },
   list_middle_c:{
     width:width-30,
     flexDirection:'column',
     paddingTop:15,
     paddingBottom:7
   },
   list_font_a:{
     fontSize:15,
     color:'#303030',
   },
   list_font_f:{
     fontSize:13,
     color:'#5986ff',
   },
   list_font_b:{
     fontSize:13,
     color:'#999999'
   },
   list_middle_type:{
     flexDirection:'row',
     alignItems:'center',
     marginBottom:7,
   },
   list_middle_t:{
     flexDirection:'row-reverse',
     alignItems:'center',
     marginBottom:7,
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
     color:'#303030',
   },

   list_font_c:{
     fontSize:13,
     color:'#999999',
     marginLeft:21,
     marginTop:8,
   },
   list_font_cd:{
     fontSize:13,
     color:'#303030',
     marginLeft:21,
     marginTop:8,
   },
   list_font_j:{
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
     marginBottom:40,
     marginTop:8,
   },
   list_font_e:{
     fontSize:13,
     color:'#303030',
   },
   list_font_d:{
     fontSize:13,
     color:'#5986ff',
   },
   inquiries_b:{
     height:12,
     width:12,
     marginRight:15,
   },
   list_box_a:{
     flexDirection:'column',
     width:width-30,
     marginTop:10
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
   list_box_c_no:{
    marginLeft:6,
   },
   list_box_d:{
     marginLeft:6,
   },
});

module.exports = styles
