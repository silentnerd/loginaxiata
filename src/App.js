/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import Reset from './components/reset';

export default class App extends Component {

  state = {
    pin: '',
    attempt: 3,
    errorInfo: '',
    toggleView: true,
    validPin: '7890',
    blocked: false
  }

   handleInputPin = async (number) => {
    console.log(number);
    await this.setState({pin: this.state.pin + number}, () => console.log(this.state.pin));
    if( await this.state.pin.length === 4 && await this.state.pin === this.state.validPin){
      // If Success
      await this.setState({errorInfo: 'Success'});
      await await this.setState({pin: ''}, () => console.log(this.state.pin));
      await await this.setState({attempt: 3}, () => console.log(this.state.attempt));
      console.log("Success");
    }else if( await this.state.pin.length === 4 ){
      // If Failed
      if(await this.state.attempt === 3){
        await this.setState({errorInfo: 'PIN incorrect'});
        await this.setState({pin: ''}, () => console.log(this.state.pin));
        await this.state.attempt--;
        return
      }
      if(await this.state.attempt === 2){
        await this.setState({errorInfo: "PIN incorrect. Next incorrect attempt will block you."});
        await this.setState({pin: ''}, () => console.log(this.state.pin));
        await this.state.attempt--;
        return
      }
      if(await this.state.attempt <= 1){
        await this.setState({errorInfo: "You are currently block from our system. Please contact our customer support"});
        await this.setState({pin: ''}, () => console.log(this.state.pin));
        await this.state.attempt--;
        return
      }
    }
  }

  handleClearPin = () => {
    this.setState({pin: ''}, () => console.log(this.state.pin));
    console.log(this.state.pin);
  }

  toggleViewFunc = () => {
    this.setState({toggleView: !this.state.toggleView});
  }

  resetPin = () => {
    this.setState({validPin: '1234'});
  }

  renderLogin = () => {
    if(this.state.toggleView === true){
    return (
      <View style={styles.loginContainer}>
      <Text style={styles.title}>Enter <Text style={{fontWeight: 'bold'}}>PIN</Text> to unlock</Text>
      <View style={{flexDirection: 'row',  marginTop: 40}}>

        <View style={this.state.pin.length > 0 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20}} />
        <View style={this.state.pin.length > 1 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20}} />
        <View style={this.state.pin.length > 2 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20}} />
        <View style={this.state.pin.length > 3 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20}} />
      </View>
      <PinIndicator pinLength={this.state.pin.length} />

        <View style={{flexDirection: 'row',  marginTop: 10, width: '80%', textAlign: 'center' ,justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'red', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>{this.state.errorInfo}</Text>
        </View>
      <View style={{marginTop: 30, width: '80%'}}>
        <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={() => this.handleInputPin("1")}>
            <View style={{ width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>1</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleInputPin("2")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>2</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleInputPin("3")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>3</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={() => this.handleInputPin("4")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>4</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleInputPin("5")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>5</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleInputPin("6")}>
            <View style={{ width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>6</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={() => this.handleInputPin("7")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>7</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleInputPin("8")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>8</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleInputPin("9")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>9</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
          <TouchableOpacity>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 35,}} >
              <Text style={{fontSize: 20}}></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleInputPin("0")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>0</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleClearPin()}>
            <View style={{ width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20, color: '#ff3f34'}}>X</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginTop: 20,flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text>Forgot PIN?</Text>
        <TouchableOpacity onPress={() => this.toggleViewFunc()}>
          <Text>Tap here to reset</Text>
        </TouchableOpacity>
      </View>
      </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3c40c6', height: 300}}>
      <Image
          style={{width: 150, height: 150}}
          source={require('../assets/key.png')}
        />
        </View>
        {this.renderLogin()}
        {this.state.toggleView === false ? <Reset toggleViewFunc={this.toggleViewFunc.bind(this)} resetPin={this.resetPin.bind(this)} /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 100,
    margin: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#fafafa',
    elevation: 2
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
