import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

function DetailsScreen({ route, navigation }) {
    const enteredValue = route.params.title;
    const loaderSpinning = useSelector((state) => state.loaderReducer.loaderSpinning);
    const dispatch = useDispatch();
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={
                    () => navigation.goBack()
                    //navigation.navigate('Home')
                }                
            />
            <Text>{enteredValue}</Text>
            <View style={{marginTop: 15}}>
                <Button title="Toggle Spinner" onPress={() =>  (loaderSpinning == 'false' ? dispatch({type: 'start_loader', payload: {} }) : dispatch({type: 'stop_loader', payload: {} })) } />
            </View>
            <Text>Spinner: {loaderSpinning}</Text>
        </View>
    );
}

export default DetailsScreen;