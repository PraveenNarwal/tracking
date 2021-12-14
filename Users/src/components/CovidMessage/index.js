import React from 'react';
import {Text, View} from 'react-native';

import styles from './style';
const Covidmessage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>not just a component</Text>
      <Text style={styles.text}>
        I can't be sure it happened because of that but I updated my project
        name using react-native-rename and rebuild the project couple of hours
        later. Since then I cant reload my project on device.
      </Text>
      <Text style={styles.learnMore}>learn more</Text>
    </View>
  );
};

export default Covidmessage;
