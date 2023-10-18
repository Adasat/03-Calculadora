import React from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View } from 'react-native';
import { CalculadoraScreens } from './src/screens/CalculadoraScreens';
import { styles } from './src/theme/app.theme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content"/>
      <ImageBackground 
        source={require('./assets/campo-insular.jpg')}
        resizeMode='cover'
        
        style={styles.fondo}
      >
      <View style={{ ...styles.fondo, }}>
        <CalculadoraScreens/>

      </View>

      </ImageBackground>
    </SafeAreaView>
  )
}



export default App;
