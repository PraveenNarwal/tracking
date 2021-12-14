import React from 'react';
import {Dimensions, Text, View} from 'react-native';

import HomeMap from '../../components/HomeMap';
import Covidmessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
const HomeScreen = props => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>
      <Covidmessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
