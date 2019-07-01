import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Reset = props => (
  <View style={styles.resetContainer}>
    <View
      style={{ marginTop: 50, justifyContent: "center", alignItems: "center", width: '100%'}}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Reset your PIN</Text>
    </View>
    <View
      style={{ marginTop: 50, justifyContent: "center", alignItems: "center", width: "100%" }}
    >
      <TouchableOpacity onPress={() => props.toggleViewFunc()}>
        <Text>Enter PIN again</Text>
      </TouchableOpacity>
    </View>

    <View
      style={{
        marginTop: 200,
        padding: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3c40c6"
      }}
    >
      <TouchableOpacity onPress={() => props.resetPin()}>
        <View style={{ width: "100%", backgroundColor: "#3c40c6" }}>
          <Text style={{color: '#fff'}}>Reset PIN</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  resetContainer: {
    flex: 0.5,
    position: "absolute",
    width: "90%",
    height: "60%",
    marginLeft: 20,
    marginBottom: 20,
    justifyContent: "flex-start",
    bottom: 0,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#fafafa",
    elevation: 2
  }
});

export default Reset;
