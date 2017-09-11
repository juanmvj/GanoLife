import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';


import LoginView from './LoginView';
import MapasView from './MapasView';
//import ContactView from './ContactView';
import News from './News';//esta es para la prueba de las tarjetas se quita despues 
import NavBar from './NavBar';
import Menu from './Menu';

import ContactoGano from './ContactoGano';

import {Scene, Router, Actions} from 'react-native-router-flux';

export default class GanoLife extends Component {
  render() {
    return <Router>

      <Scene key="root">
        <Scene key="login" component={LoginView} hideNavBar={true} initial={true}/>
        <Scene key="news" component={News} navBar={NavBar}/>
        <Scene key="map" component={MapasView} />
        <Scene key="menu" component={Menu} />
        <Scene key="GanoC" component={ContactoGano} />
        
      </Scene>
    </Router>
  }
}



AppRegistry.registerComponent('GanoLife', () => GanoLife);