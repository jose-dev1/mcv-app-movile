import { StyleSheet, View, Text } from 'react-native';
export default function Descargas() {
  return (
    <View style={styles.container}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Vista Descargas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});