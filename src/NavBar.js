import {
 View, Image, StatusBar, TouchableWithoutFeedback
} from 'react-native';
import React, { Component } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

/***************+va antes del menú hamburgursa
//<Icon name="ios-menu" size={40} color="gray" style={styles.helpStyle} ></Icon>
*****************/
class NavBar extends Component {
  render() {
    return (
<View style={styles.backgroundStyle}>
     
      <View style={{ flexDirection: 'row' }}>
        <TouchableWithoutFeedback onPress={() => Actions.login()}>
            <Icon name="md-arrow-back" size={30} color="gray" style={styles.backarrowStyle} ></Icon>
        </TouchableWithoutFeedback>
        
        <TouchableWithoutFeedback onPress={() => Actions.menu()}>
            <Icon name="ios-menu" size={30} color="gray" style={styles.settingStyle} ></Icon>
        </TouchableWithoutFeedback>
        
    </View>
</View>
    );
  }

}
const styles = {
  backgroundStyle: {
    backgroundColor: 'lightgray',
    
  },
  backarrowStyle: {
    //resizeMode: 'contain',
    flexDirection: 'row',
    width: 50,
    height: 50,
    left: 0,
    justifyContent: 'flex-start',
    marginLeft:15,
    marginTop:15,
    
  },
  helpStyle: {
    //resizeMode: 'contain',
      width: 50,
      height: 50,
      left: 220,
      justifyContent: 'flex-end',
      position: 'relative'

  },
  settingStyle: {
    //resizeMode: 'contain',//solo para image
    width: 50,
    height: 50,
    justifyContent: 'flex-end',
  position: 'relative',
  left: 250,
    marginTop:15,
  }
};


export default NavBar;