import React, { Component, } from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'

import MapView from 'react-native-maps';

class MapasView extends Component {


  render() {
    return (
        
       <View style={styles.container}>
            <MapView
    initialRegion={{
      latitude: 19.432608,
      longitude: -99.133208,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }} style={styles.map}>
              
          <MapView.Marker
            coordinate={{
                  latitude: 19.432608,
                  longitude: -99.133208,
                }}
            title={'sucursal'}
            
          />
     
          </MapView>
        
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
    backgroundColor: "rgba(34,74,146,1)",
    padding:10,
        
  },
  map:{
    left:0,
    right:0,
    top:0,
    bottom:0,
    position: 'absolute',
  
  },
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
 
  
});

export default MapasView