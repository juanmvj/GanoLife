import React, { Component, } from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


class ContactoGano extends Component {
  
  render() {
    
    var text = 'CONTACTO';
    return (
      
      <View 
        style={styles.container}>
        <Image 
              style={{
                width: 250,
                height: 150,

              }}
              resizeMode={"contain"}
              source={require('../img/logo_ganolife.png')}
                  />
        <Text
          style={styles.iconText}>
          {text}
        </Text>
        <View 
          style={{justifyContent:"space-between"}}>
                      <View
                        style={styles.iconContainer}>
                          <Icon name="logo-facebook" size={40} color="gray" ></Icon>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 16,
                              fontWeight: 'normal',
                              fontFamily: 'Helvetica Neue',
                            }}>
                            @GanoLife.Mexico.Sitio.Oficial

                          </Text>
                      </View>
                      <View
                        style={styles.iconContainer}>
                          <Icon name="logo-twitter" size={40} color="gray" ></Icon>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 16,
                              fontWeight: 'normal',
                              fontFamily: 'Helvetica Neue',
                            }}>
                            @GANOLIFEMEXICO
                          </Text>
                      </View>
                      <View
                        style={styles.iconContainer}>
                          <Icon name="logo-instagram" size={40} color="gray" ></Icon>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 16,
                              fontWeight: 'normal',
                              fontFamily: 'Helvetica Neue',
                            }}>
                            @ganolifemexico
                          </Text>
                      </View>
                    
                    
          </View>
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
  container:{
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(248,249,252,1)",
    
  },
  
  text:{
    color: "rgba(255,255,255,1)",
    fontSize: 19,
    fontWeight: "600",
    fontFamily: "KohinoorDevanagari",
    backgroundColor: "rgba(53,85,239,1)",
    padding:10,
        
  },   
  iconContainer:{
    //flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    width:260,
    // backgroundColor: "red",
    margin:23,
  },
  iconText:{
    color: 'black',
    fontSize: 24,
    fontWeight: 'normal',
    fontFamily: 'Helvetica Neue',
  }
});

export default ContactoGano