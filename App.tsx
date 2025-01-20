import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import * as Font from 'expo-font';
import { ActivityIndicator, View } from 'react-native';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load custom fonts
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'DancingScript-Regular': require('./assets/fonts/DancingScript-Regular.ttf'),
        'DancingScript-Bold': require('./assets/fonts/DancingScript-Bold.ttf'),
      });
      setFontsLoaded(true); // Set fontsLoaded to true once fonts are loaded
    };

    loadFonts();
  }, []);

  // Show a loading indicator until fonts are loaded
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  // Render the app once fonts are loaded
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
