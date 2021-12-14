import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';

const DestinationSearch = props => {
  const [originText, setOriginText] = useState(null);
  const [destinationText, setDestinationText] = useState(null);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder=" from?"
          onPress={(data, details = null) => {
            setOriginText({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyB9OKe9S8RNGSjx7jnzrcL3Yup2PoTW26o',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
        <GooglePlacesAutocomplete
          placeholder="Where To?"
          onPress={(data, details = null) => {
            setDestinationText({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyB9OKe9S8RNGSjx7jnzrcL3Yup2PoTW26o',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
        {/* Circle  */}
        <View style={styles.circle} />

        {/* Line  */}
        <View style={styles.line} />

        {/* Square */}
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
