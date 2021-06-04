import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Item = (props) => {
  return (
    <View style={styles.propItem}>
      <Image style={styles.imageBlock} source={{uri: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w900X450/Take_in_the_Scenery.jpg'}}/>
      <Text>{props.item.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBlock: {
    height: 100,
    width: '100%',
    resizeMode: 'contain'
  },
  propItem: {
    backgroundColor: 'pink', 
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    flex: 1
  }
});

export default Item;