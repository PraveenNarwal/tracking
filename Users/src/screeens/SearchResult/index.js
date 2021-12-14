import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import RouteMap from '../../components/RouteMap';

import Ubertype from '../../components/UberType';

const SearchResult = props => {
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap />
      </View>
      <View style={{height: 400}}>
        <Ubertype />
      </View>
    </View>
  );
};

export default SearchResult;
