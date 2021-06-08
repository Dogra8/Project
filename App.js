import React, { Component } from 'react'
import { View,Text } from 'react-native'
 import FlashMessage from 'react-native-flash-message'
 import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import Routes from './src/Navigation/Routes'
import actions from './src/redux/actions'
import store from './src/redux/store'
import types from './src/redux/types'
import { getUserData } from './src/utils/utils'


const { dispatch } = store;
export default class App extends Component {
 
  


  componentDidMount() {
    setTimeout(() => {
      // go to Home page
      SplashScreen.hide();
  }, 2500)
    
    getUserData().then((userData) => {
      console.log(userData,'i got my access token')      
    
      let token = userData
      console.log(token,"final token")
      if (userData) {
      
        dispatch({
          type: types.OTP_VERIFY,
          payload: userData 
        })
       actions.isloggedin(userData)
      }
      
    })
    


    

  }

  
  render() {
    return (
      <Provider store={store }>
     <Routes/>
     <FlashMessage position="top" />
   </Provider>
  
  
    )
  }
}
