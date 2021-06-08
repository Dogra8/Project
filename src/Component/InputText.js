import React,{Component} from "react";
import {TextInput,StyleSheet} from "react-native";
 

function InputText({placeholder,onChangeText,secureTextEntry,onfocus,value}){

    return(
        <TextInput
        style={styles.input}
        placeholder ={placeholder}
        onChangeText ={onChangeText}
        secureTextEntry ={secureTextEntry}
        onFocus ={onfocus}
        value ={value}
        
        ></TextInput>
    )
}
export default InputText
const styles = StyleSheet.create({
    input:{
        borderColor:'grey',
        borderRadius:10,   
        marginTop:15,
        marginLeft:30,
        marginRight:30,
        paddingLeft:20,
        fontSize:18,
        backgroundColor:'white',

    }
}

)