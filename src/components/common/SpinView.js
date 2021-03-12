import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-spinkit';


export default SpinView = props => {
  return (
    <View style={styles.spinContainer}>
      <Spinner type='Circle' isVisible={true} size={100} color={'#fff'} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF3340'
  }
});
