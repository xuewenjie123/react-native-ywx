'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import Dimensions from 'Dimensions';
let { width, height } = Dimensions.get('window');
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
   containerStyle:{
    width:width,
    height:height-44-98*width/750,
    alignItems:"center",
    backgroundColor:"#fff",
  },
  dealInfoBox:{
    marginTop:30*width/750,
    marginBottom:15*width/750,
    width:width-30,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  imgBox:{
    width:width,
    height: 450*width/750
  },
  startBox:{
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"space-between"
  },
  dealNumBox:{
    width:width-30,
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:30*width/750,
  },
  teamName:{
    fontSize:15,
    color:color.font1C,
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
   marginRight:20*width/750
  },
  textDealNum:{
    fontSize:12,
    color:color.font2C,
  },
  yuTime:{
    flexDirection:"row",
    width:width-30,
    justifyContent:"space-between",
    borderBottomWidth:0.5,
    borderColor:color.border1C
  },
  text:{
    fontSize:13,
    color:color.font2C,
  },
  text1:{
    fontSize:13,
    color:color.font1C,
  },
  introductionBox:{
    paddingHorizontal:30*width/750,
    paddingTop:50*width/750,
    flex:1,
    backgroundColor:color.bar
  },
  introOne:{
    flex:1
  },
   next_action:{
    width:width,
    height:98*width/750,
    backgroundColor:color.main1C,
    justifyContent:"center",
    alignItems:'center',
   },
   text_next:{
    fontSize:15,
    color:color.bar
   },
});

module.exports = styles
