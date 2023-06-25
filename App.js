import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyInput from './src/MyInput';

export default function App() {
  return (
    <View style={styles.container}>
      <MyInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE375',
    // background: rgb(0,151,195),
    // background: linear-gradient(rgba(0,151,195,1), rgba(113,225,255,1), rgba(172,228,255,1), rgba(255,219,118,1), rgba(255,237,169,1)),
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
