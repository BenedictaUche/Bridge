import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

const OnboardingScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const onboardingData = [
    {
      title: 'Story Connected, Your Way',
      description: `You're through known more productive brands.`,
      image: require('../../assets/Handshake.png'),
      backgroundColor: '#FFD1DC',
    },
    {
      title: 'Never Forget a Message',
      description: 'We suggest quick, friendly replies.',
      image: require('../../assets/Handshake.png'),
      backgroundColor: '#D6CFF7',
    },
    {
      title: 'Understand Your Social Energy',
      description: 'Track your mood and energy levels.',
      image: require('../../assets/phone.png'),
      backgroundColor: '#FF9AA2',
    },
    {
      title: 'Stay Connected on Your Terms',
      description: 'We’ll handle the reminders for you.',
      image: require('../../assets/Handshake.png'),
      backgroundColor: '#FFECB3',
    },
    {
      title: 'Reply at Your Pace',
      description: 'Don’t respond instantly. We’ll help you stay connected.',
      image: require('../../assets/Handshake.png'),
      backgroundColor: '#D8F3DC',
    },
  ];

  const handleNext = () => {
    if (currentPage < onboardingData.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('SignUp');
    }
  };

  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const page = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentPage(page);
        }}
      >
        {onboardingData.map((item, index) => (
          <View key={index} style={[styles.page, { backgroundColor: item.backgroundColor }]}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentPage === onboardingData.length - 1 ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    width: Dimensions.get('window').width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});

export default OnboardingScreen;
