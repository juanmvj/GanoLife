import React, { Component, } from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
} from 'react-native'

import MapasView from './MapasView';
import {Scene, Router, Actions} from 'react-native-router-flux'; 
import FBSDK, {LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk'; 

class LoginView extends Component {

  handleLoginFinished = (error, result) => {
                        if (error) {
                          console.error(error)
                        } else if (result.isCancelled) {
                          alert("login is cancelled.");
                        } else {
                          AccessToken.getCurrentAccessToken().then(() => {
                            Actions.news()
                          })
                        }
                      }
  render() {
    return (

      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,1)",
          
        }}>
        
        <Image 
          style={{ 
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            
          }}
          resizeMode={"stretch"}
          source={require('../img/imageLoginHeader.png')}>
              <Image 
              style={{
                width: 250,
                height: 150,
                marginBottom:100,


              }}
              resizeMode={"contain"}
              source={require('../img/logo_ganolife.png')}
                  />
             
        </Image>
        <Text
          style={{
            marginBottom: 50,
            color: "rgba(134,126,126,1)",
            fontSize: 39,
            fontWeight: 'normal',
            fontFamily: "Courier",
          }}>
          BIENVENIDO
        </Text>

   
        <LoginButton
          
          readPermissions={['public_profile','email']}
          onLoginFinished={this.handleLoginFinished}
          onLogoutFinished={() => alert("logout.")}/>
        
      </View>
        
      
  
      
    )
  }
}

const styles = StyleSheet.create({
  image:{
    flex:1,
    width: null,
    height:  null ,
    //justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color: "rgba(255,255,255,1)",
    fontSize: 19,
    fontWeight: "600",
    fontFamily: "KohinoorDevanagari",
    backgroundColor: "rgba(53,85,239,1)",
    padding:10,
        
  },
  
 
  
});

export default LoginView