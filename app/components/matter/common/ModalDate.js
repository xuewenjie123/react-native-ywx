/**
 * Bootstrap of PickerTest
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ToastAndroid,
    Modal
} from 'react-native';
import Picker from 'react-native-picker';
import { width, height } from './Dimensions'
var _props;
export default class PickerTest extends Component {

    constructor(props, context) {
        super(props, context);
    }
    _showTimePicker() {
        console.log(new Date().getFullYear())
        console.log(new Date().getMonth()+1)
        let oldYear = [],
            newYear = [],
            yearWord = ["年"],
            oldMonths = [],
            newMonths = [],
            monthsWord = ["月"],
            oldDays = [],
            newDays = [],
            dayssWord = ["日"],
            connect = ["~"]
        var between =new Date().getFullYear()-2014
        var nowMonth = new Date().getMonth()+2
        for(let i=0;i<between;i++){
            oldYear.push(i+2015);
            newYear.push(i+2015);
        }
        for(let i=1;i<13;i++){
            oldMonths.push(i);
            newMonths.push(i);
        }
       
        for(let i=1;i<32;i++){
            oldDays.push(i);  
            newDays.push(i);
        }

        let pickerData = [oldYear,yearWord, oldMonths,monthsWord, oldDays,dayssWord,connect,newYear,yearWord,newMonths,monthsWord,newDays,dayssWord];
        let date = new Date();
        Picker.init({
            pickerData,
            pickerConfirmBtnText:"完成",
            pickerCancelBtnText:"取消",
            pickerCancelBtnColor:[153,153,153,1],
            pickerConfirmBtnColor:[71,145,255,1],
            pickerToolBarBg:[247,247,249,1],
            pickerBg:[246,246,246,1],
            pickerFontSize:13,
            selectedValue:[2015,"年",10,"月",3,"日",4,date.getFullYear(),"年",date.getMonth()+1,"月",date.getDate(),"日"],
            pickerTitleText: '选择时间段',
            wheelFlex: [1.5,0.7,1,0.7,1,0.7,1,1.5,0.7,1,0.7,1,1],
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                let targetValue = [...pickedValue];
                if(parseInt(targetValue[2]) === 2){
                    if(targetValue[0]%4 === 0 && targetValue[4] > 29){
                        ToastAndroid.show("本月只有29天，请选择29号",ToastAndroid.SHORT)
                        targetValue[4] = 29;
                    }
                    else if(targetValue[0]%4 !== 0 && targetValue[4] > 28){
                        ToastAndroid.show("本月只有28天，请选择28号",ToastAndroid.SHORT)
                        targetValue[4] = 28;
                    }
                }
                if(parseInt(targetValue[9]) === 2){
                    if(targetValue[7]%4 === 0 && targetValue[11] > 29){
                        ToastAndroid.show("本月只有29天，请选择29号",ToastAndroid.SHORT)
                        targetValue[11] = 29;
                    }
                    else if(targetValue[7]%4 !== 0 && targetValue[11] > 28){
                        ToastAndroid.show("本月只有28天，请选择28号",ToastAndroid.SHORT)
                        targetValue[11] = 28;
                    }
                }

                if(targetValue[2] in {4:1, 6:1, 9:1, 11:1} && targetValue[4] > 30){
                    ToastAndroid.show("本月只有30天，请选择30号",ToastAndroid.SHORT)
                    targetValue[4] = 30;
                }
                if(targetValue[9] in {4:1, 6:1, 9:1, 11:1} && targetValue[11] > 30){
                    ToastAndroid.show("本月只有30天，请选择30号",ToastAndroid.SHORT)
                    targetValue[11] = 30;
                }
                var firstSelect = new Date(targetValue.join('').split("~")[0].replace(/年|月/g, "/").replace(/日/g,""))
                var secondSelect = new Date(targetValue.join('').split("~")[1].replace(/年|月/g, "/").replace(/日/g,""))
                if(firstSelect>secondSelect){
                    targetValue[7]=targetValue[0];
                    targetValue[9]=targetValue[2];
                    targetValue[11]=targetValue[4];
                    ToastAndroid.show("您选择的时间段有误，请重新选择",ToastAndroid.SHORT)
                }
                // forbidden some value such as some 2.29, 4.31, 6.31...
                if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
                    // android will return String all the time，but we put Number into picker at first
                    // so we need to convert them to Number again
                    targetValue.map((v, k) => {
                        if(k !== 3){
                            targetValue[k] = parseInt(v);
                        }
                    });
                    Picker.select(targetValue);
                    pickedValue = targetValue;
                }
               
            }
        });
        Picker.show();
    }

    _toggle() {
        Picker.toggle();
    }
    

    render() {
        _props = this.props
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={_props.visible}
                style={{flex:1}}
                onRequestClose={() => {_props.closeModal()}}
               >
               <View style={{position: 'absolute', width: width, height: height}}>
                    <TouchableOpacity style={{flex:1}} onPress={() => {
                        _props.closeModal()
                    }}>
                    </TouchableOpacity>
               </View>
               {this._showTimePicker()}
            </Modal>
        );
    }
};

