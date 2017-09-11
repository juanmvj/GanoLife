import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native'



import {
  Card,
  CardTitle,
  CardImage,
  CardContent,
  CardAction
} from 'react-native-card-view';
import { Actions, Router, Scene } from 'react-native-router-flux';

export default class Menu extends Component {

  _renderTitle (title) {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Text style={{fontSize: 20}}>{title}</Text>
      </View>
    )
  }

  render () {
    return (
      <ScrollView>
       <TouchableHighlight
         underlayColor={"rgba(198,192,192,1)"}
         onPress={Actions.login}>
        <View style={styles.container}>

          <Card>
            <CardTitle>
              <Text style={styles.title} >Mi perfil</Text>
            </CardTitle>
          </Card>
             
        </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"rgba(198,192,192,1)"}
         onPress={Actions.login}>
        <View style={styles.container}>

          <Card>
            <CardTitle>
              <Text style={styles.title} >Comisiones</Text>
            </CardTitle>
          </Card>
             

        </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"rgba(198,192,192,1)"}
         onPress={Actions.login}>
        <View style={styles.container}>
          <Card>
            <CardTitle>
              <Text style={styles.title} >Tienda</Text>
            </CardTitle>
          </Card>
        </View>
        </TouchableHighlight>
        
        <TouchableHighlight
          underlayColor={"rgba(198,192,192,1)"}
         onPress={Actions.login}>
        <View style={styles.container}>
          <Card>
            <CardTitle>
              <Text style={styles.title} >Pedidos</Text>
            </CardTitle>
          </Card>
        </View>
        </TouchableHighlight>
        
        <TouchableHighlight
          underlayColor={"rgba(198,192,192,1)"}
         onPress={Actions.login}>
        <View style={styles.container}>
          <Card>
            <CardTitle>
              <Text style={styles.title} >agenda</Text>
            </CardTitle>
          </Card>
        </View>
        </TouchableHighlight>
        
        <TouchableHighlight
          underlayColor={"rgba(198,192,192,1)"}
         onPress={Actions.map}>
        <View style={styles.container}>
          <Card>
            <CardTitle>
              <Text style={styles.title} >Sucursales</Text>
            </CardTitle>
          </Card>
        </View>
        </TouchableHighlight>
        
        <TouchableHighlight
          underlayColor={"rgba(198,192,192,1)"}
         onPress={Actions.GanoC}>
        <View style={styles.container}>
          <Card>
            <CardTitle>
              <Text style={styles.title} >Contacto</Text>
            </CardTitle>
          </Card>
        </View>
        </TouchableHighlight>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 6,
    //marginBottom: 60
  },
  title: {
    fontSize: 18,
    backgroundColor: 'transparent'
  },
 
  card: {
    width: 300,
    
  },
  touch:{
    
  }
});