import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native'

//import Button from 'react-native-button';

import {
  Card,
  CardTitle,
  CardImage,
  CardContent,
  CardAction
} from 'react-native-card-view';
//import { SideMenu, List, ListItem } from 'react-native-elements';


export default class News extends Component {


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
        
        <View style={styles.container}>
          <Card>
            <CardImage>
              <Image
                style={{width: 300, height: 200}}
                source={{uri: 'https://getmdl.io/assets/demos/image_card.jpg'}}
              />
            </CardImage>
            <CardTitle>
              <Text style={styles.title}>1.- Gano Life en semana del emprendedor </Text>
            </CardTitle>
            <CardContent>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </CardContent>
            
          </Card>
          <Card>
            <CardImage>
              <Image
                style={{width: 300, height: 200}}
                source={{uri:'https://unsplash.it/600/400/?random'} }
              />
            </CardImage>
            <CardTitle>
              <Text style={styles.title}>2.- Nuevo Descuento en app </Text>
            </CardTitle>
            <CardContent>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </CardContent>
            
          </Card>
          <Card>
            <CardImage>
              <Image
                style={{width: 300, height: 200}}
                source={{uri:'https://unsplash.it/600/400/?random'}}
              />
            </CardImage>
            <CardTitle>
              <Text style={styles.title}>3.- Tienda ahora con 50% de descuento </Text>
            </CardTitle>
            <CardContent>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </CardContent>
            
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 60
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },
  card: {
    width: 300
  }
});