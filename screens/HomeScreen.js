import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { startLoader, stopLoader } from '../reducers/LoaderReducer';

function HomeScreen({ navigation }) {
    const [enteredText, setEnteredText] = useState('');
    const loaderSpinning = useSelector((state) => state.loaderReducer.loaderSpinning);
    const dispatch = useDispatch();
    
    const handleInputText = (val) => {        
        setEnteredText(val);
    }

    return (        
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{
            padding: 10, backgroundColor: 'pink', flexGrow: 1
          }}
            contentInsetAdjustmentBehavior="automatic">
            <Text>
                Enter a value
            </Text>
            <TextInput keyboardType='number-pad' style={styles.inputText} placeholder='Enter a value' value={enteredText} onChangeText={handleInputText} />
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details', { name: 'details page new', title: enteredText })}
            />
            <View style={{marginTop: 15}}>
                <Button title="Toggle Spinner" onPress={() =>  (loaderSpinning == 'false' ? dispatch({type: 'start_loader', payload: {} }) : dispatch({type: 'stop_loader', payload: {} })) } />
            </View>
            <Text>Spinner: {loaderSpinning}</Text>
        </ScrollView>
    );
}

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
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: 'white'
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

export default HomeScreen;