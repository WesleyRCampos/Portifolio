import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { logoImag } from './assets/Logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImag}/>
      <Text style={styles.titleText}>Aqui é canais de verdade</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff008a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height: 64,
    width: 374,
    
  },
  titleText:{
    color: 'white',
    fontSize: 16,
    marginTop: 28,

  }
});
