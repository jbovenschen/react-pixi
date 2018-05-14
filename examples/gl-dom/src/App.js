import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Canvas } from 'react-pixi-dom';
import { View, Stylesheet } from 'react-pixi';

const styles = Stylesheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'space-between',
  },
  item: {
    flexBasis: 40,
    flexGrow: 0,
    flexShrink: 0,
    height: 40,
  }
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Canvas width={400} height={600}>
          <View style={styles.container}>
            <View style={styles.item}>

            </View>
            <View style={styles.item}>

            </View>
          </View>
        </Canvas>
      </div>
    );
  }
}

export default App;
