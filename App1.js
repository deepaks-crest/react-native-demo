/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Item from './components/Item';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  FlatList
} from 'react-native';

const App = () => {

  const [enteredText, setEnteredText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const dummy_data = [
      { 'id': 1, 'val': 'abc' },
      { 'id': 2, 'val': 'pqr' },
      { 'id': 3, 'val': 'zxc' },
      { 'id': 4, 'val': 'zx2c' },
      { 'id': 5, 'val': 'zxc3' },
      { 'id': 6, 'val': 'ab4c' },
      { 'id': 7, 'val': 'pqr5' },
      { 'id': 8, 'val': 'zxc6' },
      { 'id': 9, 'val': 'zxc7' },
      { 'id': 10, 'val': 'zxc8' }
  ];

  const resetForm = () => {
    Keyboard.dismiss();
    setEnteredText('');
    setSubmittedText('');
  };

  const submitForm = () => {
    if (enteredText) {
      Keyboard.dismiss();
      setEnteredText('');
      setSubmittedText(enteredText);
    }
  };

  const handleInputText = (val) => {
    val = val.replace(/[^0-9]/g, '');
    setEnteredText(val);
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Header />
      {/* <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{
        paddingBottom: 60
      }}
        contentInsetAdjustmentBehavior="automatic"> */}
        {/* <Text>
          Enter a value
        </Text>
        <TextInput keyboardType='number-pad' style={styles.inputText} placeholder='Enter a value' value={enteredText} onChangeText={handleInputText} />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={resetForm}>
            <View style={styles.btnClear}>
              <Text style={styles.clearBtnText}>Reset</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={submitForm}>
            <View style={[styles.btnClear, styles.submitBtn]}>
              <Text style={styles.clearBtnText}>Submit</Text>
            </View>
          </TouchableOpacity>          
        </View> */}
        <FlatList numColumns="2" contentContainerStyle={ {paddingBottom: 60} } data={dummy_data} renderItem={itemData => { return (<Item item={itemData.item}/>) }}/>
        {/* {dummy_data.map((item, index) => { return (<Item item={item}/>) })} */}
        {/* {submittedText ? <View><Text style={submittedText == '12' ? { color: 'red' } : {}}>Your entered number is: {submittedText}</Text></View> : <View></View>} */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  inputText: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    marginTop: 5
  },
  submitBtn: {
    marginTop: 15,
    backgroundColor: 'blue'
  },
  btnClear: {
    height: 35,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    width: 80
  },
  clearBtnText: {
    color: 'white',
    textTransform: 'uppercase'
  }
});

export default App;
