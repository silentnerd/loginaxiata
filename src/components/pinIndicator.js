import React from 'react';
import {
  View,
  Text
} from 'react-native';

const PinIndicator = () => (
  return (
    <View style={{flexDirection: 'row',  marginTop: 40}}>

      <View style={this.state.pin.length > 0 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20}} />
      <View style={this.state.pin.length > 1 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20}} />
      <View style={this.state.pin.length > 2 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20}} />
      <View style={this.state.pin.length > 3 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20}} />
    </View>
  );
);

export default PinIndicator;
