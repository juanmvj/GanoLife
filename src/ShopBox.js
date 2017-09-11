import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ShopBox extends Component {

  render() {

    const {image, name, likes, comments} = this.props.artist

    return (
      

        <View style={styles.artistBox}>

          <Image source={{uri: image}} style={styles.image} />

          <View style={styles.info}> 

             <Text style={styles.name}>{name}</Text>

              <View style={styles.row}>

                <View style={styles.inconContainer}>

                 <Icon name="ios-heart-outline" size={30} color="gray" /> 

                 <Text style={styles.count}>{likes}</Text>

                </View>

                <View style={styles.inconContainer}>


                 <Icon name="ios-chatboxes-outline" size={30} color='gray' /> 

                 <Text style={styles.count}>{comments}</Text>
                </View>
                 
              </View>

          </View>

        </View>
        

      
    );
  }
}

const styles = StyleSheet.create({


  info:{

    flex: 1,
    
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  artistBox:{

    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 2,//android only
    shadowColor: 'black',//ios
    shadowOpacity: .2,//ios
    shadowOffset:{//ios
      height:1,
      width: -2
    }


  },
  name:{
    fontSize: 20,
    marginTop: 10,
    color: '#333'

  },

  image: {

    width: 150,
    height: 150

  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 15,
  },
  inconContainer:{
    flex: 1,
    alignItems: 'center',
    
  },
  count:{

    color: 'gray',

  },
 
});