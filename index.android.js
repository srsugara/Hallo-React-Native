/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

// The URL for the `posts` endpoint provided by WP JSON API
var DATA={};
var REQUEST_URL = 'https://jsonplaceholder.typicode.com/posts/1';

var AwesomeProject = React.createClass({
  getInitialState: function() {
    return {
      thought: DATA,
    };
  },
  // Automatically called by react when this component has finished mounting.
  componentDidMount: function() {
    this.fetchData();
  },
  // This is where the magic happens! Fetches the data from our API and updates the application state.
  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below
        this.setState({
          thought: { title: responseData.title, body: responseData.body },
        });
      })
      .done();
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Syauqi Rahmat Sugara
        </Text>
        <Image source={require('./img/syauqi.png')} style={{width: 120, height: 150}}/>
        <Text style={styles.instructions}>
          The player of Basilischi Squad
        </Text>
        <Text style={styles.welcome}>
          Get one data from API
        </Text>
        <Text style={styles.instructions}>
          Title : {this.state.thought.title}
        </Text>
        <Text style={styles.instructions}>
          Body : {this.state.thought.body}
        </Text>
      </View>
    );
  }
});

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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
