import React from 'react';
import { Component } from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../redux/modules/app';
import I18n from '../../trans/translator';
import { IApp } from '../../redux/modules/app'
import { IStore } from '../../redux/IStore';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {
  app: IApp;
  next: typeof actions.textInputBox;
  _lang: typeof actions.changeLanguage;
};

class App extends Component<Props> {

  onButtonPress = () => {
    alert("Text from the Store: " + this.props.app.textFromInputBox);
  }

  onTextInputChange = (text: any) => {
    this.props.next(text.text)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{I18n.t('_appHomeBody', { locale: this.props.app.language })}</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TextInput placeholder={"hi"} onChangeText={(text) => this.onTextInputChange({text})}/>
        <Button title="TEXT_FROM_STORE" onPress={this.onButtonPress} />
        <Button title="ANGOL" onPress={() => this.props._lang('en')} />
        <Button title="MAGYAR" onPress={() => this.props._lang('hu')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
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

const mapStateToProps = (state: IStore, props: any) => {
  return {
    app: state.app,
    ...props
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    next: actions.textInputBox,
    _lang: actions.changeLanguage,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);