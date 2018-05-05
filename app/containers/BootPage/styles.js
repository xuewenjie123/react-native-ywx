'use strict';
import { StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';
import color from "../../constant/color"
let { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    main:{
        width:width,
        height:height,
        position:"relative",
        alignItems:"center"
    },
    contentContainer: {
        width: width*3,
        height: height,
    },
    backgroundImage: {
        width: width,
        height: height,
    },
    TextBox:{
        position:"absolute",
        bottom:180*width/750,
        width:width,
        alignItems:"center"
    },
    text1:{
        fontSize:20,
        color:color.font1C,
        marginBottom:5,
    },
    text2:{
        fontSize:15,
        color:color.font2C
    },
    text3:{
        fontSize:13,
        color:color.main2C
    },
    box:{
        alignItems:"center",
        position:"absolute",
        bottom:0,
        width:width,
        height:356*width/750,
    },
    linearBox:{
        width:192*width/750,
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        position:"absolute",
        bottom:92*width/750,
    },
    activeLinear:{
        width:50*width/750,
        height:6*width/750,
    },
    linear:{
        width:50*width/750,
        height:6*width/750,
        backgroundColor:"#e5e5e5"
    },
    buttonBox:{
        width:210*width/750,
        height:70*width/750,
        borderRadius:5,
        borderColor:color.main2C,
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:80*width/750,
    }
});

module.exports = styles
