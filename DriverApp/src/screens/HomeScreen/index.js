import React from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyB9OKe9S8RNGSjx7jnzrcL3Yup2PoTW26o';

const HomeScreen = () => {
  return (
    <View>
      <Text>YOu good?</Text>
      <MapView
        style={{width: '100%', height: Dimensions.get('window').height - 150}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>

      <Pressable onPress={() => console.warn('Go')} style={styles.goButton}>
        <Text style={styles.goText}>Go </Text>
      </Pressable>
      <View style={styles.bottomContainer}>
        <Entypo name={'menu'} />
        <Text style={styles.bottomText}>you are offline</Text>
        <Entypo name={'menu'} />
      </View>
    </View>
  );
};

export default HomeScreen;
