'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import Dimensions from 'Dimensions';
let { width, height } = Dimensions.get('window');
import color from '../../constant/color';
const styles = StyleSheet.create({
  main: {
     flex: 1,
     flexDirection:'column',
     alignItems: 'center',
     width:width,
     height:height,
     backgroundColor:'#fff',
   },
   containerStyle:{
     width:width,
     alignItems:"center",
     backgroundColor:"#fff",
   },
   renderHeader:{
      alignItems:"center"
   },
   searchHeader:{
     width:width,
     marginTop:10,
     paddingLeft:30*width/750,
     alignItems:"center",
     flexDirection:"row"
   },
   searchBox:{
     marginLeft:30*width/750,
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
   order_header:{
    width:width,
    flexDirection:"row",
  },
  info_btn:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  orders_text:{
    fontSize:15,
    lineHeight:15,
    color:color.font2C,
    marginBottom:30*width/750,
    marginTop:30*width/750
  },
  active:{
     borderBottomWidth:2,
    borderColor:color.main1C,
  },
  activeText:{
    color:color.main1C,
    lineHeight:15,
  },

   recommendlsit:{
    marginTop: 30*width/750,
    marginBottom: 30*width/750,
    width:width,
    flexDirection:'row',
   },
   info_a: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
   listHeader:{
     flexDirection:"row",
     width:width-30,
     justifyContent:"space-between",
     height:90*width/750,
     alignItems:"center",
   },
   teamBox:{
     width:width-30,
     height:150*width/750,
     borderColor:color.border1C,
     borderTopWidth:0.5,
     flexDirection:"row",
     alignItems:"center",
     justifyContent:'space-between'
   },
   detailBox:{
    flex:1,
    marginLeft:20*width/750
   },
   detailTitle:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"stretch",
    marginBottom:10*width/750
   },
   teamState:{
    flexDirection:"row",
    alignItems:'center'
   },
   dealInfoBox:{
    flexDirection:"row",
   },
   startBox:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
   },
   dealNumBox:{
    flexDirection:"row",
    marginLeft:20*width/750,
    flex:1,
    justifyContent:"space-between",
    alignItems:"center"
   },
   teamName:{
     fontSize:15,
     color:color.font1C,
     marginRight:20*width/750,
   },
   textWork:{
      fontSize:12,
      color:color.font2C,
      marginRight:20*width/750,
   },
   textPrice:{
    fontSize:15,
    color:"#ef5b5b",
   },
   textStart:{
    fontSize:15,
    color:"#edaf37",
   },
   start:{
    height:12,
    width:12,
    marginRight:10*width/750
   },
   textlu:{
    fontSize:12,
    color:color.font2C,
   },
   footer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    width:width,
    height:98*width/750
   },
   next_action:{
    flex:1,
    height:98*width/750,
    backgroundColor:color.main1C,
    justifyContent:"center",
    alignItems:'center',
   },
   jump:{
    justifyContent:"center",
    alignItems:'center',
    flex:1,
    height:98*width/750,
    backgroundColor:color.border1C
   },
   textJump:{
    fontSize:15,
    color:color.font2C
   },
   text_next:{
    fontSize:15,
    color:color.bar
   },
   textDealNum:{
    fontSize:12,
    color:color.font2C
   }
});

module.exports = styles
