import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ToastModuleAndroid, CallbackModuleAndroid} from './src/module/NativeModules'
import { Colors} from 'react-native/Libraries/NewAppScreen';

class App extends Component {

  componentDidMount(): void {
    //ToastModuleAndroid.show("Toast Message Using Native Code", ToastModuleAndroid.LENGTH_LONG);
  }


  // Callback data comes after 10 seconds
  getCallbackData = () => {
    ToastModuleAndroid.show("Wait 10 seconds....", ToastModuleAndroid.LENGTH_LONG)
    CallbackModuleAndroid.getCallbackData((data) => {
      ToastModuleAndroid.show(data, ToastModuleAndroid.LENGTH_LONG)
    })
  }

  showToast = () => {
    ToastModuleAndroid.show("Toast message from native code", ToastModuleAndroid.LENGTH_LONG)
  }


  render(): React.ReactNode {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.title}>Testing Native Module</Text>

          <TouchableOpacity style={[styles.button, {marginTop:50}]} onPress={this.showToast}>
             <Text style={styles.buttonText}>Show Toast</Text>
           </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.getCallbackData}>
            <Text style={styles.buttonText}>Get Callback Data</Text>
          </TouchableOpacity>
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

  button: {
    width:200,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:7,
    borderRadius:10,
    backgroundColor:'grey',
    borderColor:'blue',
    borderWidth: 2,
    marginTop:10,
  },

  buttonText:{
    color:"white",
    fontWeight: "bold"
  },

});

export default App;
