import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type MidScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Mid'>;

const MidScreen = () => {
  const navigation = useNavigation<MidScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* <Image source={require('../../assets/bridge-anim.png')} style={styles.image} /> */}
      <Text style={styles.heading}>Gentle reminders and simple tools to stay in touch</Text>
      {/* <Text style={styles.subHeading}>and simple tools</Text>
      <Text style={styles.subHeading}>to stay in touch.</Text> */}
      <Text style={styles.description}>
        Maintain meaningful connections while honoring your social energy.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Onboarding')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginButtonText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFCBA4',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  heading: {
    fontSize: 56,
    fontWeight: 'semibold',
    fontFamily: 'Poppins-Bold',
    color: '#333',
    textAlign: 'left',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 22,
    fontFamily: 'Poppins-Regular',
    color: '#333',
    textAlign: 'left',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    fontWeight: 'regular',
    fontFamily: 'Poppins-Regular',
    color: '#666',
    textAlign: 'left',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  loginButton: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

export default MidScreen;
