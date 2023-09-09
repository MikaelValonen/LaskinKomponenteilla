import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
  
export default function History({route, navigation}) {
  const { Data } = route.params;

  return (
      <View style={styles.container}>
      <Text>History</Text>
      <FlatList data={Data} renderItem={({item}) => <Text>{item.key}</Text>} keyExtractor={(item, index) => index.toString()} />
      </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 25,
      padding: 5,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    miniContainer: {
      width: 150,
      margin: 5,
      padding: 5,
      flexDirection: 'row',
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
    },
    button: {
      width: 150,
      color: 'blue',
      borderColor: 'gray',
      borderWidth: 1,
    },
  });
  