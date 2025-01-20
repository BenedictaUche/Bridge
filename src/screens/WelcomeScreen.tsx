import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.bridgeTitle}>Bridge</Text>
      <Image source={require('../../assets/bridge-anim.png')} style={styles.logo} />
      <Text style={styles.subtitle}>Stay connected, at your own pace</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Mid')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCBA4',
    fontFamily: 'Poppins-Regular',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bridgeTitle: {
    fontSize: 36,
    color: '#333',
    marginBottom: 10,
    fontFamily: 'DancingScript-Regular',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#6200ee',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
