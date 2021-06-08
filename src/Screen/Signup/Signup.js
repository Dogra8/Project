import React, { Component } from 'react' ;
import {View , Text ,Image,StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native' ;
import InputText from '../../Component/InputText';
import imagePath from '../../constant/imagePath';
import navigationStrings from '../../constant/navigationStrings';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextInput } from "react-native-gesture-handler";
import validations from '../../utils/validations';
import { showMessage,hideMessage } from 'react-native-flash-message';
import moment from 'moment';
import apis from '../../apis';
import Loader from '../../Component/Loader';


export default class Signup extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
      dob:"",
      email:"",
      password:"",
      reEnterPassword:"",
      isDatePickerVisible:false,
      value:"",
      isValid:false,
      isvalid:""
    }
  }
  setName = (text) => {
        
    this.setState({
        name: text
    })

    // alert("hi")
}


setDob = (text) => {

    this.setState({
        dob: text
    })


}


setEmail = (text) => {

    this.setState({
        email: text
    })


}


setPassword = (text) => {

    this.setState({
        password: text
    })


}

setReEnterPassword = (text) => {

    this.setState({
        reEnterPassword: text
    })


}

showDataAlert= ()=>{
    const{  name, dob, email,password,reEnterPassword} = this.state;
    alert(" name "+name +"\n" + " DOB "+dob +"\n"+ " email "+ email +"\n"+ " password " +password)
}


showDatePicker = () => {
  
    this.setState({
        isDatePickerVisible:true
    })
  };

  hideDatePicker = () => {
    this.setState({
        isDatePickerVisible:false
    })
  };

  handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    

    let onlyDate =moment(date, 'yyyy-mm-ddthh:mm:ssz').format('DD-MM-yyyy');
    this.setState({
        dob:onlyDate,
        value: onlyDate,
        isDatePickerVisible: false
    })
    // alert(onlyDate) 
    // hideDatePicker();
  };



  isValidate=()=>{
      const{name, dob, email,password,reEnterPassword} = this.state;

      let check= validations({name:name , dob:dob , email:email , password:password , reEnterPassword:reEnterPassword})

      if(check){
        
showMessage({
  message: check,
  type: "info",
});
          return false
      }

      return true
  }


  checkData = ()=>{
    const{name, dob, email,password,reEnterPassword} = this.state;
    if(this.isValidate()){
        this.setState({
            isVisible:true
        })
        apis.signup({name, email,password ,signupType:"APP" , languageCode:"EN"})
        .then(response=> {
          console.log(response)
          this.props.navigation.navigate(navigationStrings.LOGIN)
            this.setState({
              isvalid:false
                })
                
            
        }).catch((error) =>{
          this.setState({isvalid:false})
          console.log(error)
        })
    }

  }
  render() {
    const { isDatePickerVisible , handleConfirm , hideDatePicker ,value,isvalid } = this.state;
    return (
     <>
          <View style={styles.firstview}>
     <Image source={imagePath.arrow} style={styles.firstImage}/>
     <Text style={styles.textsignup}>Sign Up</Text>
     </View>
     <View style={styles.signupView}>
       <Image source={imagePath.myimg} style={styles.signupimage}/>
     </View>
     <View>
      {/* <Button title="Show Date Picker" onPress={this.showDatePicker} /> */}
       <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        display="calendar"
        onConfirm={this.handleConfirm}
        onCancel={this.hideDatePicker}
      />
    </View> 
     <View>
<InputText placeholder={"Name"} onChangeText={(text)=>this.setName(text)}/>
<InputText placeholder={"Date of Birth"} onfocus={this.showDatePicker} value={value}/>
<InputText placeholder={"Email"} onChangeText={(text)=>this.setEmail(text)} />
<InputText placeholder={"Password"} onChangeText={(text)=>this.setPassword(text)} secureTextEntry={true}/>
<InputText placeholder={"Re-Enter Password"} onChangeText={(text)=>this.setReEnterPassword(text)} secureTextEntry={true}/>
</View>
     
     <View style={{flexDirection:'row',marginTop:35,marginLeft:30}}>
<Text> Already Register?</Text>
         <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.navigate(navigationStrings.LOGIN) }>
        <Text style={styles.signupButton}>
          Login
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.checkData()}>
        <Image source={imagePath.next} style={{height:30,width:30,marginLeft:110}}/>
        </TouchableOpacity>
  </View>
      <View style={styles.footer}>
                    <Text>By Signing up you agree to our</Text>
                    <View style={{ flexDirection: "row", }}>
                    <Text style={styles.tAndc}>Terms of service</Text>
                    <Text> and </Text>
                    <Text style={styles.tAndc}>Privacy policy</Text>
                    </View>
                </View>
                <Loader isvalid={isvalid}/>      

      </>
 
    )
  }
}

const styles = StyleSheet.create({
  firstview: {
    
  flexDirection:'row',
  marginTop:20,
    
  },
firstImage: {
  height:30,
  width:30,

},
textsignup:{
  fontWeight:'bold',
  fontSize:22,
  marginLeft:115
},
signupView:{
  height:160,
  
},
signupimage:{
  alignSelf:'center',
  height:100,
  width:100,
  marginTop:"auto",
  marginBottom:'auto',
  borderRadius:50,
},
signupButton:{
  fontWeight:'bold',
  color:'#1F45FC'
},
button:{

},
footer:{
  marginTop:50,
 alignItems:"center"
},
tAndc:{
  color: "blue",
},



});
