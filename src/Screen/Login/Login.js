import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import InputText from '../../Component/InputText';
import imagePath from '../../constant/imagePath';
import navigationStrings from '../../constant/navigationStrings';
import validations from '../../utils/validations';
import { showMessage,hideMessage } from 'react-native-flash-message';
import apis from '../../apis';
import Loader from '../../Component/Loader';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:"",
      isvalid:"",
    };
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
  const{email,password} = this.state;
  if(this.isValidate()){
      this.setState({
          isvalid:true
      })
      apis.login({ email,password })
      .then(response=> {
        console.log(response)
        this.props.navigation.navigate("Home")
          this.setState({
            isvalid:false
              })
              
          
      }).catch((error) =>{
        this.setState({isvalid:false}),
        console.log(error)
      })
  }

}
  

  render() {
const{isvalid, isValidate}=this.state
    return (
      <SafeAreaView style={{flex:1}}>
<View style={styles.headerlogin}>
<Image source={imagePath.arrow}style={styles.arrowImage}/>
  <Text style={{fontWeight:'bold',fontSize:22,marginLeft:115}}>Login</Text>
</View>
<View style={styles.iconview}>
<Image source={imagePath.myimg} style={styles.myicon}/>

</View>
<View>
<InputText placeholder={"Email"} onChangeText={(text)=>this.setEmail(text)} />
<InputText placeholder={"Password"} onChangeText={(text)=>this.setPassword(text)} secureTextEntry={true}/>
</View>

        <View style={{marginTop:80,flexDirection:'row'}}>
        <Text style={{marginLeft:30}}>Don't have Account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(navigationStrings.SIGNUP)}>
            <Text style={{color:'#1F45FC'}}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.checkData()}>
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerlogin: {
    marginTop:30,
    flexDirection:'row',
  
  },
  arrowImage:{
    height:30,
    width:30
  },
  iconview:{
    height:200
  },
  myicon:{
    alignSelf:'center',
    height:100,
    width:100,
    marginTop:"auto",
    marginBottom:'auto',
    borderRadius:50,
  },
  footer:{
    marginTop:50,
   alignItems:"center"
  },
  tAndc:{
    color: "blue",
  },
})
