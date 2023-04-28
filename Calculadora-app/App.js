import React from 'react';
import { useState } from 'react';
import {   
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View, 
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Display from './display'
import Buttons from './buttons';

let states ={
  valueScreen:'',
  result:0,
  operated:false,
  point:false
}

export default function App() {

const [vscreen, setVscreen]=useState(states.valueScreen)
const [vres, setVres]=useState(states.result)

const addDigit =(d)=>{
  if (d=='+' || d=='-' || d=='/' || d=='*'){
    states.point=false
  }
  if(d=='.' && !states.point){
    states.point=true
    states.operated=false
  }else if(d=='.' && states.point){
    return
  }
  if((d=='+' || d=='-' || d=='/' || d=='*') && states.operated){
    states.valueScreen=states.result
    states.result=0
  }

  states.valueScreen=states.valueScreen+d
  setVscreen(states.valueScreen)
  setVres(states.result)
  states.operated=false
}

const clearScreen=()=>{
  states ={
    valueScreen:'',
    result:0,
    operated:false,
    point:false
  }
  setVscreen(states.valueScreen)
  setVres(states.result)
  
}

const operate=(d)=>{
  if(d=='AC'){
    clearScreen()
    return
  }
  if(d=='BS'){
    states.valueScreen=vscreen.substring(0,vscreen.length-1)
    setVscreen(states.valueScreen)
    return
  }
  try{
    states.result=eval(vscreen)
    states.operated=true
    setVres(states.result)
  }catch{
    states.result='Erro'
    states.operated=true
    setVres(states.result)
  }
}

return (
  <SafeAreaView style={styles.container}>

    <Text>Calculadora gabriel</Text>

      <Display operator={vscreen} result={vres}/>
  <View style={styles.buttons}>
  <Buttons label="AC" ac onClick={()=>{clearScreen()}}></Buttons>
  <Buttons label="(" onClick={()=>{addDigit('(')}}></Buttons>
  <Buttons label=")" onClick={()=>{addDigit(')')}}></Buttons>
  <Buttons label="/" operator onClick={()=>{addDigit('/')}}></Buttons>
  <Buttons label="7" onClick={()=>{addDigit('7')}}></Buttons>
  <Buttons label="8" onClick={()=>{addDigit('8')}}></Buttons>
  <Buttons label="9" onClick={()=>{addDigit('9')}}></Buttons>
  <Buttons label="*" operator onClick={()=>{addDigit('*')}}></Buttons>
  <Buttons label="4" onClick={()=>{addDigit('4')}}></Buttons>
  <Buttons label="5" onClick={()=>{addDigit('5')}}></Buttons>
  <Buttons label="6" onClick={()=>{addDigit('6')}}></Buttons>
  <Buttons label="-" operator onClick={()=>{addDigit('-')}}></Buttons>
  <Buttons label="1" onClick={()=>{addDigit('1')}}></Buttons>
  <Buttons label="2" onClick={()=>{addDigit('2')}}></Buttons>
  <Buttons label="3" onClick={()=>{addDigit('3')}}></Buttons>
  <Buttons label="+" operator onClick={()=>{addDigit('+')}}></Buttons>
  <Buttons label="0" onClick={()=>{addDigit('0')}}></Buttons>
  <Buttons label="." onClick={()=>{addDigit('.')}}></Buttons>
  <Buttons label="<--" bs operator onClick={()=>{operate('BS')}}></Buttons>
  <Buttons label="=" result onClick={()=>{operate('=')}}></Buttons>
  </View>
  </SafeAreaView>
)};


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: '#d5d7ff'
   },
   buttons:{
    flexDirection:"row",
    flexWrap:"wrap",
   },
  })