import React from 'react';
import {Image, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import cars from '../../assets/data/cars';

const HomeMap = porps => {
  const getImage = type => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
  };
  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 29.159226,
        longitude: 75.724391,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};
export default HomeMap;
