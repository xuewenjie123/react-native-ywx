
import LinearGradient from "react-native-linear-gradient";
import React,{Component} from "react"
import { StyleSheet, Text} from 'react-native';
export default class GradientBox extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return (
        <LinearGradient key={this.props.key?this.props.key:0} colors={['#5460ff','#5c99ff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={[this.props.styles,{ 
            justifyContent:'center',alignItems:'center',}]}>
          {this.props.title?<Text style={styles.list_font_b}>{this.props.title}</Text>:null}
        </LinearGradient>
        )
    }
  
}
const styles = StyleSheet.create({
    list_font_b: {
        fontSize:15,
        color:'#ffffff'
    }
})