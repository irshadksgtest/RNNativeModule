import React, {Component} from 'react';
import ToastModule from './src/module/ToastModule'
import {StyleSheet, View, Text,} from 'react-native';

import { Colors} from 'react-native/Libraries/NewAppScreen';

class App extends Component {

  componentDidMount(): void {
    ToastModule.showToast("Toast Message !!!!!!!", ToastModule.LENGTH_LONG);
  }


  render(): React.ReactNode {
    return (
        <View style={{flex:1}}>
            <Text style={styles.title}>Hello Native Module</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    alignSelf:'center',
  },
});

export default App;
