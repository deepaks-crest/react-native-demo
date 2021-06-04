import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
    return (
        <View style={styles.headerView}>
            <Text style={styles.headerTitle}>Header</Text>            
        </View>
    );
}

const styles = StyleSheet.create({
    headerView: {
        height: 60,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 22
    }
});

export default Header;