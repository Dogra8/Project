import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import navigationStrings from "../constant/navigationStrings"
import {Home, Account, Bag, Stores, Wishlist} from "../Screen"
import {Image} from "react-native"
import images from "../constant/images";

const Tab = createBottomTabNavigator()

export default function TabRoutes (){
    return(
        <Tab.Navigator
        tabBarOptions={{
          style: {
            height: 70
          },
            pressColor: 'gray',
            activeTintColor:"#fff",
          inactiveTintColor:"#777",
          activeBackgroundColor:'white',
          inactiveBackgroundColor:'white',
          labelStyle:{
            fontWeight: "bold",
            textAlign:'center',
            marginBottom: 10,
            borderRadius: 15,
          },
          indicatorStyle: {
            backgroundColor: "#f0f4f7",
            borderColor: 'rgb(189,189,189)',
            borderWidth: 10,
            borderBottomWidth: 0,
            borderRadius: 5,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
          activeBackgroundColor: "#1db078", 
          inactiveBackgroundColor: "white"
          }}
        >
            <Tab.Screen name={navigationStrings.HOMESCREEN} component={Home}
            options = {{
              tabBarLabel:"HOME" , 
              tabBarIcon:()=>(  
                <Image source = {images.HOME_TAB} style = {{height: 28, width: 28}} />
              )
            }}
            />
            <Tab.Screen name={navigationStrings.STORES} component={Stores} 
            options = {{
              tabBarLabel:"STORE" , 
              tabBarIcon:()=>(  
                <Image source = {images.CART_TAB} style = {{height: 28, width: 28}} />
              )
            }}
            />
            <Tab.Screen name={navigationStrings.ACCOUNT} component={Account} 
            options = {{
              tabBarLabel:"ACCOUNT" , 
              tabBarIcon:()=>(  
                <Image source = {images.ACCOUNT_TAB} style = {{height: 28, width: 28}} />
              )
            }}
            />
            <Tab.Screen name={navigationStrings.WISHLIST} component={Wishlist} 
            options = {{
              tabBarLabel:"WISHLIST" , 
              tabBarIcon:()=>(  
                <Image source = {images.WISHLIST_TAB} style = {{height: 28, width: 28}} />
              )
            }}
            />
            <Tab.Screen name={navigationStrings.BAG} component={Bag} 
            options = {{
              tabBarLabel:"BAG" , 
              tabBarIcon:()=>(  
                <Image source = {images.BAG_TAB} style = {{height: 28, width: 28}} />
              )
            }}
            />

        </Tab.Navigator>
    )
}
