import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>背景色を変えてみよう！</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeb3b', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});