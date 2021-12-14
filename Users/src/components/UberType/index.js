import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';

import UbertypeRow from '../UbertypeRow';
import typesData from '../../assets/data/types';
const Ubertype = props => {
  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View>
      {typesData.map(type => (
        <UbertypeRow type={type} />
      ))}

      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Confirm the Ride
        </Text>
      </Pressable>
    </View>
  );
};

export default Ubertype;
